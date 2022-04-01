// LV.2 행렬 테두리 회전하기

function solution(rows, columns, queries) {
  var answer = [];
  let arr = Array.from(Array(rows), () => Array(columns));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      arr[i][j] = columns * i + j + 1;
    }
  }

  queries.map((query) => {
    const [x1, y1, x2, y2] = query.map((item) => item - 1);
    let min = arr[x1][y2];
    let temp = arr[x1][y2];

    for (let i = y2; i > y1; i--) {
      min = Math.min(min, arr[x1][i]);
      arr[x1][i] = arr[x1][i - 1];
    }

    for (let i = x1; i < x2; i++) {
      min = Math.min(min, arr[i][y1]);
      arr[i][y1] = arr[i + 1][y1];
    }

    for (let i = y1; i < y2; i++) {
      min = Math.min(min, arr[x2][i]);
      arr[x2][i] = arr[x2][i + 1];
    }

    for (let i = x2; i > x1; i--) {
      min = Math.min(min, arr[i][y2]);
      arr[i][y2] = arr[i - 1][y2];
    }

    arr[x1 + 1][y2] = temp;
    answer.push(min);
  });

  return answer;
}
