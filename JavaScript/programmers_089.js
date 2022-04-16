// LV.2 영어 끝말잇기

function solution(n, words) {
  let answer = [];
  let cnt = 1;
  let map = {};
  map[words[0]] = 1;
  for (let i = 1; i < words.length; i++) {
    if (
      !map[words[i]] &&
      words[i - 1][words[i - 1].length - 1] === words[i][0]
    ) {
      cnt += 1;
      map[words[i]] = 1;
    } else {
      break;
    }
  }

  if (words.length === cnt) {
    answer.push(0);
    answer.push(0);
  } else {
    cnt += 1;
    if (cnt % n === 0) {
      answer.push(n);
    } else {
      answer.push(cnt % n);
    }
    answer.push(Math.ceil(cnt / n));
  }
  return answer;
}
