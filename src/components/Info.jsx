import React from 'react'

export default function Info({ origin, destination, result }) {
    return (
        <div className="info">
            <p><b>Origen:</b> {origin || "-"}</p>
            <p><b>Destino:</b> {destination || "-"}</p>
            {result && (
            <>
                <p><b>Ruta:</b> {result.path.join(" → ")}</p>
                <p><b>Distancia total:</b> {result.distance} metros</p>
            </>
            )}
        </div>
    )
}
