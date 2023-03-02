// LV.1 크기가 작은 부분 문자열

function solution(t, p) {
  let answer = 0;
  let arr = [];
  for (let i = 0; i <= t.length - p.length; i++) {
    arr.push(Number(t.slice(i, i + p.length)));
  }
  for (let ar of arr) {
    if (ar <= Number(p)) answer++;
  }
  return answer;
}
