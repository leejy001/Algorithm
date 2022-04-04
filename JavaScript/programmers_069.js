// LV.2 튜플

function solution(s) {
  var nums = s
    .replace(/[^0-9,]/g, "")
    .split(",")
    .map(Number);
  var map = new Map();
  for (let num of nums) {
    if (!map.get(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num) + 1);
    }
  }
  var answer = Array.from(map).sort((a, b) => b[1] - a[1]);

  return answer.map((item) => item[0]);
}
