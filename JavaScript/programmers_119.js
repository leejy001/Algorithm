// LV.3 입국심사

function solution(n, times) {
  let left = 1;
  let right = Math.max.apply(null, times) * n;
  while (left !== right) {
    let mid = Math.floor((left + right) / 2);
    let total = 0;
    for (let time of times) {
      total += Math.floor(mid / time);
    }
    if (total >= n) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
