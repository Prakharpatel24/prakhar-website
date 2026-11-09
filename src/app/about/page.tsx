
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
    ArrowDownRight,
    ArrowUpRight,
    Asterisk,
    Code2,
    Compass,
    MessageCircle,
} from "lucide-react";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
    title: "About",

    description:
        "Get to know Prakhar Patel — a software engineer interested in technology, architecture, business, people, and ideas worth building.",

    ...(siteUrl
        ? {
            alternates: {
                canonical: `${siteUrl}/about`,
            },
        }
        : {}),

    openGraph: {
        title: "About Prakhar Patel",
        description:
            "Engineer by craft. Curious by nature. Explore the person behind the code.",
        type: "profile",
    },
};


const interests = [
    {
        number: "01",
        icon: Code2,
        title: "Building things",
        description:
            "I enjoy understanding systems, solving problems, and turning ideas into working products.",
    },
    {
        number: "02",
        icon: MessageCircle,
        title: "Connecting people",
        description:
            "Conversations, collaboration, and exchanging perspectives are some of the parts of work I enjoy most.",
    },
    {
        number: "03",
        icon: Compass,
        title: "Exploring ideas",
        description:
            "Technology, business, design, travel, and the unconventional possibilities in between.",
    },
];

export default function AboutPage() {
    return (
        <>
            <SiteHeader />

            <main>
                {/* INTRODUCTION */}
                <section className="about-hero">
                    <div className="container-editorial">
                        <div className="about-hero-top">
                            <span className="editorial-label">
                                01 / A LITTLE ABOUT ME
                            </span>

                            <Asterisk
                                size={26}
                                strokeWidth={1.3}
                                aria-hidden="true"
                            />
                        </div>

                        <h1 className="about-hero-title">
                            An engineer
                            <br />
                            by craft.
                            <span className="display-serif">
                                Curious by nature.
                            </span>
                        </h1>

                        <div className="about-hero-bottom">
                            <p>
                                I&apos;m Prakhar. I like understanding how
                                things work, why they matter, and the
                                people who bring them to life.
                            </p>

                            <span className="editorial-label">
                                THE STORY SO FAR
                                <ArrowDownRight
                                    size={16}
                                    aria-hidden="true"
                                />
                            </span>
                        </div>
                    </div>
                </section>

                {/* PERSONAL STORY */}
                <section className="about-story">
                    <div className="container-editorial about-story-grid">
                        <figure className="about-story-image">
                            <Image
                                src="/images/prakhar-speaking.jpg"
                                alt="Prakhar speaking at a podium during an event"
                                fill
                                sizes="(max-width: 900px) 100vw, 42vw"
                                className="object-cover"
                            />

                            <figcaption className="editorial-label">
                                IDEAS ARE BETTER SHARED.
                            </figcaption>
                        </figure>

                        <div className="about-story-content">
                            <p className="editorial-label">
                                02 / THE PERSON BEHIND THE CODE
                            </p>

                            <h2>
                                Technology is what I build.
                                <span className="display-serif">
                                    Curiosity is what drives me.
                                </span>
                            </h2>

                            <div className="about-story-paragraphs">
                                <p>
                                    My background is in software engineering,
                                    where I&apos;ve worked on production fintech
                                    systems, payment integrations, backend
                                    services, and the infrastructure supporting
                                    them.
                                </p>

                                <p>
                                    What I&apos;ve enjoyed just as much is
                                    understanding the larger picture: the
                                    problem we&apos;re solving, the decisions
                                    behind a product, and how different
                                    systems and people come together.
                                </p>

                                <p>
                                    I&apos;m naturally drawn to conversations,
                                    exchanging ideas, learning from people,
                                    and exploring opportunities that combine
                                    technology with business and creativity.
                                </p>

                                <p>
                                    I don&apos;t believe an interest has to fit
                                    neatly inside a job title. There&apos;s a
                                    lot I want to build, experience, and
                                    learn along the way.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHAT SHAPES ME */}
                <section className="about-pillars">
                    <div className="container-editorial">
                        <div className="about-pillars-heading">
                            <span className="editorial-label">
                                03 / WHAT MAKES ME TICK
                            </span>

                            <h2>
                                A few things that
                                <span className="display-serif">
                                    shape my world.
                                </span>
                            </h2>
                        </div>

                        <div className="about-pillars-grid">
                            {interests.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <article
                                        className="about-pillar-card"
                                        key={item.number}
                                    >
                                        <div className="about-pillar-top">
                                            <span className="editorial-label">
                                                {item.number} / 03
                                            </span>
                                            <Icon
                                                size={26}
                                                strokeWidth={1.4}
                                                aria-hidden="true"
                                            />
                                        </div>

                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* WHAT'S NEXT */}
                <section className="about-next">
                    <div className="container-editorial">
                        <div className="about-next-header">
                            <span className="editorial-label">
                                04 / WHAT'S NEXT
                            </span>
                            <Asterisk
                                size={25}
                                strokeWidth={1.2}
                                aria-hidden="true"
                            />
                        </div>

                        <h2>
                            There's always
                            <span className="display-serif">
                                more to explore.
                            </span>
                        </h2>

                        <p>
                            More ideas to build, more people to meet,
                            and more perspectives to discover.
                            I&apos;m looking forward to all of it.
                        </p>

                        <div className="about-next-links">
                            <Link href="/#work">
                                Explore my work
                                <ArrowUpRight
                                    size={17}
                                    aria-hidden="true"
                                />
                            </Link>

                            <Link href="/#contact">
                                Start a conversation
                                <ArrowUpRight
                                    size={17}
                                    aria-hidden="true"
                                />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <SiteFooter />
        </>
    );
}
