// LV.2 점찍기

function solution(k, d) {
  let result = 0;
  for (let i = 0; i <= d; i += k) {
    const y = Math.sqrt(d * d - i * i);
    result += Math.floor(y / k) + 1;
  }

  return result;
}
