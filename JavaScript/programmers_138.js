// LV.3 섬 연결하기

function solution(n, costs) {
  let answer = 0;
  costs.sort((a, b) => {
    return a[2] - b[2];
  });
  let [from, to, cost] = costs.shift();
  let set = new Set([from, to]);
  answer += cost;
  while (set.size < n) {
    let idx = costs.findIndex(
      ([from, to]) =>
        (set.has(from) && !set.has(to)) || (set.has(to) && !set.has(from))
    );
    let [[from, to, cost]] = costs.splice(idx, 1);
    answer += cost;
    set.add(from).add(to);
  }
  return answer;
}
