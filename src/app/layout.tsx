import type { Metadata } from 'next';
import { Instrument_Serif, Manrope, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { site } from '@/config/site';
import {
  siteConfig,
  siteReadyForIndexing,
  siteUrl,
} from "@/lib/site-config";

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });
const instrument = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-instrument', display: 'swap' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-plex', display: 'swap' });


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl ?? "http://localhost:3000"),

  title: {
    default: siteConfig.title,
    template: "%s | Prakhar Patel",
  },

  description: siteConfig.description,

  applicationName: "Prakhar Patel",

  authors: [{ name: "Prakhar Patel" }],
  creator: "Prakhar Patel",

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },

  robots: {
    index: siteReadyForIndexing,
    follow: siteReadyForIndexing,
    googleBot: {
      index: siteReadyForIndexing,
      follow: siteReadyForIndexing,
    },
  },
};


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${instrument.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
