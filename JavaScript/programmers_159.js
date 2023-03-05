// LV.1 문자열 나누기

function solution(s) {
  let answer = 0;
  let onceCnt = 0;
  let otherCnt = 0;
  let checkChar = "";
  for (let ch of s) {
    if (checkChar === "") checkChar = ch;
    checkChar === ch ? onceCnt++ : otherCnt++;
    if (onceCnt === otherCnt) {
      answer++;
      checkChar = "";
      onceCnt = 0;
      otherCnt = 0;
    }
  }
  return checkChar ? ++answer : answer;
}
