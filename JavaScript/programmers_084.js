// LV.2 [1차] 프렌즈4블록

function solution(m, n, board) {
  var answer = 0;
  board = board.map((item) => item.split(""));
  while (true) {
    let remove_list = [];
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        const cur = board[i][j];
        if (cur === 0) continue;
        if (
          cur === board[i][j + 1] &&
          cur === board[i + 1][j] &&
          cur === board[i + 1][j + 1]
        ) {
          remove_list.push([i, j]);
        }
      }
    }

    if (!remove_list.length) {
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          if (board[i][j] === 0) answer++;
        }
      }
      break;
    }

    remove_list.map(([i, j]) => {
      board[i][j] = 0;
      board[i][j + 1] = 0;
      board[i + 1][j] = 0;
      board[i + 1][j + 1] = 0;
    });

    for (let i = m - 1; i >= 0; i--) {
      for (let j = 0; j < n; j++) {
        for (let k = i - 1; k >= 0; k--) {
          if (board[i][j]) break;

          if (board[k][j]) {
            board[i][j] = board[k][j];
            board[k][j] = 0;
            break;
          }
        }
      }
    }
  }

  return answer;
}
