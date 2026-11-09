
"use client";

import { useMemo, useState } from "react";
import {
    ArrowRight,
    ArrowLeftRight,
    Fingerprint,
    RotateCcw,
    Sparkles,
} from "lucide-react";

import {
    compareNames,
} from "@/lib/name-similarity";

const examples = [
    {
        label: "Reordered",
        a: "Rahul Kumar Sharma",
        b: "Sharma Rahul Kumar",
    },
    {
        label: "Initials",
        a: "Rahul Kumar Sharma",
        b: "R Kumar Sharma",
    },
    {
        label: "Spelling variation",
        a: "Rahul Sharma",
        b: "Raul Sharma",
    },
    {
        label: "Different names",
        a: "Priya Sharma",
        b: "Neha Gupta",
    },
];

export function NamePlayground() {
    const [firstName, setFirstName] = useState(
        "Rahul Kumar Sharma"
    );

    const [secondName, setSecondName] = useState(
        "Sharma Rahul Kumar"
    );

    const [submitted, setSubmitted] = useState({
        a: "Rahul Kumar Sharma",
        b: "Sharma Rahul Kumar",
    });

    const result = useMemo(
        () => compareNames(submitted.a, submitted.b),
        [submitted]
    );

    const isDirty =
        firstName !== submitted.a ||
        secondName !== submitted.b;

    function handleCompare(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        setSubmitted({
            a: firstName,
            b: secondName,
        });
    }

    function loadExample(
        example: (typeof examples)[number]
    ) {
        setFirstName(example.a);
        setSecondName(example.b);

        setSubmitted({
            a: example.a,
            b: example.b,
        });
    }

    function reset() {
        setFirstName("");
        setSecondName("");

        setSubmitted({
            a: "",
            b: "",
        });
    }

    const hasResult = result.level !== "empty";

    return (
        <section
            id="experiment"
            aria-labelledby="experiment-heading"
            className="name-lab-section"
        >
            <div className="container-editorial">
                <div className="name-lab-layout">
                    <div className="name-lab-intro">
                        <div className="name-lab-eyebrow">
                            <span className="editorial-label">
                                03 / INTERACTIVE EXPERIMENT
                            </span>

                            <Fingerprint
                                size={27}
                                strokeWidth={1.4}
                                aria-hidden="true"
                            />
                        </div>

                        <h2
                            id="experiment-heading"
                            className="name-lab-title"
                        >
                            Not all names
                            <br />
                            match{" "}
                            <span className="display-serif">
                                exactly.
                            </span>
                        </h2>

                        <p className="name-lab-description">
                            Small spelling changes, initials, and different
                            word orders can make two versions of a name
                            look surprisingly different.
                        </p>

                        <p className="name-lab-description">
                            Try the playground to explore how a simple
                            similarity algorithm handles those variations.
                        </p>

                        <div className="name-lab-footnote">
                            <Sparkles size={17} aria-hidden="true" />

                            <span>
                                A small engineering experiment,
                                designed to make matching logic visible.
                            </span>
                        </div>
                    </div>

                    <div className="name-lab-panel">
                        <div className="name-lab-panel-header">
                            <span className="editorial-label">
                                NAME SIMILARITY / V1
                            </span>

                            <span className="name-lab-panel-indicator">
                                <span />
                                INTERACTIVE
                            </span>
                        </div>

                        <form onSubmit={handleCompare}>
                            <div className="name-lab-fields">
                                <label className="name-lab-field">
                                    <span>FIRST NAME INPUT</span>

                                    <input
                                        type="text"
                                        value={firstName}
                                        onChange={(event) =>
                                            setFirstName(event.target.value)
                                        }
                                        placeholder="Enter the first name"
                                        autoComplete="off"
                                        maxLength={100}
                                    />
                                </label>

                                <label className="name-lab-field">
                                    <span>SECOND NAME INPUT</span>

                                    <input
                                        type="text"
                                        value={secondName}
                                        onChange={(event) =>
                                            setSecondName(event.target.value)
                                        }
                                        placeholder="Enter the second name"
                                        autoComplete="off"
                                        maxLength={100}
                                    />
                                </label>
                            </div>

                            <div className="name-lab-actions">
                                <button
                                    type="submit"
                                    className="name-lab-compare"
                                    disabled={
                                        !firstName.trim() ||
                                        !secondName.trim()
                                    }
                                >
                                    Compare names
                                    <ArrowRight
                                        size={17}
                                        aria-hidden="true"
                                    />
                                </button>

                                <button
                                    type="button"
                                    onClick={reset}
                                    className="name-lab-reset"
                                    aria-label="Clear both name inputs"
                                >
                                    <RotateCcw
                                        size={17}
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>
                        </form>

                        <div
                            className="name-lab-result"
                            aria-live="polite"
                            aria-atomic="true"
                        >
                            <div className="name-lab-result-top">
                                <span className="editorial-label">
                                    SIMILARITY RESULT
                                </span>

                                {isDirty && (
                                    <span className="name-lab-pending">
                                        RECOMPARE TO UPDATE
                                    </span>
                                )}
                            </div>

                            <div className="name-lab-score-row">
                                <div className="name-lab-score">
                                    {hasResult ? result.score : "—"}

                                    {hasResult && (
                                        <span>/100</span>
                                    )}
                                </div>

                                {hasResult && (
                                    <span
                                        className={`name-lab-status name-lab-status-${result.level}`}
                                    >
                                        {result.level === "high"
                                            ? "HIGH SIMILARITY"
                                            : result.level === "possible"
                                                ? "POSSIBLE SIMILARITY"
                                                : "LOW SIMILARITY"}
                                    </span>
                                )}
                            </div>

                            <div
                                className="name-lab-progress"
                                role="progressbar"
                                aria-label="Name similarity"
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-valuenow={
                                    hasResult ? result.score : 0
                                }
                            >
                                <div
                                    style={{
                                        width: hasResult
                                            ? `${result.score}%`
                                            : "0%",
                                    }}
                                />
                            </div>

                            <p className="name-lab-explanation">
                                {result.explanation}
                            </p>


                            {hasResult && (
                                <div className="name-breakdown">
                                    <div className="name-breakdown-header">
                                        <div>
                                            <p className="editorial-label">
                                                HOW THE NAMES COMPARE
                                            </p>

                                            <span className="name-breakdown-subtitle">
                                                Token-level similarity breakdown
                                            </span>
                                        </div>
                                    </div>

                                    {result.tokenMatches.length > 0 && (
                                        <div className="name-breakdown-pairs">
                                            <div className="name-breakdown-columns">
                                                <span>NAME A</span>
                                                <span>NAME B</span>
                                            </div>

                                            {result.tokenMatches.map((match, index) => (
                                                <div
                                                    className="name-breakdown-pair"
                                                    key={`${index}-${match.tokenA}-${match.tokenB}`}
                                                >
                                                    <div className="name-breakdown-token">
                                                        {match.tokenA}
                                                    </div>

                                                    <div className="name-breakdown-connection">
                                                        <ArrowLeftRight
                                                            size={15}
                                                            aria-hidden="true"
                                                        />
                                                        <span>{match.similarity}%</span>
                                                    </div>

                                                    <div className="name-breakdown-token">
                                                        {match.tokenB}
                                                    </div>

                                                    <div className="name-breakdown-type">
                                                        {match.type === "exact"
                                                            ? "Exact match"
                                                            : match.type === "initial"
                                                                ? "Initial match"
                                                                : "Spelling variation"}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {result.unmatchedTokens.length > 0 && (
                                        <div className="name-breakdown-unmatched">
                                            <p className="editorial-label">
                                                UNMATCHED COMPONENTS
                                            </p>

                                            <div className="name-breakdown-unmatched-list">
                                                {result.unmatchedTokens.map(
                                                    (item, index) => (
                                                        <span
                                                            key={`${item.source}-${item.token}-${index}`}
                                                        >
                                                            {item.token}
                                                            <small>INPUT {item.source}</small>
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    <p className="name-breakdown-note">
                                        Token similarities contribute to the overall score.
                                        Missing components reduce it. This is a simplified
                                        educational comparison, not identity verification.
                                    </p>
                                </div>
                            )}


                            {hasResult && (
                                <div className="name-lab-meta">
                                    <span>
                                        MATCHED COMPONENTS
                                        <strong>
                                            {result.matchedTokens}/
                                            {result.tokenCount}
                                        </strong>
                                    </span>

                                    <span>
                                        ORDER INDEPENDENT
                                        <strong>YES</strong>
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="name-lab-examples">
                            <p className="editorial-label">
                                TRY AN EXAMPLE
                            </p>

                            <div>
                                {examples.map((example) => (
                                    <button
                                        key={example.label}
                                        type="button"
                                        onClick={() =>
                                            loadExample(example)
                                        }
                                    >
                                        {example.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <p className="name-lab-disclaimer">
                    Educational demonstration only. Similarity does
                    not establish identity and should not be used for
                    KYC, financial decisions, or identity verification.
                    Please use fictional example names rather than
                    sensitive personal information.
                </p>
            </div>
        </section>
    );
}
