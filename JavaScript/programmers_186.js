// LV.2 최고의 집합

function solution(n, s) {
  let answer;
  let share = (s / n) >> 0;
  if (!share) return [-1];

  const rest = s % n;
  answer = new Array(n).fill(share);

  for (let i = 0; i < rest; i++) {
    answer[answer.length - 1 - i]++;
  }
  return answer;
}
