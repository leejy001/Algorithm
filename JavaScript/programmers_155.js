// LV.1 숫자 짝꿍

function solution(X, Y) {
  let answer = "";
  let xArr = X.split("")
    .map(Number)
    .sort((a, b) => {
      return b - a;
    });
  let yArr = Y.split("")
    .map(Number)
    .sort((a, b) => {
      return b - a;
    });
  let i = 0,
    j = 0;
  while (i < xArr.length && j < yArr.length) {
    if (xArr[i] === yArr[j]) {
      answer += xArr[i];
      i++;
      j++;
    }
    if (xArr[i] < yArr[j]) j++;
    if (xArr[i] > yArr[j]) i++;
  }
  if (answer.length === 0) return "-1";

  answer = answer.replace(/(^0+)/, "");

  return answer.length === 0 ? "0" : answer;
}
