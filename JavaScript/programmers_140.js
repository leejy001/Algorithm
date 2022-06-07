// LV.3 퍼즐 조각 채우기

function dfs(table, x, y, list, find) {
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const stack = [[x, y]];
  const len = table.length;
  list.push([x, y]);

  while (stack.length) {
    let [x, y] = stack.pop();
    table[x][y] = -1;
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 0 || nx >= len || ny < 0 || ny >= len) continue;
      if (table[nx][ny] === find) {
        table[nx][ny] = -1;
        stack.push([nx, ny]);
        list.push([nx, ny]);
      }
    }
  }
}

function setZero(list) {
  const minX = Math.min(...list.map((c) => c[0]));
  const minY = Math.min(...list.map((c) => c[1]));
  return list.map((c) => [c[0] - minX, c[1] - minY]).sort();
}

function rotate(list) {
  if (list.length === 1) return list;
  let result = [];
  let shape = list.map((l) => l);
  let width =
    Math.max(...shape.map((s) => s[1])) - Math.min(...shape.map((s) => s[1]));
  let height =
    Math.max(...shape.map((s) => s[0])) - Math.min(...shape.map((s) => s[0]));
  let w;

  for (let i = 0; i < 4; i++) {
    let temp = setZero(shape.map((c) => [c[1], width - c[0]]));
    shape = temp;
    result.push(shape);
    w = width;
    width = height;
    height = w;
  }

  return result.sort()[0];
}

function solution(game_board, table) {
  let answer = 0;
  let spaces = [],
    puzzles = [];

  for (let x = 0; x < table.length; x++) {
    for (let y = 0; y < table[0].length; y++) {
      if (game_board[x][y] === 0) {
        let space = [];
        dfs(game_board, x, y, space, 0);
        space = setZero(space);
        space = rotate(space);
        spaces.push(space);
      }

      if (table[x][y] === 1) {
        let puzzle = [];
        dfs(table, x, y, puzzle, 1);
        puzzle = setZero(puzzle);
        puzzle = rotate(puzzle);
        puzzles.push(puzzle);
      }
    }
  }

  for (let space of spaces) {
    for (let i = 0; i < puzzles.length; i++) {
      if (JSON.stringify(space) === JSON.stringify(puzzles[i])) {
        answer += puzzles[i].length;
        puzzles = puzzles.map((p, idx) => (idx === i ? [] : p));
        break;
      }
    }
  }

  return answer;
}
