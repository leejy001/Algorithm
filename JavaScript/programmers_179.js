// LV.2 무인도 여행

function solution(maps) {
  var answer = [];
  let w = maps[0].length;
  let h = maps.length;
  const visited = Array.from({ length: h }, () => Array(w).fill(0));
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];

  function bfs(x, y) {
    let cnt = 0;
    let queue = [[x, y]];
    cnt += parseInt(maps[x][y], 10);
    visited[x][y] = 1;
    while (queue.length) {
      const [x, y] = queue.shift();
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (
          nx >= 0 &&
          nx < h &&
          ny >= 0 &&
          ny < w &&
          maps[nx][ny] !== "X" &&
          !visited[nx][ny]
        ) {
          visited[nx][ny] = 1;
          cnt += parseInt(maps[nx][ny], 10);
          queue.push([nx, ny]);
        }
      }
    }
    answer.push(cnt);
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (!visited[i][j] && maps[i][j] !== "X") {
        bfs(i, j);
      }
    }
  }
  if (answer.length === 0) return [-1];
  return answer.sort((a, b) => a - b);
}
