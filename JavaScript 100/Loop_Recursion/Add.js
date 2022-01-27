// 1 ~ 100 더하기
// 반복문
let n = 100;
let s = 0;
for (let i = 0; i < n + 1; i++) {
  s += i;
}
console.log("loop", s); // O(n)

console.log("formula", (n * (n + 1)) / 2); // O(1)

// 재귀
/* 
순번  f(n)    n    return       최종
1    f(100)  100  100 + f(99)  100+99+98+97...+2+1
2    f(99)   99   99 + f(98)   99+98+97...+2+1
3    f(98)   98   98 + f(97)   98+97...+2+1
...
99   f(2)    2    2 + f(1)     2+1
100  f(1)    1    return 1
*/

function f(n) {
  if (n <= 1) return 1;
  return n + f(n - 1);
}

console.log("recursion", f(n));
