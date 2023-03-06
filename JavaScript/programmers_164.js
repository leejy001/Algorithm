// LV.1 바탕화면 정리

function solution(wallpaper) {
  let lux = [];
  let luy = [];
  let rdx = [];
  let rdy = [];
  for (let i = 0; i < wallpaper.length; i++) {
    wallpaper[i].split("").forEach((item, idx) => {
      if (item === "#") {
        lux.push(i);
        luy.push(idx);
        rdx.push(i + 1);
        rdy.push(idx + 1);
      }
    });
  }
  return [
    Math.min.apply(null, lux),
    Math.min.apply(null, luy),
    Math.max.apply(null, rdx),
    Math.max.apply(null, rdy)
  ];
}
