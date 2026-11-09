
export type Article = {
    slug: string;
    number: string;
    category: string;
    title: string;
    excerpt: string;
    readingTime: string;
    featured?: boolean;
    paragraphs: string[];
};

export const articles: Article[] = [
    {
        slug: "when-fast-apis-feel-slow",
        number: "001",
        category: "ENGINEERING",
        title: "What happens when an API is fast, but the system is slow?",
        excerpt:
            "A closer look at latency, downstream dependencies, and what response times actually tell us.",
        readingTime: "3 MIN READ",
        featured: true,
        paragraphs: [
            "A request can move through several services before a response reaches the person who initiated it. Each service may be performing its own work, waiting for another service, or communicating with an external provider.",
            "That distinction matters when investigating performance. If an API takes twelve seconds to respond, it doesn't necessarily mean that the application itself spent twelve seconds computing. A large part of that time may be spent waiting for downstream systems.",
            "One useful approach is to measure latency at each meaningful boundary: the incoming request, database operations, external API calls, and the final response. These measurements tell a more useful story than a single total duration.",
            "Performance engineering begins with understanding where time is spent. Once the bottleneck is visible, we can make better decisions about concurrency, caching, timeouts, infrastructure capacity, and system design."
        ],
    },
    {
        slug: "engineering-is-about-people",
        number: "002",
        category: "PERSPECTIVES",
        title: "Why engineering is also about people.",
        excerpt:
            "Great systems are technical achievements, but building them requires communication, curiosity, and collaboration.",
        readingTime: "2 MIN READ",
        paragraphs: [
            "Engineering is often described through languages, frameworks, and architecture. But behind every product is a collection of decisions made by people trying to solve a problem.",
            "A technically impressive solution is not automatically the most valuable one. We also need to understand who will use it, what the business needs, and which tradeoffs are acceptable.",
            "Conversations help reveal those constraints. Asking better questions, challenging assumptions respectfully, and communicating technical decisions clearly can change the direction of a project.",
            "Technology and communication aren't competing strengths. Used together, they make it easier to build solutions that matter."
        ],
    },
    {
        slug: "scale-beyond-requests-per-second",
        number: "003",
        category: "LEARNING",
        title: "Understanding scale beyond requests per second.",
        excerpt:
            "Why throughput alone doesn't tell you whether a distributed system can handle production traffic.",
        readingTime: "3 MIN READ",
        paragraphs: [
            "Requests per second is a useful measurement, but it is only one part of a system's capacity story.",
            "Imagine two applications receiving the same number of requests every second. One completes each request quickly. The other spends several seconds waiting for a downstream service. Their throughput may look identical, but their concurrency requirements can be very different.",
            "A practical capacity assessment needs to consider arrival rate, response times, concurrent work, resource utilization, queueing, external dependencies, and failure rates.",
            "Average traffic is also different from peak traffic. A system designed around daily averages may struggle when many requests arrive during a short burst.",
            "The objective isn't simply to maximize a throughput number. It is to understand how the whole system behaves under realistic demand while meeting its reliability and latency expectations."
        ],
    },
];

export function getArticle(slug: string): Article | undefined {
    return articles.find((article) => article.slug === slug);
}
