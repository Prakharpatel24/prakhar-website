
import type { MetadataRoute } from "next";

import {
    siteReadyForIndexing,
    siteUrl,
} from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
    if (!siteReadyForIndexing || !siteUrl) {
        return [];
    }

    return [
        {
            url: siteUrl,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${siteUrl}/about`,
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];
}
