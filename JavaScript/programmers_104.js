// LV.2 올바른 괄호

function solution(s) {
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") cnt++;
    else if (cnt > 0 && s[i] === ")") cnt--;
    else return false;
  }
  return cnt === 0;
}
