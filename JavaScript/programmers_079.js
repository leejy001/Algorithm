// LV.2 위장

function solution(clothes) {
  var answer = 1;
  let section = {};
  for (let i = 0; i < clothes.length; i++) {
    if (!section[clothes[i][1]]) section[clothes[i][1]] = 1;
    else section[clothes[i][1]] += 1;
  }

  for (let value of Object.values(section)) {
    answer *= value + 1;
  }
  return answer - 1;
}
