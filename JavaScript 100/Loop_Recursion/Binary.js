// 2진수 변환

// Math.ceil() : 소수점 올림
// Math.floor() : 소수점 버림
// Math.round() : 소수점 반올림

// 반복문
let result = "";
let x = 11;
while (true) {
  if (x % 2 === 0) {
    result += "0";
  } else {
    result += "1";
  }
  x = Math.floor(x / 2);

  if (x === 1 || x === 0) {
    result += String(x);
    break;
  }
}

console.log(result.split("").reverse().join(""));

// 재귀
/*
  binary(11) => binary(5) (101) + String(1)
  binary(5)  => binary(2) (10)  + String(1)
  binary(2)  => binary(1) (1)   + String(0)
  binary(1)  => String(1)
*/
function binary(num) {
  if (num === 1 || num === 0) {
    return String(num);
  }
  return binary(Math.floor(num / 2)) + String(num % 2);
}

console.log(binary(11));
