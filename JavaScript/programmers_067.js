// LV.2 거리두기 확인

function solution(places) {
  var answer = [];
  for (const place of places) {
    place.map((row, idx) => {
      place[idx] = row.split("");
    });
    const isOver = (val) => val >= 0 && val < 5;
    const isEmpty = (x, y) => place[x][y] === "O";
    const isPerson = (x, y) => place[x][y] === "P";
    const isKeep = place.every((el, row) =>
      el.every((seat, col) => {
        if (seat === "P") {
          if (isOver(row - 1)) {
            if (isPerson(row - 1, col)) return false;
            if (isEmpty(row - 1, col)) {
              if (isOver(col - 1) && isPerson(row - 1, col - 1)) return false;
              if (isOver(row - 2) && isPerson(row - 2, col)) return false;
              if (isOver(col + 1) && isPerson(row - 1, col + 1)) return false;
            }
          }
          if (isOver(row + 1)) {
            if (isPerson(row + 1, col)) return false;
            if (isEmpty(row + 1, col)) {
              if (isOver(col - 1) && isPerson(row + 1, col - 1)) return false;
              if (isOver(row + 2) && isPerson(row + 2, col)) return false;
              if (isOver(col + 1) && isPerson(row + 1, col + 1)) return false;
            }
          }
          if (isOver(col - 1)) {
            if (isPerson(row, col - 1)) return false;
            if (isEmpty(row, col - 1)) {
              if (isOver(row - 1) && isPerson(row - 1, col - 1)) return false;
              if (isOver(col - 2) && isPerson(row, col - 2)) return false;
              if (isOver(row + 1) && isPerson(row + 1, col - 1)) return false;
            }
          }
          if (isOver(col + 1)) {
            if (isPerson(row, col + 1)) return false;
            if (isEmpty(row, col + 1)) {
              if (isOver(row - 1) && isPerson(row - 1, col + 1)) return false;
              if (isOver(col + 2) && isPerson(row, col + 2)) return false;
              if (isOver(row + 1) && isPerson(row + 1, col + 1)) return false;
            }
          }
        }
        return true;
      })
    );
    answer.push(isKeep ? 1 : 0);
  }
  return answer;
}

// DFS 풀이
function solution(places) {
  places = places.map((p) => p.map((el) => el.split("")));
  let answer = [];
  let isKeep = true;
  for (let i = 0; i < places.length; i++) {
    isKeep = true;
    for (let j = 0; j < 5; j++) {
      for (let k = 0; k < 5; k++) {
        if (places[i][j][k] === "P") {
          dfs(places[i], j, k, 0);
          if (isKeep === false) break;
        }
      }
    }
    isKeep ? answer.push(1) : answer.push(0);
  }

  function dfs(place, x, y, num) {
    place[x][y] = "X";
    if (num === 2) return;

    let dx = [0, 0, 1, -1];
    let dy = [1, -1, 0, 0];

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5 && place[nx][ny] !== "X") {
        if (place[nx][ny] === "O") {
          dfs(place, nx, ny, num + 1);
        } else if (place[nx][ny] === "P") {
          isKeep = false;
        }
      }
    }
  }

  return answer;
}
