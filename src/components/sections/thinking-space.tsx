import { ArrowUpRight, Asterisk, PenLine } from "lucide-react";

export function ThinkingSpace() {
    return (
        <section
            id="thoughts"
            className="thinking-upcoming"
            aria-labelledby="thinking-upcoming-heading"
        >
            <div className="container-editorial">
                <div className="thinking-upcoming-top">
                    <span className="editorial-label">
                        05 / THINKING SPACE
                    </span>

                    <Asterisk
                        size={27}
                        strokeWidth={1.3}
                        aria-hidden="true"
                    />
                </div>

                <div className="thinking-upcoming-content">
                    <div className="thinking-upcoming-copy">
                        <span className="editorial-label">
                            NOTES FROM A CURIOUS MIND
                        </span>

                        <h2 id="thinking-upcoming-heading">
                            A few thoughts,
                            <span className="display-serif">
                                worth sharing.
                            </span>
                        </h2>

                        <p>
                            Notes on technology, people, ideas, and
                            everything in between. A space for things
                            I&apos;m learning, questioning, and
                            figuring out along the way.
                        </p>

                        <div className="thinking-upcoming-status">
                            <span className="thinking-upcoming-status-icon">
                                <PenLine
                                    size={17}
                                    strokeWidth={1.6}
                                    aria-hidden="true"
                                />
                            </span>

                            <div>
                                <strong>First edition in the works</strong>
                                <span>Something to read, soon.</span>
                            </div>

                            <ArrowUpRight
                                size={20}
                                strokeWidth={1.3}
                                aria-hidden="true"
                            />
                        </div>
                    </div>

                    <div
                        className="thinking-upcoming-art"
                        aria-hidden="true"
                    >
                        <div className="thinking-upcoming-paper">
                            <span className="thinking-upcoming-paper-top">
                                NOTES / VOL. 001
                            </span>

                            <div className="thinking-upcoming-paper-center">
                                <span>the</span>
                                <span className="thinking-paper-serif">
                                    unfinished
                                </span>
                                <span>pages.</span>
                            </div>

                            <div className="thinking-upcoming-paper-lines">
                                <span />
                                <span />
                                <span />
                                <span />
                            </div>

                            <span className="thinking-upcoming-paper-bottom">
                                A COLLECTION IN PROGRESS
                            </span>
                        </div>

                        <span className="thinking-upcoming-art-mark">
                            ✳
                        </span>
                    </div>
                </div>

                <div className="thinking-upcoming-bottom">
                    <span className="editorial-label">
                        OBSERVE / QUESTION / WRITE / REPEAT
                    </span>
                    <span className="editorial-label">
                        NO RUSH. JUST GOOD IDEAS.
                    </span>
                </div>
            </div>
        </section>
    );
}