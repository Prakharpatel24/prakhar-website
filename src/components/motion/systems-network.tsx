
type Point = {
    x: number;
    y: number;
};

const nodes: Point[] = [
    { x: 24, y: 82 },
    { x: 91, y: 32 },
    { x: 91, y: 143 },
    { x: 177, y: 32 },
    { x: 177, y: 143 },
    { x: 260, y: 82 },
    { x: 326, y: 32 },
    { x: 326, y: 143 },
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

export function SystemsNetwork() {
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
                        <line
                            key={`connection-${index}`}
                            x1={nodes[start].x}
                            y1={nodes[start].y}
                            x2={nodes[end].x}
                            y2={nodes[end].y}
                        />
                    ))}
                </g>

                <g className="systems-network-nodes">
                    {nodes.map((node, index) => (
                        <g key={`node-${index}`}>
                            <circle
                                cx={node.x}
                                cy={node.y}
                                r="8"
                                className="systems-network-halo"
                            />

                            <circle
                                cx={node.x}
                                cy={node.y}
                                r="3.5"
                                className={
                                    index === 5
                                        ? 'systems-network-node-accent'
                                        : 'systems-network-node'
                                }
                            />
                        </g>
                    ))}
                </g>
            </svg>
        </div>
    );
}
