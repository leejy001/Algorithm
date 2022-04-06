// LV.2 소수 찾기

function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  for (let i = 2; i <= parseInt(Math.sqrt(num), 10); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function getPermu(arr, num) {
  let result = [];
  if (num === 1) return arr.map((item) => [item]);
  arr.forEach((fixed, index, arr) => {
    const rest = [...arr.slice(0, index), ...arr.slice(index + 1)];
    const per = getPermu(rest, num - 1);
    const ans = per.map((item) => [fixed, ...item]);
    result.push(...ans);
  });
  return result;
}

function solution(numbers) {
  var answer = 0;
  let result = [];
  let set = new Set();

  for (let i = 1; i <= numbers.length; i++) {
    result.push(...getPermu(numbers.split(""), i));
  }

  for (let res of result) {
    set.add(Number(res.join("")));
  }

  for (let s of set) {
    if (isPrime(s)) answer++;
  }

  return answer;
}
