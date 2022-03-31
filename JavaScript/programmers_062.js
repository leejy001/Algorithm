// LV.2 짝지어 제거하기

function solution(s) {
  var answer = -1;
  var arr = s.split("");
  var stack = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (stack.length === 0) {
      stack.push(arr[i]);
    } else {
      var comp = stack.pop();
      if (comp !== arr[i]) {
        stack.push(comp);
        stack.push(arr[i]);
      }
    }
  }
  if (stack.length === 0) answer = 1;
  else answer = 0;
  return answer;
}
