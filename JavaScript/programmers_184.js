// LV.2 연속된 부분 수열의 합

function solution(sequence, k) {
  let start = 0;
  let answer = [];
  let sum = 0;
  for (let i = 0; i < sequence.length; i++) {
    sum += sequence[i];
    if (sum > k) {
      while (sum > k) {
        sum -= sequence[start++];
      }
    }
    if (sum === k) answer.push([start, i]);
  }
  let min = sequence.length;
  let result = [];
  answer.forEach((el) => {
    if (min > el[1] - el[0]) {
      min = el[1] - el[0];
      result = [el[0], el[1]];
    }
  });
  return result;
}
