// LV.1 가장 가까운 같은 글자

function solution(s) {
  let answer = [];
  let chArr = [];
  let str = "";
  for (let ch of s) {
    if (!chArr.includes(ch)) {
      answer.push(-1);
      chArr.push(ch);
    } else {
      answer.push(str.length - str.lastIndexOf(ch));
    }
    str += ch;
  }
  return answer;
}
