// LV.2 괄호

function solution(s) {
  let answer = 0;
  let left = ["[", "{", "("];
  let right = ["]", "}", ")"];
  let arr = s.split("");
  for (let i in arr) {
    let end = arr.pop();
    arr.unshift(end);
    let st = [];
    for (let i in arr) {
      if (left.includes(arr[i])) st.push(arr[i]);
      else if (st.length > 0 && right.includes(arr[i])) {
        if (left.indexOf(st[st.length - 1]) === right.indexOf(arr[i])) st.pop();
        else {
          st.push(arr[i]);
          break;
        }
      } else {
        st.push(arr[i]);
        break;
      }
    }
    if (st.length === 0) answer += 1;
  }
  return answer;
}
