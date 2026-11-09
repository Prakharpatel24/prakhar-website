
import Image from "next/image";
import {
    ArrowDownRight,
    ArrowUpRight,
    Asterisk,
    Compass,
    MessageCircle,
    Sparkles,
} from "lucide-react";

const interests = [
    "GOOD CONVERSATIONS",
    "NEW PERSPECTIVES",
    "CREATIVE IDEAS",
    "BUILDING THINGS",
    "EXPLORING THE WORLD",
];

export function BeyondScreen() {
    return (
        <section
            id="beyond"
            aria-labelledby="beyond-heading"
            className="beyond-section"
        >
            <div className="container-editorial">
                {/* Editorial heading */}
                <div className="beyond-header">
                    <div className="beyond-eyebrow">
                        <span className="editorial-label">
                            04 / THE OTHER SIDE
                        </span>
                        <Asterisk
                            size={24}
                            strokeWidth={1.3}
                            aria-hidden="true"
                        />
                    </div>

                    <h2 id="beyond-heading" className="beyond-title">
                        There&apos;s more to life
                        <span className="display-serif">
                            than the terminal.
                        </span>
                    </h2>

                    <div className="beyond-header-bottom">
                        <p>
                            I love building technology. But I&apos;m
                            equally interested in the conversations,
                            experiences, and ideas that happen
                            beyond a screen.
                        </p>

                        <span className="editorial-label">
                            A LITTLE MORE HUMAN
                            <ArrowDownRight
                                size={15}
                                aria-hidden="true"
                            />
                        </span>
                    </div>
                </div>

                {/* Editorial magazine grid */}
                <div className="beyond-grid">
                    {/* Main story — actual speaking photograph */}
                    <article className="beyond-card beyond-conversations">
                        <div className="beyond-photo">
                            <Image
                                src="/images/prakhar-speaking.jpg"
                                alt="Prakhar speaking at a podium during an event"
                                fill
                                sizes="(max-width: 767px) 100vw, 60vw"
                                className="beyond-photo-image"
                            />

                            <div
                                className="beyond-photo-shade"
                                aria-hidden="true"
                            />

                            <span className="beyond-photo-label editorial-label">
                                THE HUMAN SIDE
                            </span>

                            <span className="beyond-photo-number">
                                01 / 03
                            </span>
                        </div>

                        <div className="beyond-story-content">
                            <div className="beyond-story-top">
                                <MessageCircle
                                    size={22}
                                    strokeWidth={1.5}
                                    aria-hidden="true"
                                />
                                <span className="editorial-label">
                                    PEOPLE & CONVERSATIONS
                                </span>
                            </div>

                            <h3>
                                Good conversations
                                <span className="display-serif">
                                    change everything.
                                </span>
                            </h3>

                            <p>
                                I enjoy meeting people, exchanging
                                perspectives, and discovering the ideas
                                that emerge when different worlds connect.
                            </p>
                        </div>
                    </article>

                    {/* Travel / exploration */}
                    <article className="beyond-card beyond-places">
                        <div className="beyond-card-top">
                            <span className="editorial-label">
                                02 / PLACES & PERSPECTIVES
                            </span>
                            <Compass
                                size={23}
                                strokeWidth={1.4}
                                aria-hidden="true"
                            />
                        </div>

                        <div
                            className="beyond-orbit"
                            aria-hidden="true"
                        >
                            <span className="beyond-orbit-ring beyond-orbit-ring-one" />
                            <span className="beyond-orbit-ring beyond-orbit-ring-two" />
                            <span className="beyond-orbit-center">
                                <Compass size={32} strokeWidth={1.2} />
                            </span>
                        </div>

                        <div className="beyond-card-copy">
                            <p className="editorial-label">
                                ALWAYS LOOKING BEYOND
                            </p>

                            <h3>
                                A world
                                <span className="display-serif">
                                    worth exploring.
                                </span>
                            </h3>

                            <p>
                                Different places, cultures, and ways
                                of thinking. There&apos;s so much out
                                there I want to experience.
                            </p>
                        </div>
                    </article>

                    {/* Curiosity / creativity */}
                    <article className="beyond-card beyond-curiosity">
                        <div className="beyond-card-top">
                            <span className="editorial-label">
                                03 / IDEAS & CURIOSITY
                            </span>
                            <Sparkles
                                size={23}
                                strokeWidth={1.4}
                                aria-hidden="true"
                            />
                        </div>

                        <div
                            className="beyond-idea-art"
                            aria-hidden="true"
                        >
                            <span>WHAT IF?</span>
                            <Asterisk size={55} strokeWidth={1} />
                        </div>

                        <div className="beyond-card-copy">
                            <p className="editorial-label">
                                THE INTERESTS KEEP EXPANDING
                            </p>

                            <h3>
                                Curious about
                                <span className="display-serif">
                                    almost everything.
                                </span>
                            </h3>

                            <p>
                                Technology, design, founders, business,
                                and the unconventional ideas that
                                make you think twice.
                            </p>
                        </div>
                    </article>
                </div>

                {/* Personal interests ticker */}
                <div className="beyond-interests">
                    <div className="beyond-interests-label">
                        <span className="editorial-label">
                            THINGS THAT KEEP ME CURIOUS
                        </span>
                        <ArrowUpRight
                            size={17}
                            aria-hidden="true"
                        />
                    </div>

                    <div className="beyond-interest-list">
                        {interests.map((interest) => (
                            <span key={interest}>
                                {interest}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
