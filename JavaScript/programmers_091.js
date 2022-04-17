// LV.2 전력망을 둘로 나누기

function bfs(a, b, graph, n) {
  let visited = new Array(n).fill(false);
  let queue = [];
  let cnt = 0;

  queue.push(a);
  visited[a] = true;
  while (queue.length > 0) {
    let cur = queue.shift();
    cnt++;

    for (let next of graph[cur]) {
      if (next !== b && !visited[next]) {
        queue.push(next);
        visited[next] = true;
      }
    }
  }
  return cnt;
}

function solution(n, wires) {
  let graph = {};
  let answer = Infinity;
  for (let wire of wires) {
    if (!graph[wire[0]]) graph[wire[0]] = [];
    if (!graph[wire[1]]) graph[wire[1]] = [];
    graph[wire[0]].push(wire[1]);
    graph[wire[1]].push(wire[0]);
  }

  for (let wire of wires) {
    let w1 = bfs(wire[0], wire[1], graph, n);
    let w2 = bfs(wire[1], wire[0], graph, n);
    answer = Math.min(answer, Math.abs(w1 - w2));
  }

  return answer;
}
