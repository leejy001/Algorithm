// LV.2 [3차] n진수 게임

function solution(n, t, m, p) {
  var answer = "";
  let arr = [];
  let num = 0;
  while (arr.length <= t * m) {
    arr.push(...num.toString(n).split(""));
    num++;
  }
  let cnt = p - 1;
  while (answer.length < t) {
    answer += arr[cnt];
    cnt += m;
  }
  return answer.toUpperCase();
}
