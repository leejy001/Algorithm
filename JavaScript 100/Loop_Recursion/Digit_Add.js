// 각 자릿수의 합

// 반복문
let result = 0;
let x = "123123";

while (true) {
  if (x.length === 1) {
    result += parseInt(x, 10);
    break;
  }
  let s = x.split("");
  result += parseInt(s.pop(), 10);
  x = s.join("");
}

console.log(result);

// 재귀
/*
addDigit("123123") 3 + addDigit("12312") => 3+2+1+3+2+1
addDigit("12312")  2 + addDigit("1231") => 2+1+3+2+1
addDigit("1231")   1 + addDigit("123") => 1+3+2+1
addDigit("123")    3 + addDigit("12") => 3+2+1
addDigit("12")     2 + addDigit("1") => 2+1
addDigit("1")      1
*/
function addDigit(str) {
  if (str.length === 1) {
    return parseInt(str, 10);
  }
  return (
    parseInt(str[str.length - 1], 10) + addDigit(str.slice(0, str.length - 1))
  );
}

console.log(addDigit("123123"));
