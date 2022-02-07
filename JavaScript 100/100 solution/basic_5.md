**41. 소수 판별**

```javascript
function isPrime(num) {
  if (num === 2) return true;

  for (let i = 2; i <= parseInt(Math.sqrt(num), 10); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(15)); // true
console.log(isPrime(17)); // false
```

**42. 요일 구하기**

```javascript
function dayOfTheWeek(month, day) {
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const days = new Date("2020-" + month + "-" + day);
  return week[days.getDay()];
}

console.log(dayOfTheWeek(5, 24)); // SUN
```

**43. 진수 변환**

```javascript
function solution(a, n) {
  var tmp = a;
  var arr = [];

  var digit = "0123456789ABCDEF";

  while (tmp > 0) {
    arr.unshift(digit[tmp % n]);
    tmp = parseInt(tmp / n, 10);
  }
  return arr.join("");
}

console.log(solution(10, 2)); // 1010
console.log(solution(10, 8)); // 12
console.log(solution(10, 16)); // A

console.log(solution(100, 2)); // 1100100
console.log(solution(100, 8)); // 144
console.log(solution(100, 16)); // 64
```

**44. 각 자리수의 합**

```javascript
function sumNum(num) {
  let sum = 0;
  while (num) {
    sum += num % 10;
    num = parseInt(num / 10, 10);
  }
  return sum;
}

console.log(sumNum(18234)); // 18
console.log(sumNum(3849)); // 24
```

**45. 현재 연도 출력하기**

```javascript
const time = new Date().getTime();
const year = parseInt(time / (1000 * 60 * 60 * 24 * 365), 10) + 1970;
console.log(year); // 2022
```

**46. 각 자리수 합 2**

```javascript
let arr = [];
for (let i = 1; i <= 20; i++) {
  arr.push(i);
}

let sum = 0;

arr.forEach((num) => {
  while (num !== 0) {
    sum += num % 10;
    num = parseInt(num / 2, 10);
  }
});

console.log(sum); // 248
```

**47. set 응용**

```javascript
const fruits = {
  apple: "11011",
  pitch: "11012",
  pineapple: "11013",
  apple: "11011",
  banana: "11014",
  orange: "11015",
  apple: "11011",
};

let result = new Set();
for (let key in fruits) {
  result.add(fruits[key]);
}

console.log(result.size); // 5
```

**48. 대소문자 바꿔서 출력**

```javascript
function change(str) {
  let changeStr = "";
  for (let i in str) {
    if (str[i] === str[i].toUpperCase()) {
      changeStr += str[i].toLowerCase();
    } else if (str[i] === str[i].toLowerCase()) {
      changeStr += str[i].toUpperCase();
    }
  }
  return changeStr;
}

console.log(change("AAABBBcccddd")); // aaabbbCCCDDD;
```

**49. 배열 최대값 구하기**

```javascript
const data = prompt("숫자를 입력하세요.").split(" ");

console.log(Math.max.apply(null, data));
```

```javascript
const data = prompt("숫자를 입력하세요.").split(" ").map(Number);

data.sort((a, b) => {
  return b - a;
});

console.log(data[0]);
```

**50. 버블 정렬 구현**

```javascript
function bubble(arr) {
  let result = arr.slice();

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i; j++) {
      if (result[j] > result[j + 1]) {
        let tmp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = tmp;
      }
    }
  }
  return result;
}

const items = prompt("입력해주세요.")
  .split(" ")
  .map((n) => {
    return parseInt(n, 10);
  });

console.log(bubble(items));
```
