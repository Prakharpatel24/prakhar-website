import Link from 'next/link';
import { ArrowUpRight, Asterisk } from 'lucide-react';

export function Intro() {
  return (
    <section id="about" className="scroll-mt-8 bg-ink py-24 text-paper md:py-36" aria-labelledby="about-title">
      <div className="container-editorial">
        <div className="mb-16 flex items-center justify-between">
          <p className="editorial-label text-[#b2aa9e]">01 / Who I am</p>
          <Asterisk className="text-terracotta" size={30} strokeWidth={1.25} aria-hidden="true" />
        </div>
        <h2 id="about-title" className="max-w-5xl text-[clamp(2.4rem,5.3vw,5.7rem)] leading-[1.19] font-medium tracking-[-.06em]">
          Some people love code.<br />Some love ideas.<br />
          <span className="display-serif italic text-terracotta">I love connecting both.</span>
        </h2>
        <div className="mt-12 grid gap-8 md:mt-20 md:grid-cols-[1fr_1fr]">
          <p className="max-w-lg text-[15px] leading-[1.9] text-[#bcb5ab] md:col-start-2 md:text-[18px]">
            I work on the systems behind real-world financial experiences. What excites me just as much is understanding the people, decisions, and businesses behind the technology.
          </p>
          <Link href="/#contact" className="group mt-2 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-wider md:col-start-2">
            Start a conversation <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
