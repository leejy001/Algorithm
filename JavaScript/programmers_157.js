// LV1. 옹알이(2)

function solution(babbling) {
  let answer = 0;
  let words = ["aya", "ye", "woo", "ma"];
  for (let bab of babbling) {
    for (let word of words) {
      if (bab.includes(word.repeat(2))) break;

      bab = bab.split(word).join(" ");
    }
    if (bab.split(" ").join("").length === 0) answer += 1;
  }
  return answer;
}
