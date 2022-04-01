// LV.2 메뉴 리뉴얼

function getComb(arr, num) {
  const result = [];
  if (num === 1) return arr.map((item) => [item]);
  arr.forEach((fixed, index, arr) => {
    const rest = arr.slice(index + 1);
    const comb = getComb(rest, num - 1);
    const answer = comb.map((item) => [fixed, ...item]);
    result.push(...answer);
  });
  return result;
}

function solution(orders, course) {
  var answer = [];
  for (let cnt of course) {
    let map = new Map();
    for (let order of orders) {
      for (let menu of getComb(order.split("").sort(), cnt)) {
        if (!map.has(menu.join(""))) map.set(menu.join(""), 1);
        else {
          let c = map.get(menu.join(""));
          map.set(menu.join(""), c + 1);
        }
      }
    }
    if (map.size !== 0) {
      const max = [...map.entries()].reduce((a, b) => (a[1] > b[1] ? a : b))[1];
      if (max > 1) {
        let result = Array.from(map).filter((item) => item[1] === max);
        answer.push(...result.map((item) => item[0]));
      }
    }
  }
  return answer.sort();
}
