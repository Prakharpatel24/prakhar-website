import {
    ArrowUpRight,
    Asterisk,
    MessageCircle,
} from "lucide-react";

const geekForGeeksPost =
    "https://lnkd.in/p/gSc4pvkj";

const pavanPost =
    "https://lnkd.in/p/gXjzR9nd";

export function SelectedEncounters() {
    return (
        <section
            className="encounters-section"
            aria-labelledby="encounters-heading"
        >
            <div className="container-editorial">
                <div className="encounters-top">
                    <span className="editorial-label">
                        PEOPLE & EXPERIENCES / SELECTED ENCOUNTERS
                    </span>

                    <Asterisk
                        size={27}
                        strokeWidth={1.3}
                        aria-hidden="true"
                    />
                </div>

                <div className="encounters-intro">
                    <h2 id="encounters-heading">
                        Some conversations
                        <span className="display-serif">
                            lead somewhere.
                        </span>
                    </h2>

                    <p>
                        A few moments from the archives.
                        Conversations, collaborations, and experiences
                        that remind me why I enjoy bringing people
                        and ideas together.
                    </p>
                </div>

                <div className="encounters-grid">
                    {/* Featured story */}
                    <article className="encounter-featured">
                        <div className="encounter-card-top">
                            <span className="editorial-label">
                                01 / FROM THE ARCHIVES
                            </span>
                            <span className="encounter-card-symbol">
                                ✳
                            </span>
                        </div>

                        <div className="encounter-feature-content">
                            <div className="encounter-feature-visual">
                                <div className="encounter-visual-outline">
                                    <span>AN IDEA</span>
                                    <div className="encounter-visual-line" />
                                    <span>A CONVERSATION</span>
                                    <div className="encounter-visual-line" />
                                    <span>A COLLABORATION</span>
                                </div>

                                <span className="encounter-visual-corner">
                                    UPES CSI × GFG
                                </span>
                            </div>

                            <div className="encounter-feature-text">
                                <span className="editorial-label">
                                    OUTREACH / COLLABORATION / LEADERSHIP
                                </span>

                                <h3>
                                    From an introduction
                                    <span className="display-serif">
                                        to a collaboration.
                                    </span>
                                </h3>

                                <p>
                                    As Associate Public Relations Head
                                    at UPES CSI, I reached out to
                                    GeeksforGeeks and helped turn an
                                    initial conversation into a career
                                    development session with its founder,
                                    Sandeep Jain.
                                </p>

                                <p>
                                    From managing communication with
                                    GeeksforGeeks to coordinating and
                                    hosting the event alongside my team,
                                    I was involved throughout the process.
                                    It brought together things I enjoy:
                                    building relationships, exchanging
                                    ideas, and seeing an initiative
                                    come to life.
                                </p>

                                <a
                                    href={geekForGeeksPost}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="encounter-link"
                                >
                                    The original story
                                    <ArrowUpRight
                                        size={17}
                                        aria-hidden="true"
                                    />
                                </a>
                            </div>
                        </div>

                        <div className="encounter-card-bottom">
                            <span>UPES CSI</span>
                            <span>GEEKSFORGEEKS</span>
                            <span>COLLEGE YEARS</span>
                        </div>
                    </article>

                    {/* Supporting story */}
                    <article className="encounter-secondary">
                        <div className="encounter-card-top">
                            <span className="editorial-label">
                                02 / A DIFFERENT PERSPECTIVE
                            </span>

                            <MessageCircle
                                size={23}
                                strokeWidth={1.4}
                                aria-hidden="true"
                            />
                        </div>

                        <div className="encounter-secondary-content">
                            <div className="encounter-quote-symbol">
                                “
                            </div>

                            <h3>
                                The value of
                                <span className="display-serif">
                                    staying curious.
                                </span>
                            </h3>

                            <p>
                                During college, I had the opportunity
                                to interact with Pavan Chavali and
                                learn from his perspective on
                                entrepreneurship, ambition, and
                                professional growth.
                            </p>

                            <p>
                                Some conversations stay with you
                                because they encourage you to
                                keep asking questions and
                                exploring possibilities.
                            </p>
                        </div>

                        <a
                            href={pavanPost}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="encounter-link"
                        >
                            Read the original post
                            <ArrowUpRight
                                size={17}
                                aria-hidden="true"
                            />
                        </a>
                    </article>
                </div>

                <div className="encounters-footer">
                    <span className="editorial-label">
                        THE EXPERIENCES ARE DIFFERENT.
                        THE CURIOSITY IS THE SAME.
                    </span>
                </div>
            </div>
        </section>
    );
}