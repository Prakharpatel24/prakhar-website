
'use client';

import { useRef } from 'react';
import {
    motion,
    useMotionValue,
    useReducedMotion,
    useScroll,
    useTransform,
} from 'motion/react';

import { SystemsNetwork } from './systems-network';

export function SystemsToPeopleTransition() {
    const sectionRef = useRef<HTMLElement>(null);
    const reducedMotion = useReducedMotion();

    // Tracks the section while its visual remains sticky.
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    });

    // The entire transformation is controlled by scroll.
    const animatedProgress = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 1]
    );

    // Static final composition for reduced-motion users.
    const stillProgress = useMotionValue(1);

    const progress = reducedMotion
        ? stillProgress
        : animatedProgress;

    const backgroundColor = useTransform(
        progress,
        [0, 1],
        ['#f4f0e8', '#1d1d1b']
    );

    const foregroundColor = useTransform(
        progress,
        [0, 1],
        ['#1d1d1b', '#f4f0e8']
    );

    const supportingColor = useTransform(
        progress,
        [0, 1],
        ['#666158', '#bcb5ab']
    );

    const firstLineOpacity = useTransform(
        progress,
        [0, 0.35, 0.6],
        [1, 1, 0]
    );

    const secondLineOpacity = useTransform(
        progress,
        [0.4, 0.7, 1],
        [0, 1, 1]
    );

    const networkScale = useTransform(
        progress,
        [0, 1],
        [0.85, 1.15]
    );

    return (
        <section
            ref={sectionRef}
            className="systems-transition"
            aria-label="From systems to people"
        >
            <motion.div
                className="systems-transition-stage"
                style={{ backgroundColor }}
            >
                <div className="systems-transition-inner">
                    <motion.p
                        className="editorial-label systems-transition-eyebrow"
                        style={{ color: supportingColor }}
                    >
                        00 / FROM SYSTEMS TO PEOPLE
                    </motion.p>

                    <div className="systems-transition-copy">
                        <motion.h2
                            className="systems-transition-heading"
                            style={{
                                color: foregroundColor,
                                opacity: reducedMotion
                                    ? 0
                                    : firstLineOpacity,
                            }}
                            aria-hidden="true"
                        >
                            Everything begins
                            <br />
                            with a system.
                        </motion.h2>

                        <motion.h2
                            className="systems-transition-heading systems-transition-heading-second"
                            style={{
                                color: foregroundColor,
                                opacity: reducedMotion
                                    ? 1
                                    : secondLineOpacity,
                            }}
                        >
                            The interesting part
                            <br />
                            is <span className="display-serif italic">people.</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        className="systems-transition-art"
                        style={{
                            scale: reducedMotion ? 1 : networkScale,
                        }}
                    >
                        <SystemsNetwork
                            progress={progress}
                            reducedMotion={false}
                        />
                    </motion.div>

                    <motion.div
                        className="systems-transition-footer"
                        style={{ color: supportingColor }}
                    >
                        <span className="editorial-label">
                            STRUCTURE → CONNECTION
                        </span>
                        <span className="editorial-label">
                            KEEP EXPLORING ↓
                        </span>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
