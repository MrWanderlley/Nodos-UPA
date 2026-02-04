// ===================== DIJKSTRA =====================

export function dijkstra(graph, start, end) {
    const distances = {};
    const previous = {};
    const visited = {};

    for (let node in graph) {
        distances[node] = Infinity;
        previous[node] = null;
    }
    distances[start] = 0;

    while (true) {
        let closestNode = null;
        let shortestDistance = Infinity;

        for (let node in distances) {
        if (!visited[node] && distances[node] < shortestDistance) {
            shortestDistance = distances[node];
            closestNode = node;
        }
        }

        if (closestNode === null) break;
        if (closestNode === end) break;

        visited[closestNode] = true;

        for (let neighbor in graph[closestNode]) {
        const newDistance = distances[closestNode] + graph[closestNode][neighbor];
        if (newDistance < distances[neighbor]) {
            distances[neighbor] = newDistance;
            previous[neighbor] = closestNode;
        }
        }
    }

    const path = [];
    let current = end;
    while (current) {
        path.unshift(current);
        current = previous[current];
    }

    return { path, distance: distances[end] };
}