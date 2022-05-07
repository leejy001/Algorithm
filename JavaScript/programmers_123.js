// LV.3 순위

function solution(n, results) {
  let answer = 0;
  let loses = {};
  let wins = {};

  for (let i = 1; i <= n; i++) {
    loses[i] = new Set([]);
    wins[i] = new Set([]);
  }

  for (let result of results) {
    loses[result[1]].add(result[0]);
    wins[result[0]].add(result[1]);
  }

  for (let i = 1; i <= n; i++) {
    for (let win of loses[i]) {
      if (!wins[win]) continue;
      for (let result of wins[i]) {
        wins[win].add(result);
      }
    }
    for (let lose of wins[i]) {
      if (!loses[lose]) continue;
      for (let result of loses[i]) {
        loses[lose].add(result);
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    if (loses[i].size + wins[i].size === n - 1) answer++;
  }

  return answer;
}
