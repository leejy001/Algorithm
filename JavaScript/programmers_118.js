// LV.3 N으로 표현

function solution(N, number) {
  if (N === number) return 1;
  let arr = [0, [N]];
  for (let i = 2; i < 9; i++) {
    let num = Number(String(N).repeat(i));
    let subSet = new Set();
    subSet.add(num);
    for (let j = 1; j < Math.floor(arr.length / 2) + 1; j++) {
      for (let x of arr[j]) {
        for (let y of arr[i - j]) {
          subSet.add(x + y);
          subSet.add(x - y);
          subSet.add(x * y);
          if (y) {
            subSet.add(Math.floor(x / y));
          }
          subSet.add(y + x);
          subSet.add(y - x);
          subSet.add(y * x);
          if (x) {
            subSet.add(Math.floor(y / x));
          }
        }
      }
    }
    let subArr = Array.from(subSet);
    if (subArr.includes(number)) return i;
    arr.push(subArr);
  }
  return -1;
}
