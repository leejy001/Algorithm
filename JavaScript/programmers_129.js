// LV.3 단어 변환

function compare(prev, next) {
  let count = 0;
  for (let i in prev) {
    if (prev[i] !== next[i]) count++;
  }
  if (count === 1) return true;
  else return false;
}

function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  let cost = {};
  cost[begin] = 0;
  let queue = [begin];

  while (queue.length !== 0) {
    let basic = queue.shift();
    for (let word of words) {
      if (compare(basic, word) && !cost[word]) {
        cost[word] = cost[basic] + 1;
        queue.push(word);
      }
    }
  }

  return cost[target] !== undefined ? cost[target] : 0;
}
