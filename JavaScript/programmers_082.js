// LV.2 카펫

function comb(yellow) {
  let arr = [];
  for (let i = 1; i <= Math.floor(yellow ** 0.5); i++) {
    if (yellow % i === 0) arr.push([i, yellow / i]);
  }
  return arr;
}

function solution(brown, yellow) {
  var answer = [];
  let arr = comb(yellow);
  for (let i = 0; i < arr.length; i++) {
    if (brown === (arr[i][0] + 2 + arr[i][1]) * 2)
      answer = [arr[i][1] + 2, arr[i][0] + 2];
  }
  return answer;
}
