// LV.1 둘만의 암호

function solution(s, skip, index) {
  let answer = "";
  const regex = new RegExp(`[^${skip}]`, "g");
  const alpabet = "abcdefghijklmnopqrstuvwxyz".match(regex);
  for (let ch of s) {
    let idx = alpabet.indexOf(ch) + index;
    answer += alpabet[idx % alpabet.length];
  }
  return answer;
}
