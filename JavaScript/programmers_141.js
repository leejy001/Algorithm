// LV.3 기지국 설치

function solution(n, stations, w) {
  var answer = 0;
  const range = 2 * w + 1;
  let start = 1;
  for (let station of stations) {
    let end = station - w;
    if (end > start) {
      let width = end - start;
      answer += Math.ceil(width / range);
    }
    start = station + w + 1;
  }

  if (start <= n) {
    let end = n + 1;
    let width = end - start;
    answer += Math.ceil(width / range);
  }

  return answer;
}
