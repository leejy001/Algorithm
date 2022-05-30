// LV.3 합승 택시 요금
function solution(n, s, a, b, fares) {
  const arr = Array.from(new Array(n), () => new Array(n).fill(Infinity));
  for (let i = 0; i < n; i++) {
    arr[i][i] = 0;
  }

  fares.forEach(([from, to, cost]) => {
    arr[from - 1][to - 1] = cost;
    arr[to - 1][from - 1] = cost;
  });

  for (let wp = 0; wp < n; wp++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        arr[i][j] = Math.min(arr[i][j], arr[i][wp] + arr[j][wp]);
      }
    }
  }

  let min = Infinity;

  for (let k = 0; k < n; k++) {
    min = Math.min(min, arr[s - 1][k] + arr[k][a - 1] + arr[k][b - 1]);
  }

  return min;
}
