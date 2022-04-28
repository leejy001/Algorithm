// LV.2 N개의 최소공배수

function solution(arr) {
  let answer = arr[0];
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  const lcm = (a, b) => (a * b) / gcd(a, b);
  if (arr.length === 1) return answer;
  for (let i = 1; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }
  return answer;
}
