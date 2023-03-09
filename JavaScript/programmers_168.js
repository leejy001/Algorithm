// LV.2 연속 부분 수열 합의 개수

function solution(elements) {
  let setEl = new Set();
  let len = elements.length;
  for (let i = 1; i <= len; i++) {
    let sum = 0;
    for (let j = 0; j < len; j++) {
      if (j === 0) {
        for (let k = 0; k < i; k++) {
          sum += elements[k];
        }
      } else {
        sum -= elements[j - 1];
        sum += elements[(j + i - 1) % len];
      }
      setEl.add(sum);
    }
  }
  return setEl.size;
}
