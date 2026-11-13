
'use client';

import {
    motion,
    useTransform,
    type MotionValue,
} from 'motion/react';

type Point = {
    x: number;
    y: number;
};

type NetworkProps = {
    progress: MotionValue<number>;
    reducedMotion: boolean;
};

const systemNodes: Point[] = [
    { x: 24, y: 82 },
    { x: 91, y: 32 },
    { x: 91, y: 143 },
    { x: 177, y: 32 },
    { x: 177, y: 143 },
    { x: 260, y: 82 },
    { x: 326, y: 32 },
    { x: 326, y: 143 },
];

const peopleNodes: Point[] = [
    { x: 35, y: 35 },
    { x: 75, y: 125 },
    { x: 145, y: 60 },
    { x: 165, y: 155 },
    { x: 235, y: 35 },
    { x: 260, y: 125 },
    { x: 310, y: 65 },
    { x: 330, y: 155 },
];

const connections: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [3, 5],
    [4, 5],
    [5, 6],
    [5, 7],
    [6, 7],
];

function interpolate(start: number, end: number, t: number) {
    return start + (end - start) * t;
}

function getPosition(index: number, progress: number): Point {
    const from = systemNodes[index];
    const to = peopleNodes[index];

    return {
        x: interpolate(from.x, to.x, progress),
        y: interpolate(from.y, to.y, progress),
    };
}

function NetworkConnection({
    start,
    end,
    index,
    progress,
    reducedMotion,
}: {
    start: number;
    end: number;
    index: number;
} & NetworkProps) {
    const path = useTransform(progress, (value) => {
        const t = reducedMotion ? 0 : value;

        const a = getPosition(start, t);
        const b = getPosition(end, t);

        const middleX = (a.x + b.x) / 2;
        const middleY = (a.y + b.y) / 2;

        // Straight when structured, curved when organic.
        const direction = index % 2 === 0 ? 1 : -1;
        const bend = direction * 38 * t;

        return [
            `M ${a.x} ${a.y}`,
            `Q ${middleX + bend} ${middleY - bend}`,
            `${b.x} ${b.y}`,
        ].join(' ');
    });

    const stroke = useTransform(
        progress,
        [0, 1],
        ['#8f8b81', '#a56b57']
    );

    return (
        <motion.path
            d={path}
            stroke={stroke}
            fill="none"
        />
    );
}

function NetworkNode({
    index,
    progress,
    reducedMotion,
}: {
    index: number;
} & NetworkProps) {
    const x = useTransform(progress, (value) =>
        getPosition(index, reducedMotion ? 0 : value).x
    );

    const y = useTransform(progress, (value) =>
        getPosition(index, reducedMotion ? 0 : value).y
    );

    const radius = useTransform(progress, (value) =>
        reducedMotion ? 3.5 : interpolate(3.5, 5, value)
    );

    const haloRadius = useTransform(progress, (value) =>
        reducedMotion ? 8 : interpolate(8, 13, value)
    );

    const fill = useTransform(
        progress,
        [0, 1],
        index === 5
            ? ['#9e4d36', '#c16e50']
            : ['#70756b', '#829989']
    );

    return (
        <g>
            <motion.circle
                cx={x}
                cy={y}
                r={haloRadius}
                className="systems-network-halo"
            />

            <motion.circle
                cx={x}
                cy={y}
                r={radius}
                fill={fill}
            />
        </g>
    );
}

export function SystemsNetwork({
    progress,
    reducedMotion,
}: NetworkProps) {
    return (
        <div
            className="systems-network"
            aria-hidden="true"
        >
            <svg
                viewBox="0 0 350 175"
                fill="none"
                preserveAspectRatio="xMidYMid meet"
            >
                <g className="systems-network-lines">
                    {connections.map(([start, end], index) => (
                        <NetworkConnection
                            key={`connection-${index}`}
                            start={start}
                            end={end}
                            index={index}
                            progress={progress}
                            reducedMotion={reducedMotion}
                        />
                    ))}
                </g>

                <g className="systems-network-nodes">
                    {systemNodes.map((_, index) => (
                        <NetworkNode
                            key={`node-${index}`}
                            index={index}
                            progress={progress}
                            reducedMotion={reducedMotion}
                        />
                    ))}
                </g>
            </svg>
        </div>
    );
}
