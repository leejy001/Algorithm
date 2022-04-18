// LV.2 이진 변환 반복하기

function solution(s) {
  let zero = 0;
  let cnt = 0;
  while (s !== "1") {
    let z = s.match(/0/g);
    if (z !== null) {
      zero += z.length;
    }
    let len = s.replace(/0/g, "").length;
    s = len.toString(2);
    cnt++;
  }
  return [cnt, zero];
}
