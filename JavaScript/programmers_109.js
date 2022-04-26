// LV.2 숫자의 표현

function solution(n) {
  let answer = 0;
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    let sum = 0;
    let cnt = i;

    while (sum < n) {
      sum += cnt;
      cnt += 1;
    }

    if (sum === n) {
      answer += 1;
    }
  }

  return answer + 1;
}
