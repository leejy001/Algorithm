// LV.2 숫자 카드 나누기

function solution(arrayA, arrayB) {
  arrayA.sort((a, b) => a - b);
  arrayB.sort((a, b) => a - b);

  const gcd = (a, b) => {
    for (let i = a[0]; i > 0; i--) {
      if (a.every((v) => v % i === 0) && !b.some((v) => v % i === 0)) return i;
    }
    return 0;
  };
  return Math.max(gcd(arrayA, arrayB), gcd(arrayB, arrayA));
}
