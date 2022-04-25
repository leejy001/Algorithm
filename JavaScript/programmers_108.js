// LV.2 k진수에서 소수 개수 구하기

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(n, k) {
  var answer = 0;
  let bin = n.toString(k).split(0).map(Number);
  for (let b of bin) {
    if (isPrime(Number(b))) answer++;
  }
  return answer;
}
