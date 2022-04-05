// LV.2 빛의 경로 사이클

function solution(grid) {
  var answer = [];
  var row = grid.length;
  var col = grid[0].length;
  let visited = Array.from(new Array(row), () =>
    Array.from(new Array(col), () => new Array(4).fill(false))
  );
  let move = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let Spossible = [0, 1, 2, 3];
  let Lpossible = [3, 2, 0, 1];
  let Rpossible = [2, 3, 1, 0];

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      for (let d = 0; d < 4; d++) {
        if (visited[r][c][d]) continue;

        let curX = r;
        let curY = c;
        let nextDir = d;
        let count = 0;

        while (!visited[curX][curY][nextDir]) {
          count++;
          visited[curX][curY][nextDir] = true;

          switch (grid[curX][curY]) {
            case "S":
              nextDir = Spossible[nextDir];
              break;
            case "L":
              nextDir = Lpossible[nextDir];
              break;
            case "R":
              nextDir = Rpossible[nextDir];
              break;
          }

          curX += move[nextDir][0];
          curY += move[nextDir][1];

          curX = curX === row ? 0 : curX < 0 ? row - 1 : curX;
          curY = curY === col ? 0 : curY < 0 ? col - 1 : curY;
        }
        answer.push(count);
      }
    }
  }

  return answer.sort((a, b) => a - b);
}
