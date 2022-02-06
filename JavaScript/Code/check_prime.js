// 소수 판별
function isPrime(num) {
  if (num === 2) return true;

  for (let i = 2; i <= parseInt(Math.sqrt(num), 10); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(15));
console.log(isPrime(17));

// 구간 내 소수 구하기 (애라토스테네스의 체)

/**
 * 빈 배열을 만들고 원소는 0부터 2는 false로 나머지는 true 값으로 채워준다.
 * 주어진 수의 거듭제곱까지만 계산해서 불필요한 반복문 줄여준다.
 * 2의 제곱부터 각 소수의 제곱 값만 체크하여 지워나간다.
 * 제곱근까지 반복한다.
 */

function solution(n) {
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);

  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  for (let i = 2; i <= n; i++) {
    if (arr[i]) console.log(i);
  }
}

console.log(solution(30));
