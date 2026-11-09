
import type { MetadataRoute } from "next";

import {
    siteReadyForIndexing,
    siteUrl,
} from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
    if (!siteReadyForIndexing || !siteUrl) {
        return {
            rules: {
                userAgent: "*",
                disallow: "/",
            },
        };
    }

    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },

        sitemap: `${siteUrl}/sitemap.xml`,
    };
}
