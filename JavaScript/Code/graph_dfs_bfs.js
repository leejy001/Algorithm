const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"]
};

// DFS
function dfs (graph, startNode) {
    let visited = [];
    let visit = [];

    visit.push(startNode);

    while(visit.length !== 0) {
        const node = visit.pop();
        if (!visited.includes(node)) {
            visited.push(node);
            visit = [...visit, ...graph[node]];
        }
    }
    return visited;
}

// BFS
function bfs (graph, startNode) {
    let visited = [];
    let visit = [];

    visit.push(startNode);

    while(visit.length !== 0) {
        const node = visit.shift();  // 선입선출
        if (!visited.includes(node)) {
            visited.push(node);
            visit = [...visit, ...graph[node]];
        }
    }
    return visited;
}