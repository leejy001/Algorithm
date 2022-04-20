// n^2 배열 자르기

function solution(n, left, right) {
  let arr = [];
  while (left <= right) {
    arr.push(Math.max(Math.floor(left / n), left % n) + 1);
    left++;
  }
  return arr;
}
