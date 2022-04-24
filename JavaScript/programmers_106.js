// LV.2 다음 큰 숫자

function solution(n) {
  let aCnt = n.toString(2).replace(/0/g, "").length;
  let bCnt = 0;
  let num = n;
  while (bCnt !== aCnt) {
    num++;
    bCnt = num.toString(2).replace(/0/g, "").length;
  }
  return num;
}
