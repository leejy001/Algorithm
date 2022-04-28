// LV.2 행렬의 곱셈

function solution(arr1, arr2) {
  var answer = [];

  for (let i in arr1) {
    const row = arr1[i];
    answer.push([]);
    for (let j in arr2[0]) {
      let sum = 0;
      for (let k in arr2) {
        sum += row[k] * arr2[k][j];
      }
      answer[i].push(sum);
    }
  }
  return answer;
}

// 간소화
function solution(arr1, arr2) {
  return arr1.map((row) =>
    arr2[0].map((x, y) => row.reduce((a, b, c) => a + b * arr2[c][y], 0))
  );
}
