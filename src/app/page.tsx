
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { Hero } from '@/components/sections/hero';
import { Intro } from '@/components/sections/intro';
import { SelectedWork } from '@/components/sections/selected-work';
import { NamePlayground } from '@/components/sections/name-playground';
import { BeyondScreen } from '@/components/sections/beyond-screen';
import { ThinkingSpace } from '@/components/sections/thinking-space';
import { ContactSection } from '@/components/sections/contact-section';
import type { Metadata } from "next";
import { siteConfig, siteUrl } from "@/lib/site-config";
import { SelectedEncounters } from '@/components/sections/selected-encounters';


export const metadata: Metadata = {
  title: {
    absolute: siteConfig.title,
  },

  ...(siteUrl
    ? {
      alternates: {
        canonical: `${siteUrl}/`,
      },
    }
    : {}),
};

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />
        <Intro />
        <SelectedWork />
        <NamePlayground />
        <BeyondScreen />
        <SelectedEncounters />
        <ThinkingSpace />
        <ContactSection />
      </main>

      <SiteFooter />
    </>
  );
}
