// LV.3 네트워크

function solution(n, computers) {
  let answer = 0;
  let visited = new Array(n).fill(false);

  function dfs(i) {
    if (visited[i] === true) {
      return 0;
    } else visited[i] = true;

    for (let j in computers[i]) {
      if (computers[i][j] === 1) dfs(j);
    }
    return 1;
  }

  for (let i in computers) {
    answer += dfs(i);
  }
  return answer;
}
