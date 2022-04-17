// LV.2 [1차] 캐시

function solution(cacheSize, cities) {
  let answer = 0;
  let arr = [];
  let len = cities.length;
  if (cacheSize === 0) {
    return len * 5;
  }
  for (let i = 0; i < len; i++) {
    if (arr.includes(cities[i].toLowerCase())) {
      arr.splice(arr.indexOf(cities[i].toLowerCase()), 1);
      arr.push(cities[i].toLowerCase());
      answer += 1;
    } else {
      if (arr.length >= cacheSize) arr.shift();
      arr.push(cities[i].toLowerCase());
      answer += 5;
    }
  }
  return answer;
}
