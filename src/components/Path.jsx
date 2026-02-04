import React from 'react'

export default function Path({ coords, result }) {
    return (
        <svg width="700" height="550" style={{ position: "absolute", top: 0, left: 0 }}>
            {result && result.path.map((node, i) => {
            if (i === 0) return null;
            const prev = result.path[i - 1];
            return (
                <line
                    key={i}
                    x1={coords[prev].x + 10}
                    y1={coords[prev].y + 10}
                    x2={coords[node].x + 10}
                    y2={coords[node].y + 10}
                    stroke="#0086d4"
                    strokeWidth="2"
                />
            );
            })}
        </svg>
    )
}
