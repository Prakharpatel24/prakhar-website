
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowUpRight,
  Asterisk,
} from 'lucide-react';
import {
  motion,
  useReducedMotion,
} from 'motion/react';

const easing = [0.22, 1, 0.36, 1] as const;

const rise = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  const reducedMotion = useReducedMotion();

  const appear = (delay: number) => ({
    variants: rise,
    initial: false as const,
    animate: 'visible' as const,
    transition: {
      delay: reducedMotion ? 0 : delay,
      duration: reducedMotion ? 0 : 0.7,
      ease: easing,
    },
  });

  return (
    <section
      className="container-editorial hero-grid relative grid items-center gap-10 pb-16 pt-8 md:gap-12 lg:gap-14 lg:pb-20 lg:pt-12"
      aria-labelledby="hero-title"
    >

      {/* LEFT: Headline and introduction */}
      <div className="relative z-10 min-w-0">
        <motion.p
          {...appear(0)}
          className="editorial-label mb-7 flex items-center gap-3 text-[#6b665e] md:mb-9"
        >
          <span
            className="h-2 w-2 shrink-0 rounded-full bg-terracotta"
            aria-hidden="true"
          />
          Software engineer. People &amp; possibilities.
        </motion.p>

        <h1
          id="hero-title"
          className="hero-heading font-semibold leading-[0.99] tracking-[-0.085em]"
        >
          <motion.span {...appear(0.08)} className="block">
            I build
          </motion.span>

          <motion.span {...appear(0.16)} className="block">
            systems.
          </motion.span>

          <motion.span
            {...appear(0.25)}
            className="display-serif mt-2 block italic font-normal tracking-[-0.065em] text-terracotta md:mt-3"
          >
            I connect
          </motion.span>

          <motion.span
            {...appear(0.34)}
            className="display-serif block italic font-normal tracking-[-0.065em] text-terracotta"
          >
            people.
          </motion.span>
        </h1>

        <motion.div {...appear(0.48)}>
          <p className="mt-7 max-w-[470px] text-[15px] leading-[1.8] text-[#625e57] md:mt-8 md:text-[17px]">
            I’m Prakhar — an engineer drawn to big ideas,
            meaningful conversations, and the space where
            technology meets business.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-5 md:mt-8">
            <Link
              href="#work"
              className="button-ink group inline-flex min-h-13 items-center gap-4 rounded-full px-6 text-[12px] font-semibold"
            >
              Explore my work
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="#about"
              className="text-[12px] font-semibold underline decoration-ink/40 underline-offset-[5px] transition-colors hover:text-terracotta"
            >
              More about me
            </Link>
          </div>
        </motion.div>
      </div>


      {/* RIGHT: Editorial photograph */}
      <figure className="hero-photo relative isolate m-0 overflow-hidden bg-[#b69b88]"
      >
        <Image
          src="/images/prakhar-speaking.jpg"
          alt="Prakhar speaking into a microphone at a podium during an event"
          fill
          loading="eager"
          fetchPriority="high"
          sizes="(max-width: 1023px) 100vw, 44vw"
          className="hero-photo-image object-cover"
        />

        {/* Gradient for readability */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent via-55% to-black/70"
          aria-hidden="true"
        />

        {/* Top image label */}
        <div className="absolute inset-x-5 top-5 flex items-start justify-between gap-2 md:inset-x-7 md:top-7">
          <span className="editorial-label rounded-full bg-paper/95 px-3 py-2 text-[9px] leading-4 text-ink">
            The person behind the code
          </span>

          <Asterisk
            size={25}
            strokeWidth={1.3}
            className="text-paper"
            aria-hidden="true"
          />
        </div>

        {/* Bottom editorial caption */}
        <figcaption className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div
            className="mb-3 h-px w-12 bg-[#e8aa8c]"
            aria-hidden="true"
          />

          <p className="display-serif text-[clamp(1.8rem,3vw,2.55rem)] italic leading-[1.1] text-paper">
            Ideas are better shared.
          </p>

          <p className="editorial-label mt-3 text-[9px] leading-[1.7] text-paper/80">
            Beyond the screen · In conversation
          </p>
        </figcaption>
      </figure>

      {/* Bottom scroll indicator */}
      <div className="editorial-label col-span-full hidden items-center gap-2 text-[#7a746c] lg:flex">
        Scroll to explore
        <ArrowDown size={13} aria-hidden="true" />
      </div>
    </section>
  );
}
