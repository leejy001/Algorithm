// LV.2 피로도

// 순열
function getPermu(arr, num) {
  const result = [];
  if (num === 1) return arr.map((item) => [item]);
  arr.forEach((fixed, index, arr) => {
    const rest = [...arr.slice(0, index), ...arr.slice(index + 1)];
    const per = getPermu(rest, num - 1);
    const answer = per.map((item) => [fixed, ...item]);
    result.push(...answer);
  });
  return result;
}

function solution(k, dungeons) {
  var max = -1;
  let num = dungeons.length;
  let arr = new Array(num);
  for (let i = 0; i < num; i++) {
    arr[i] = i;
  }
  let per = getPermu(arr, num);
  for (let p of per) {
    let cur = k;
    let cnt = 0;
    for (let idx of p) {
      if (cur >= dungeons[idx][0]) {
        cur -= dungeons[idx][1];
        cnt++;
      }
    }
    if (max < cnt) max = cnt;
  }
  return max;
}

// DFS 순열
function solution(k, d) {
  const N = d.length;
  const visited = new Array(N).fill(false);
  let answer = 0;

  function dfs(k, cnt) {
    answer = Math.max(cnt, answer);
    for (let j = 0; j < N; j++) {
      if (k >= d[j][0] && !visited[j]) {
        visited[j] = true;
        dfs(k - d[j][1], cnt + 1);
        visited[j] = false;
      }
    }
  }

  dfs(k, 0);
  return answer;
}
