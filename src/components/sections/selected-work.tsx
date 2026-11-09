
import {
    ArrowDown,
    ArrowRight,
    ArrowUpRight,
    Check,
    Database,
    Layers3,
    Server,
    ShieldCheck,
} from "lucide-react";

const projects = [
    {
        number: "002",
        category: "SYSTEM DESIGN",
        title: "Building for scale.",
        subtitle: "Infrastructure / Performance",
        description:
            "Exploring reliability, service capacity, and the decisions behind resilient distributed systems.",
    },
    {
        number: "003",
        category: "ENGINEERING",
        title: "Identity, intelligently.",
        subtitle: "Algorithms / Name Matching",
        description:
            "Designing approaches that account for variations in how people write and structure their names.",
    },
];

function PaymentVisualization() {
    return (
        <div
            className="work-payment-visual"
            aria-label="Illustration of a transaction moving from a client through a payment service to a provider"
            role="img"
        >
            <div className="work-payment-topline">
                <span>TRANSACTION FLOW</span>
                <span className="work-status">
                    <span className="work-status-dot" />
                    SYSTEM ONLINE
                </span>
            </div>

            <div className="work-payment-flow">
                <div className="work-flow-node">
                    <div className="work-node-icon">
                        <Layers3 size={22} strokeWidth={1.6} />
                    </div>
                    <strong>Client</strong>
                    <span>REQUEST</span>
                </div>

                <div className="work-flow-connector">
                    <span className="work-flow-pulse" />
                    <ArrowRight size={16} />
                </div>

                <div className="work-flow-node work-flow-node-primary">
                    <div className="work-node-icon">
                        <Server size={22} strokeWidth={1.6} />
                    </div>
                    <strong>Payment API</strong>
                    <span>ORCHESTRATION</span>
                </div>

                <div className="work-flow-connector">
                    <span className="work-flow-pulse" />
                    <ArrowRight size={16} />
                </div>

                <div className="work-flow-node">
                    <div className="work-node-icon">
                        <ShieldCheck size={22} strokeWidth={1.6} />
                    </div>
                    <strong>Provider</strong>
                    <span>PROCESSING</span>
                </div>
            </div>

            <div className="work-payment-bottomline">
                <span>API INTEGRATIONS</span>
                <span>PAYMENT ORCHESTRATION</span>
            </div>
        </div>
    );
}

function InfrastructureVisualization() {
    return (
        <div
            className="work-infra-visual"
            role="img"
            aria-label="Simplified infrastructure illustration with API gateway, services, and database"
        >
            <div className="work-infra-client">
                <span>CLIENT REQUESTS</span>
                <ArrowDown size={17} />
            </div>

            <div className="work-infra-gateway">
                <Layers3 size={18} />
                <span>API GATEWAY</span>
                <span className="work-infra-live" />
            </div>

            <div className="work-infra-lines" />

            <div className="work-infra-services">
                <div className="work-infra-service">
                    <Server size={18} />
                    <span>SERVICE A</span>
                </div>
                <div className="work-infra-service">
                    <Server size={18} />
                    <span>SERVICE B</span>
                </div>
            </div>

            <div className="work-infra-database">
                <Database size={16} />
                <span>DATA LAYER</span>
            </div>
        </div>
    );
}

function IdentityVisualization() {
    return (
        <div
            className="work-identity-visual"
            role="img"
            aria-label="Example of matching the same name tokens despite a different order"
        >
            <div className="work-identity-heading">
                <span>NAME COMPARISON</span>
                <span>ILLUSTRATIVE EXAMPLE</span>
            </div>

            <div className="work-name-row">
                <span className="work-name-label">INPUT A</span>
                <div className="work-name-tokens">
                    <span>RAHUL</span>
                    <span>SHARMA</span>
                </div>
            </div>

            <div className="work-match-indicator">
                <span />
                <div>
                    <Check size={15} />
                </div>
                <span />
            </div>

            <div className="work-name-row">
                <span className="work-name-label">INPUT B</span>
                <div className="work-name-tokens">
                    <span>SHARMA</span>
                    <span>RAHUL</span>
                </div>
            </div>

            <div className="work-identity-result">
                <Check size={15} />
                <span>Same tokens, different order</span>
            </div>
        </div>
    );
}

export function SelectedWork() {
    return (
        <section
            id="work"
            aria-labelledby="work-heading"
            className="work-section"
        >
            <div className="container-editorial">
                <div className="work-section-header">
                    <div>
                        <p className="editorial-label work-eyebrow">
                            02 / THINGS I&apos;VE BUILT
                        </p>
                        <h2 id="work-heading" className="work-heading">
                            Selected{" "}
                            <span className="display-serif">work.</span>
                        </h2>
                    </div>

                    <span className="editorial-label work-date">
                        2024 — NOW
                    </span>
                </div>

                {/* FEATURED PROJECT */}
                <article className="work-card work-featured">
                    <div className="work-card-top">
                        <span className="editorial-label">
                            001 / FEATURED CASE STUDY
                        </span>
                        <span className="work-card-mark" aria-hidden="true">
                            <ArrowUpRight size={21} strokeWidth={1.5} />
                        </span>
                    </div>

                    <PaymentVisualization />

                    <div className="work-card-content">
                        <div>
                            <h3>Engineering payment experiences.</h3>
                            <p className="editorial-label work-category">
                                FINTECH / BACKEND SYSTEMS / INTEGRATIONS
                            </p>
                            <p className="work-description">
                                Building and integrating payment capabilities
                                across APIs, services, and external providers,
                                with a focus on reliability and real-world
                                transaction flows.
                            </p>
                        </div>

                        <span className="work-availability">
                            <span className="work-availability-dot" />
                            SELECTED ENGINEERING WORK
                        </span>
                    </div>
                </article>

                {/* SECONDARY PROJECTS */}
                <div className="work-card-grid">
                    <article className="work-card work-scale">
                        <div className="work-card-top">
                            <span className="editorial-label">
                                {projects[0].number} / {projects[0].category}
                            </span>
                            <span className="work-card-mark" aria-hidden="true">
                                <ArrowUpRight size={21} strokeWidth={1.5} />
                            </span>
                        </div>

                        <InfrastructureVisualization />

                        <div className="work-card-content">
                            <h3>{projects[0].title}</h3>
                            <p className="editorial-label work-category">
                                {projects[0].subtitle}
                            </p>
                            <p className="work-description">
                                {projects[0].description}
                            </p>
                        </div>
                    </article>

                    <article className="work-card work-identity">
                        <div className="work-card-top">
                            <span className="editorial-label">
                                {projects[1].number} / {projects[1].category}
                            </span>
                            <span className="work-card-mark" aria-hidden="true">
                                <ArrowUpRight size={21} strokeWidth={1.5} />
                            </span>
                        </div>

                        <IdentityVisualization />

                        <div className="work-card-content">
                            <h3>{projects[1].title}</h3>
                            <p className="editorial-label work-category">
                                {projects[1].subtitle}
                            </p>
                            <p className="work-description">
                                {projects[1].description}
                            </p>
                        </div>
                    </article>
                </div>

                <p className="work-disclaimer">
                    Visualizations are simplified illustrations, not
                    representations of confidential production systems.
                </p>
            </div>
        </section>
    );
}
