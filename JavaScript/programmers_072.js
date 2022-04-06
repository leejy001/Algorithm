// LV.2 가장 큰 수

function solution(numbers) {
  const answer = numbers
    .map((item) => item + "")
    .sort((a, b) => b + a - (a + b))
    .join("");
  return answer[0] === "0" ? "0" : answer;
}
