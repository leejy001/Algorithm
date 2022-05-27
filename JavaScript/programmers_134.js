// LV.3 금과 은 운반하기
function solution(a, b, g, s, w, t) {
  let answer = 10e5 * 4 * 10e9;
  let start = 0;
  let end = answer;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let gold = 0;
    let silver = 0;
    let total = 0;

    for (let i = 0; i < w.length; i++) {
      let move_g = g[i];
      let move_s = s[i];
      let limit = w[i];
      let time = t[i];

      let count = Math.floor(mid / (time * 2));
      if (mid % (time * 2) >= t[i]) count++;

      gold += move_g < count * limit ? move_g : count * limit;
      silver += move_s < count * limit ? move_s : count * limit;
      total +=
        move_g + move_s < count * limit ? move_g + move_s : count * limit;
    }

    if (gold >= a && silver >= b && total >= a + b) {
      end = mid - 1;
      answer = Math.min(mid, answer);
    } else {
      start = mid + 1;
    }
  }
  return answer;
}
