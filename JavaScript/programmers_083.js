// LV.2 큰 수 만들기

function solution(number, k) {
  var answer = [];
  let numArr = number.split("");
  for (let i = 0; i < numArr.length; i++) {
    while (answer && k > 0 && answer[answer.length - 1] < numArr[i]) {
      answer.pop();
      k -= 1;
    }
    answer.push(numArr[i]);
  }
  return answer.slice(0, answer.length - k).join("");
}
