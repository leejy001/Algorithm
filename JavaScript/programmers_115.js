// LV.2 JadenCase 문자열 만들기

function solution(s) {
  let str = s.toLowerCase().split("");
  if (isNaN(str[0])) str[0] = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " " && isNaN(str[i])) {
      str[i] = str[i].toUpperCase();
    }
  }
  return str.join("");
}
