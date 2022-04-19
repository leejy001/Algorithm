// LV.2 쿼드압축 후 개수 세기

function solution(arr) {
  let answer = [0, 0];
  let len = arr.length;
  function comp(x, y, len) {
    let init = arr[x][y];
    for (let i = x; i < x + len; i++) {
      for (let j = y; j < y + len; j++) {
        if (arr[i][j] !== init) {
          len = Math.floor(len / 2);
          comp(x, y, len);
          comp(x + len, y, len);
          comp(x, y + len, len);
          comp(x + len, y + len, len);
          return;
        }
      }
    }
    answer[init] += 1;
  }
  comp(0, 0, len);
  return answer;
}
