import { coords } from "./data";
import Node from "./components/Node";

// ===================== Grafos =====================
export default function Grafos() {
    return (
        <div className="container">
            {Object.keys(coords).map((node) => (
                <Node key={node} id={node} coords={coords} />
            ))}
        </div>
    );
}
