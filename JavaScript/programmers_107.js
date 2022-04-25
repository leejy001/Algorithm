// LV.2 땅따먹기

function solution(land) {
  for (let i = 1; i < land.length; i++) {
    land[i][0] += Math.max(
      land[i - 1][1],
      Math.max(land[i - 1][2], land[i - 1][3])
    );
    land[i][1] += Math.max(
      land[i - 1][0],
      Math.max(land[i - 1][2], land[i - 1][3])
    );
    land[i][2] += Math.max(
      land[i - 1][0],
      Math.max(land[i - 1][1], land[i - 1][3])
    );
    land[i][3] += Math.max(
      land[i - 1][0],
      Math.max(land[i - 1][1], land[i - 1][2])
    );
  }

  return Math.max.apply(null, land[land.length - 1]);
}
