// LV.2 하노이의 탑

function solution(n) {
  var answer = [];
  const hanoi = (num, start, temp, end) => {
    if (num === 1) {
      answer.push([start, end]);
      return;
    }
    hanoi(num - 1, start, end, temp);
    answer.push([start, end]);
    hanoi(num - 1, temp, start, end);
  };
  hanoi(n, 1, 2, 3);
  return answer;
}
