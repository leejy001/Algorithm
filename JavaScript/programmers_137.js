// LV.3 아이템 줍기

function bfs(map, x, y, endX, endY) {
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  let queue = [[x, y]];
  let cost = Array.from(new Array(103), () => new Array(103).fill(10000));
  cost[x][y] = 0;
  while (queue.length > 0) {
    let [cx, cy] = queue.shift();
    map[cx][cy] += 1;
    if (cx === endX && cy === endY) break;
    for (let i = 0; i < 4; i++) {
      let nx = cx + dx[i];
      let ny = cy + dy[i];
      if (nx < 0 || ny < 0 || nx >= 103 || ny >= 103) continue;
      if (map[nx][ny] !== 1) continue;
      if (cost[nx][ny] > cost[cx][cy] + 1) {
        cost[nx][ny] = cost[cx][cy] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  return Math.floor(cost[endX][endY] / 2);
}

function solution(rectangle, characterX, characterY, itemX, itemY) {
  let map = Array.from(new Array(103), () => new Array(103).fill(0));
  characterX *= 2;
  characterY *= 2;
  itemX *= 2;
  itemY *= 2;
  for (let rect of rectangle) {
    let [x1, y1, x2, y2] = rect;
    x1 *= 2;
    y1 *= 2;
    x2 *= 2;
    y2 *= 2;
    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j <= y2; j++) {
        if (i === x1 || i === x2 || j === y1 || j === y2) {
          if (map[i][j] === 1) continue;
          else map[i][j] += 1;
        } else {
          map[i][j] += 2;
        }
      }
    }
  }

  return bfs(map, characterX, characterY, itemX, itemY);
}
