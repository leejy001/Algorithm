// LV.2 최댓값과 최소값

function solution(s) {
  var answer = "";
  answer += Math.min.apply(null, s.split(" ")) + " ";
  answer += Math.max.apply(null, s.split(" "));
  return answer;
}
