const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteUrl =
    configuredUrl &&
        /^https:\/\/[^/\s]+\.[^/\s]+(?:\/)?$/.test(configuredUrl)
        ? configuredUrl.replace(/\/$/, "")
        : null;

export const siteReadyForIndexing =
    process.env.SITE_READY_FOR_INDEXING === "true" &&
    siteUrl !== null;

export const siteConfig = {
    name: "Prakhar Patel",
    title: "Prakhar Patel | Engineer, Thinker & Builder",
    description:
        "I'm Prakhar — a software engineer exploring technology, systems, business, and the people and ideas that connect them.",
    tagline: "I build systems. I connect people.",
};
