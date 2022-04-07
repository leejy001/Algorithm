// LV.2 예상 대진표

function solution(n, a, b) {
  var answer = 0;
  while (a != b) {
    a = Math.floor((a + 1) / 2);
    b = Math.floor((b + 1) / 2);
    answer++;
  }
  return answer;
}
