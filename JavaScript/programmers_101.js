// LV.2 가장큰 정사각형 찾기

function solution(board) {
  let answer = 0;
  let row = board.length;
  let col = board[0].length;
  let max = Math.max.apply(null, board[0]);
  for (let i = 1; i < row; i++) {
    if (max < board[i][0]) max = board[i][0];
    for (let j = 1; j < col; j++) {
      if (board[i][j] !== 0) {
        board[i][j] =
          Math.min(
            board[i - 1][j - 1],
            Math.min(board[i][j - 1], board[i - 1][j])
          ) + 1;
        if (max < board[i][j]) max = board[i][j];
      }
    }
  }
  return max ** 2;
}
