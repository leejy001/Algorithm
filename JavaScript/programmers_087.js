// LV.2 삼각 달팽이

function solution(n) {
  let arr = Array.from(new Array(n), () => new Array(n));
  let cnt = 0;
  let x = -1;
  let y = 0;
  while (n > 0) {
    for (let i = 0; i < n; i++) arr[++x][y] = ++cnt;
    for (let i = 0; i < n - 1; i++) arr[x][++y] = ++cnt;
    for (let i = 0; i < n - 2; i++) arr[--x][--y] = ++cnt;
    n -= 3;
  }
  return arr.flat();
}
