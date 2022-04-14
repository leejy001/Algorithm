// LV.2 2개 이하로 다른 비트

function solution(numbers) {
  var answer = [];
  numbers.map((item) => {
    let cur = "0" + item.toString(2);
    let len = cur.length;
    if (cur[cur.length - 1] === "0") {
      answer.push(item + 1);
    } else {
      for (let i = len; i >= 0; i--) {
        if (cur[i] === "0") {
          answer.push(
            parseInt(cur.substring(0, i) + "10" + cur.substring(i + 2, len), 2)
          );
          break;
        }
      }
    }
  });
  return answer;
}
