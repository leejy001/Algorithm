// LV.1 명예의 전당 (1)

function solution(k, score) {
  var answer = [];
  let kArr = [];
  for (let sc of score) {
    if (kArr.length < k) {
      kArr.push(sc);
    } else if (kArr.length === k && sc > kArr[k - 1]) {
      kArr.pop();
      kArr.push(sc);
    }
    kArr.sort((a, b) => {
      return b - a;
    });
    answer.push(kArr[kArr.length - 1]);
  }

  return answer;
}
