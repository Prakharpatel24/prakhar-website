
export type MatchLevel =
    | "high"
    | "possible"
    | "low"
    | "empty";

export interface NameMatchResult {
    score: number;
    level: MatchLevel;
    normalizedA: string;
    normalizedB: string;
    matchedTokens: number;
    tokenCount: number;
    reordered: boolean;
    initialsUsed: boolean;
    explanation: string;
    tokenMatches: TokenMatch[];
    unmatchedTokens: UnmatchedToken[];
}


export interface TokenMatch {
    tokenA: string;
    tokenB: string;
    similarity: number;
    type: "exact" | "initial" | "spelling";
}

export interface UnmatchedToken {
    token: string;
    source: "A" | "B";
}


export function normalizeName(value: string): string {
    return value
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function levenshtein(a: string, b: string): number {
    const previous = Array.from(
        { length: b.length + 1 },
        (_, i) => i
    );

    for (let i = 1; i <= a.length; i++) {
        const current = [i];

        for (let j = 1; j <= b.length; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;

            current[j] = Math.min(
                current[j - 1] + 1,
                previous[j] + 1,
                previous[j - 1] + cost
            );
        }

        previous.splice(0, previous.length, ...current);
    }

    return previous[b.length];
}

function tokenSimilarity(a: string, b: string): number {
    if (a === b) return 1;

    // Initials, such as R vs Rahul.
    if (
        (a.length === 1 || b.length === 1) &&
        a[0] === b[0]
    ) {
        return 0.82;
    }

    const maxLength = Math.max(a.length, b.length);

    const editScore =
        1 - levenshtein(a, b) / maxLength;

    // Small shared-prefix bonus.
    let commonPrefix = 0;

    while (
        commonPrefix < Math.min(3, a.length, b.length) &&
        a[commonPrefix] === b[commonPrefix]
    ) {
        commonPrefix++;
    }

    const prefixBonus =
        commonPrefix * 0.025 * (1 - editScore);

    return Math.min(1, editScore + prefixBonus);
}

export function compareNames(
    firstName: string,
    secondName: string
): NameMatchResult {
    const normalizedA = normalizeName(firstName);
    const normalizedB = normalizeName(secondName);

    const emptyResult: NameMatchResult = {
        score: 0,
        level: "empty",
        normalizedA,
        normalizedB,
        matchedTokens: 0,
        tokenCount: 0,
        reordered: false,
        initialsUsed: false,
        explanation: "Enter two names to begin the comparison.",
        tokenMatches: [],
        unmatchedTokens: [],
    };

    if (!normalizedA || !normalizedB) {
        return emptyResult;
    }

    const tokensA = normalizedA.split(" ").slice(0, 8);
    const tokensB = normalizedB.split(" ").slice(0, 8);

    const tokenCount = Math.max(
        tokensA.length,
        tokensB.length
    );

    const candidates: {
        i: number;
        j: number;
        similarity: number;
    }[] = [];

    for (let i = 0; i < tokensA.length; i++) {
        for (let j = 0; j < tokensB.length; j++) {
            candidates.push({
                i,
                j,
                similarity: tokenSimilarity(
                    tokensA[i],
                    tokensB[j]
                ),
            });
        }
    }

    // Match the strongest token pairs first.
    candidates.sort(
        (a, b) => b.similarity - a.similarity
    );

    const usedA = new Set<number>();
    const usedB = new Set<number>();

    let totalSimilarity = 0;
    let matchedTokens = 0;
    let initialsUsed = false;
    const tokenMatches: TokenMatch[] = [];

    for (const candidate of candidates) {
        if (
            usedA.has(candidate.i) ||
            usedB.has(candidate.j)
        ) {
            continue;
        }

        // Ignore weak token relationships.
        if (candidate.similarity < 0.55) {
            continue;
        }

        usedA.add(candidate.i);
        usedB.add(candidate.j);

        totalSimilarity += candidate.similarity;
        matchedTokens++;


        const a = tokensA[candidate.i];
        const b = tokensB[candidate.j];

        const isInitial =
            a !== b &&
            (a.length === 1 || b.length === 1) &&
            a[0] === b[0];

        if (isInitial) {
            initialsUsed = true;
        }

        tokenMatches.push({
            tokenA: a,
            tokenB: b,
            similarity: Math.round(
                candidate.similarity * 100
            ),
            type:
                a === b
                    ? "exact"
                    : isInitial
                        ? "initial"
                        : "spelling",
        });

    }


    const unmatchedTokens: UnmatchedToken[] = [
        ...tokensA
            .filter((_, index) => !usedA.has(index))
            .map((token) => ({
                token,
                source: "A" as const,
            })),

        ...tokensB
            .filter((_, index) => !usedB.has(index))
            .map((token) => ({
                token,
                source: "B" as const,
            })),
    ];


    // Missing tokens lower the final score.
    const score = Math.round(
        (totalSimilarity / tokenCount) * 100
    );

    const sameTokens =
        tokensA.length === tokensB.length &&
        [...tokensA].sort().join(" ") ===
        [...tokensB].sort().join(" ");

    const reordered =
        sameTokens && normalizedA !== normalizedB;

    const level: MatchLevel =
        score >= 90
            ? "high"
            : score >= 65
                ? "possible"
                : "low";

    let explanation: string;

    if (reordered) {
        explanation =
            "Both names contain the same tokens in a different order.";
    } else if (score === 100) {
        explanation =
            "Both names match after normalization.";
    } else if (initialsUsed) {
        explanation =
            "The comparison detected matching initials. Other token differences may affect the score.";
    } else if (matchedTokens < tokenCount) {
        explanation =
            "Some name components are missing or substantially different, reducing the similarity score.";
    } else {
        explanation =
            "The names share similar components, with some spelling differences.";
    }

    return {
        score,
        level,
        normalizedA,
        normalizedB,
        matchedTokens,
        tokenCount,
        reordered,
        initialsUsed,
        explanation,
        tokenMatches,
        unmatchedTokens,
    };
}
