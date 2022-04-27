// LV.2 피보나치 수

function solution(n) {
  let fibonacci = new Array(n).fill(0);
  fibonacci[0] = 0;
  fibonacci[1] = 1;
  for (let i = 2; i <= n; i++) {
    fibonacci[i] = (fibonacci[i - 2] + fibonacci[i - 1]) % 1234567;
  }
  return fibonacci.pop();
}
