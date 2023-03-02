// LV.1 삼총사 (추가)

function solution(number) {
  var answer = 0;
  let sum = 0;
  const dfs = (idx, cnt) => {
    if (cnt === 3) {
      if (sum === 0) answer++;
    }
    for (let i = idx; i < number.length; i++) {
      sum += number[i];
      ++cnt;
      dfs(i + 1, cnt);
      --cnt;
      sum -= number[i];
    }
  };
  dfs(0, 0);
  return answer;
}
