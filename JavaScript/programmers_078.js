// LV.2 배달

function solution(N, road, K) {
  const cost = Array(N + 1).fill(Infinity);
  const adj = Array.from({ length: N + 1 }, () => []);

  for (let i = 0; i < road.length; i++) {
    adj[road[i][0]].push([road[i][1], road[i][2]]);
    adj[road[i][1]].push([road[i][0], road[i][2]]);
  }

  let que = [[1, 0]];
  cost[1] = 0;

  while (que.length) {
    let [to, time] = que.shift();
    adj[to].map((item) => {
      if (cost[item[0]] > cost[to] + item[1]) {
        cost[item[0]] = cost[to] + item[1];
        que.push(item);
      }
    });
  }

  return cost.filter((x) => x <= K).length;
}
