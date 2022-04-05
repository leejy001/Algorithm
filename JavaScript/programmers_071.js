// LV.2 프린터

function solution(priorities, location) {
  var answer = 0;
  var arr = priorities.map((item, index) => (item = [item, index]));
  let max = Math.max.apply(
    null,
    arr.map((item) => item[0])
  );

  while (true) {
    let [[val, loc]] = arr.slice(0, 1);
    if (val === max && loc === location) {
      answer += 1;
      break;
    }
    if (val === max) {
      arr.splice(0, 1);
      max = Math.max.apply(
        null,
        arr.map((item) => item[0])
      );
      answer += 1;
    } else {
      arr.splice(0, 1);
      arr.push([val, loc]);
    }
  }
  return answer;
}
