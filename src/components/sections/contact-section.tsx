
import {
    ArrowUpRight,
    Asterisk,
    Github,
    Linkedin,
    Mail,
} from "lucide-react";

const email =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ?? "";

const socialLinks = [
    {
        label: "LinkedIn",
        href: process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim(),
        icon: Linkedin,
    },
    {
        label: "GitHub",
        href: process.env.NEXT_PUBLIC_GITHUB_URL?.trim(),
        icon: Github,
    },
].filter(
    (item): item is typeof item & { href: string } =>
        Boolean(
            item.href &&
            /^https:\/\/[^/]+\.[^/]+/i.test(item.href)
        )
);

const emailHref = email
    ? `mailto:${email}?subject=${encodeURIComponent(
        "Hello Prakhar — let's connect"
    )}`
    : null;

export function ContactSection() {
    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className="contact-section scroll-mt-10"
        >
            <div className="container-editorial">
                <div className="contact-section-top">
                    <span className="editorial-label">
                        06 / THE NEXT CONVERSATION
                    </span>

                    <Asterisk
                        size={30}
                        strokeWidth={1.2}
                        aria-hidden="true"
                    />
                </div>

                <div className="contact-section-main">
                    <div>
                        <p className="contact-eyebrow editorial-label">
                            HAVE SOMETHING INTERESTING IN MIND?
                        </p>

                        <h2
                            id="contact-heading"
                            className="contact-heading"
                        >
                            Good things begin
                            <span className="display-serif">
                                with a hello.
                            </span>
                        </h2>

                        <p className="contact-description">
                            An interesting idea? A potential collaboration?
                            Or just a conversation worth having?
                            I&apos;m always happy to connect with people
                            who are building, exploring, or thinking
                            about something interesting.
                        </p>
                    </div>

                    <div className="contact-action-area">
                        {emailHref ? (
                            <a
                                href={emailHref}
                                className="contact-primary-action group"
                                aria-label="Start a conversation with Prakhar by email"
                            >
                                <span>
                                    <Mail
                                        size={20}
                                        strokeWidth={1.6}
                                        aria-hidden="true"
                                    />
                                    Start a conversation
                                </span>

                                <ArrowUpRight
                                    size={24}
                                    strokeWidth={1.5}
                                    aria-hidden="true"
                                    className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                                />
                            </a>
                        ) : (
                            <div className="contact-primary-action contact-action-unavailable">
                                <span>Contact details coming soon</span>
                            </div>
                        )}

                        {email && (
                            <p className="contact-email-text">
                                OR DROP ME A LINE AT
                                <a href={`mailto:${email}`}>
                                    {email}
                                </a>
                            </p>
                        )}
                    </div>
                </div>

                <div className="contact-social-area">
                    <div>
                        <span className="editorial-label">
                            ELSEWHERE ON THE INTERNET
                        </span>
                        <p>
                            A few other places where we can connect.
                        </p>
                    </div>

                    {socialLinks.length > 0 ? (
                        <div className="contact-social-links">
                            {socialLinks.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="contact-social-link"
                                        aria-label={`Visit Prakhar on ${item.label}`}
                                    >
                                        <Icon
                                            size={18}
                                            strokeWidth={1.6}
                                            aria-hidden="true"
                                        />
                                        {item.label}
                                        <ArrowUpRight
                                            size={15}
                                            aria-hidden="true"
                                        />
                                    </a>
                                );
                            })}
                        </div>
                    ) : (
                        <p className="contact-social-placeholder">
                            SOCIAL PROFILES COMING SOON
                        </p>
                    )}
                </div>

                <div className="contact-closing">
                    <span>BUILT WITH CURIOSITY.</span>
                    <span>ALWAYS OPEN TO NEW PERSPECTIVES.</span>
                </div>
            </div>
        </section>
    );
}
