// 피보나치 수열
// 1 1 2 3 5 8 13 21 24

// 반복문
let a = 1;
let b = 1;
for (let i = 0; i < 5; i++) {
  let c = a + b;
  a = b;
  b = c;
}

console.log(b);

// 재귀
/*
fibo(7) fibo(6) + fibo(5) => 8+5 = 13
fibo(6) fibo(5) + fibo(4) => 5+3 = 8
fibo(5) fibo(4) + fibo(3) => 3+2 = 5 
fibo(4) fibo(3) + fibo(2) => 2+1 = 3
fibo(3) fibo(2) + fibo(1) => 1+1 = 2
fibo(2) 1
fibo(1) 1
*/
function fibo(num) {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibo(num - 1) + fibo(num - 2);
}

console.log(fibo(7));
