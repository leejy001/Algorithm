// LV.3 숫자 게임

function solution(A, B) {
  A.sort((a, b) => {
    return b - a;
  });
  B.sort((a, b) => {
    return b - a;
  });
  let idx = 0;
  while (idx !== A.length) {
    if (A[idx] < B[idx]) {
      idx++;
    } else {
      A.splice(idx, 1);
    }
  }
  return idx;
}
