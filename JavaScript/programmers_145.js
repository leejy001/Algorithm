// LV.3 징검다리 건너기

function isSkip(stones, num, k) {
  let skip = 0;
  for (let i = 0; i < stones.length; i++) {
    if (stones[i] < num) skip += 1;
    else skip = 0;
    if (skip >= k) return false;
  }
  return true;
}

function solution(stones, k) {
  let start = 1;
  let end = 200000000;
  while (start < end - 1) {
    let mid = Math.floor((start + end) / 2);
    if (isSkip(stones, mid, k)) {
      start = mid;
    } else {
      end = mid;
    }
  }
  return start;
}
