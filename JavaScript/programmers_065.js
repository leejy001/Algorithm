//LV.2 괄호 변환

function split(str) {
  let cnt = 0;
  let idx = 0;
  for (let i in str) {
    if (str[i] === "(") cnt += 1;
    else cnt -= 1;
    if (cnt === 0) {
      idx = i;
      break;
    }
  }
  return [str.slice(0, ++idx), str.slice(idx)];
}

function check(str) {
  let u = [];
  for (let i in str) {
    if (str[i] === "(") u.push(str[i]);
    else if (u.length > 0 && str[i] === ")") u.pop();
    else return false;
  }
  return true;
}

function convert(str) {
  let temp = "";
  for (let i in str) {
    if (str[i] === "(") temp += ")";
    else temp += "(";
  }
  return temp;
}

function solution(p) {
  var answer = "";

  if (p === "") return "";
  let [u, v] = split(p);
  if (check(u)) {
    answer += u;
    answer += solution(v);
  } else if (!check(u)) {
    answer += "(" + solution(v) + ")" + convert(u.slice(1, u.length - 1));
  }
  return answer;
}
