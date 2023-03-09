// LV.2 귤 고르기

function solution(k, tangerine) {
  const obj = {};
  tangerine.forEach((n) => {
    obj[n] = ++obj[n] || 1;
  });
  const kind = Object.values(obj).sort((a, b) => b - a);

  let sum = 0;
  let answer = 0;

  for (let num of kind) {
    answer++;
    sum += num;
    if (sum >= k) break;
  }
  return answer;
}
