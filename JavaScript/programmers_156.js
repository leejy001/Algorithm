// LV.1 기사단원의 무기

function getDivisors(num) {
  const divisors = [];
  for (let i = 1; i <= num ** 0.5; i++) {
    if (num % i === 0) {
      divisors.push(i);
      if (num / i !== i) divisors.push(num / i);
    }
  }
  return divisors;
}

function solution(number, limit, power) {
  var answer = 0;
  let amounts = [];
  for (let i = 1; i <= number; i++) {
    amounts.push(getDivisors(i).length);
  }
  for (let amount of amounts) {
    if (limit < amount) answer += power;
    else answer += amount;
  }
  return answer;
}
