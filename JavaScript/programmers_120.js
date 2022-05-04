// LV.3 가장 먼 노드

function solution(n, edge) {
  let graph = Array(n + 1)
    .fill(null)
    .map(() => Array());
  let queue = [1];
  let visited = Array(n + 1).fill(false);
  let cost = Array(n + 1).fill(1);

  for (let e of edge) {
    graph[e[0]].push(e[1]);
    graph[e[1]].push(e[0]);
  }

  visited[1] = true;

  while (queue.length !== 0) {
    let from = queue.shift();
    for (let i of graph[from]) {
      if (visited[i] === false) {
        queue.push(i);
        visited[i] = true;
        cost[i] = cost[from] + 1;
      }
    }
  }
  return cost.filter((item) => item === Math.max.apply(null, cost)).length;
}
