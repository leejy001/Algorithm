// LV.2 마법의 엘리베이터

function solution(storey) {
  var answer = Number.MAX_SAFE_INTEGER;
  const DFS = (num, cnt) => {
    if (cnt >= answer) return;
    if (num === 0) {
      return (answer = cnt);
    }
    let res = num % 10;
    DFS(Math.floor(num / 10), cnt + res);
    DFS(Math.floor(num / 10) + 1, cnt + 10 - res);
  };

  DFS(storey, 0);
  return answer;
}
