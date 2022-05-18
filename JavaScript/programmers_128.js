// LV.3 보석 쇼핑

function solution(gems) {
  let count = new Set(gems).size;
  let gemsMap = new Map();
  let answer = [];

  gems.forEach((gem, idx) => {
    gemsMap.delete(gem);
    gemsMap.set(gem, idx);
    if (gemsMap.size === count) {
      answer.push([gemsMap.values().next().value + 1, idx + 1]);
    }
  });

  answer.sort((a, b) => {
    if (a[1] - a[0] === b[1] - b[0]) {
      return a[1] - b[1];
    }

    return a[1] - a[0] - (b[1] - b[0]);
  });

  return answer[0];
}
