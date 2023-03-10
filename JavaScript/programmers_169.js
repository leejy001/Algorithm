// LV.2 할인 행사

function solution(want, number, discount) {
  let answer = 0;

  const isMatch = (arr) => {
    let map = new Map();
    arr.forEach((item) => map.set(item, (map.get(item) || 0) + 1));
    for (let i = 0; i < want.length; i++) {
      if (map.get(want[i]) !== number[i]) return false;
    }
    return true;
  };

  for (let j = 0; j <= discount.length - 10; j++) {
    let arr = discount.slice(j, j + 10);
    if (isMatch(arr)) answer++;
  }
  return answer;
}
