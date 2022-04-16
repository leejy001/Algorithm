// LV.2 교점에 별만들기

function solution(line) {
  let crossPoint = [];
  let minX = Infinity,
    minY = Infinity,
    maxX = -Infinity,
    maxY = -Infinity;
  let len = line.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      const [a, b, e] = line[i];
      const [c, d, f] = line[j];

      const mod = a * d - b * c;
      if (!mod) continue;

      const xNum = b * f - e * d;
      const yNum = e * c - a * f;
      if (xNum % mod || yNum % mod) continue;

      const x = xNum / mod;
      const y = yNum / mod;

      crossPoint.push([x, y]);
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
      minY = Math.min(minY, y);
      maxY = Math.max(maxY, y);
    }
  }

  const arr = [...Array(maxY - minY + 1)].map(() =>
    [...Array(maxX - minX + 1)].map(() => ".")
  );
  crossPoint.forEach(([x, y]) => {
    arr[maxY - y][x - minX] = "*";
  });

  return arr.map((v) => v.join(""));
}
