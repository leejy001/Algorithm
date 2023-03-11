// LV.2 덧칠하기

function solution(n, m, section) {
  let answer = 0;
  let end = 0;
  for (let i = 0; i < section.length; i++) {
    if (end < section[i]) {
      end = section[i] + m - 1;
      answer++;
    }
  }
  return answer;
}
