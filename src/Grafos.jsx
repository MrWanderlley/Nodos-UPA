import { useState } from "react";

import { graph } from "./data";
import { coords } from "./data";
import { dijkstra } from "./events/dijkstra";
import Node from "./components/Node";
import Path from "./components/Path";
import Info from "./components/Info";

// ===================== Grafos =====================

export default function Grafos() {

    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);
    const [result, setResult] = useState(null);

    function handleSelect(node) {
        if (!origin) setOrigin(node);
        else if (!destination) {
            setDestination(node);
            setResult(dijkstra(graph, origin, node));
        } else {
            setOrigin(node);
            setDestination(null);
            setResult(null);
        }
    }

    return (
        <div className="container">
            <Path coords={coords} result={result} />

            {Object.keys(coords).map((node) => (
                <Node key={node} id={node} coords={coords} onClick={handleSelect} />
            ))}

            <Info origin={origin} destination={destination} result={result} />
        </div>
    );
}
