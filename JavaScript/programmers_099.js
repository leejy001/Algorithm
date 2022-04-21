// LV.2 방문 길이

function solution(dirs) {
  var answer = 0;
  let xy = [];
  let x = 0;
  let y = 0;
  for (let i = 0; i < dirs.length; i++) {
    if (dirs[i] === "U" && x + 1 <= 5) {
      xy.push([x, y, x + 1, y]);
      x += 1;
    } else if (dirs[i] === "D" && x - 1 >= -5) {
      xy.push([x, y, x - 1, y]);
      x -= 1;
    } else if (dirs[i] === "R" && y + 1 <= 5) {
      xy.push([x, y, x, y + 1]);
      y += 1;
    } else if (dirs[i] === "L" && y - 1 >= -5) {
      xy.push([x, y, x, y - 1]);
      y -= 1;
    }
  }

  function removeDup(arr) {
    return [...new Set(arr.join("|").split("|"))]
      .map((v) => v.split(","))
      .map((v) => v.map((a) => +a));
  }

  let setXY = removeDup(xy);
  let len = setXY.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (
        setXY[i][0] === setXY[j][2] &&
        setXY[i][1] === setXY[j][3] &&
        setXY[i][2] === setXY[j][0] &&
        setXY[i][3] === setXY[j][1]
      )
        answer++;
    }
  }
  return len - answer;
}
