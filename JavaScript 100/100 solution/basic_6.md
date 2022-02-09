**51. merge sort**

input: 10 11 9 2 3 6 5 4  
output: 2 3 4 5 6 9 10 11

```javascript
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

const array = prompt("배열을 입력하세요")
  .split(" ")
  .map((n) => parseInt(n, 10));

console.log(mergeSort(array));
```

**52. quick sort**

input: 10 11 9 2 3 6 5 4  
output: 2 3 4 5 6 9 10 11

```javascript
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

const array = prompt("배열을 입력하세요")
  .split(" ")
  .map((n) => parseInt(n, 10));

console.log(quickSort(array));
```

**53. 괄호 확인**

```javascript
function bracket(str) {
  let arr = [];
  let map = { "(": ")", "[": "]", "{": "}" };

  for (let i in str) {
    if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
      arr.push(str[i]);
    } else if (str[i] === ")" || str[i] === "]" || str[i] === "}") {
      if (str[i] !== map[arr.pop()]) return "NO";
    }
  }
  if (arr.length === 0) {
    return "YES";
  } else if (arr.length !== 0) {
    return "No";
  }
}

console.log(bracket("((){})()")); // YES
console.log(bracket("[][][({[]})")); // NO
```

**54. 연속되는 수**

input: 1 2 3 4 5, output: YES  
input: 1 2 5 4 3, output: YES  
input: 1 2 6 3 4, output: NO

```javascript
function consecutive(arr) {
  arr.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) return "NO";
  }
  return "YES";
}

const array = prompt("숫자를 입력하세요")
  .split(" ")
  .map((n) => parseInt(n, 10));

console.log(consecutive(array));
```

**55. 하노이의 탑**

```javascript
const route = [];

function hanoi(num, start, end, temp) {
  //원판이 한 개일 때에는 바로 옮긴다.
  if (num === 1) {
    route.push([start, end]);
    return NaN;
  }

  //원반이 n-1개를 경유기둥으로 옮기고
  hanoi(num - 1, start, temp, end);
  //가장 큰 원반은 목표기둥으로
  route.push([start, end]);
  //경유기둥과 시작기둥을 바꾼다.
  hanoi(num - 1, temp, end, start);
}

hanoi(3, "A", "B", "C");
console.log(route);

/*
A -> B
A -> -> C
B -> C
A -> B
A <- <- C
B <- C
A -> B
*/
```

**56. 객체의 함수 응용**

```javascript
const nationWidth = {
  Korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

function closeWidth(nation) {
  const width = nationWidth[nation];
  delete nationWidth[nation];
  let comp = width;
  let country = nation;
  for (let [key, value] of Object.entries(nationWidth)) {
    if (comp > Math.abs(width - value)) {
      comp = Math.abs(width - value);
      country = key;
    }
  }

  return `${country} ${comp}`;
}

console.log(closeWidth("Korea")); // England 22023
```

**57. 1의 개수**

1. 내가 푼 답

```javascript
let str = "";
for (let i = 0; i <= 1000; i++) {
  str += i;
}

console.log(str.split("1").length - 1); // 301
```

2. 객체를 이용하여 1부터 9까지 모든 수의 갯수를 계산하기

```javascript
const obj = {};

for (let i = 0; i <= 1000; i++) {
  let tmp = i;
  while (tmp > 0) {
    let num = tmp % 10;
    if (obj[num]) {
      obj[num]++;
    } else {
      obj[num] = 1;
    }
    tmp = parseInt(tmp / 10, 10);
  }
}

console.log(obj[1]); // 301
```

3. 정규 표현식 사용

```javascript
let s = "";
for (let i = 0; i <= 1000; i++) {
  s += i;
}
console.log(s.match(/1/g).length); // 301
```

4. for in 사용

```javascript
let s = "";
for (let i = 0; i <= 1000; i++) {
  s += i;
}
let count = 0;
for (let j in s) {
  if (s[j] == 1) {
    count++;
  }
}
console.log(count); // 301
```

5. for of 사용

```javascript
let s = "";
for (let i = 0; i <= 1000; i++) {
  s += i;
}
let count = 0;
for (let j of s) {
  if (j == 1) {
    count++;
  }
}
console.log(count);
```

**57. , 찍기**

1. 내장 함수 사용

```javascript
const money = 123456789;
console.log(money.toLocaleString()); // 123,456,789
```

2. 재귀 함수 사용

```javascript
const money = 123456789;

function comma(money) {
  if (money.length <= 3) {
    return money;
  } else {
    return (
      comma(money.slice(0, money.length - 3)) +
      "," +
      money.slice(money.length - 3)
    );
  }
}

console.log(comma(String(money))); // 123,456,789
```

**59. 빈칸채우기**

```javascript
let str = "hi";

const n = 25 + parseInt(str.length / 2, 10);

const left = str.padStart(n, "=");
const right = left.padEnd(50, "=");
console.log(right); // ====================javascript====================
```

**60. 번호 매기기**

```javascript
const students = [
  "aaa",
  "bbb",
  "ccc",
  "ddd",
  "eee",
  "fff",
  "ggg",
  "hhh",
  "iii",
  "jjj",
  "kkk",
  "lll",
];

students.sort();
for (let i in students) {
  console.log(`번호: ${parseInt(i, 10) + 1}, 이름: ${students[i]}`);
}

/*
번호: 1, 이름: aaa 
번호: 2, 이름: bbb 
번호: 3, 이름: ccc 
번호: 4, 이름: ddd 
번호: 5, 이름: eee 
번호: 6, 이름: fff 
번호: 7, 이름: ggg 
번호: 8, 이름: hhh 
번호: 9, 이름: iii 
번호: 10, 이름: jjj 
번호: 11, 이름: kkk 
번호: 12, 이름: lll 
*/
```
