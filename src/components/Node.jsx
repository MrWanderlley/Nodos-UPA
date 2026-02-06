import React from 'react'

export default function Node({ id, coords, onClick }) {
    return (
        <div
        onClick={() => onClick(id)}
        style={{
            position: "absolute",
            left: coords[id].x,
            top: coords[id].y,
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: "#003e81",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: 9,
            opacity: 1
        }}
        >
        {id}
        </div>
    );
}
