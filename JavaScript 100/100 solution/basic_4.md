**31. 자바스크립트 자료형 복잡도**

```
1)  arr[i]  // O(1)
2)  arr.push(5)  // O(1)
3)  arr.slice()  // O(n)
4)  arr.pop()  // O(1)
5)  arr.includes(5)  // O(n)
```

배열에서 읽기는 O(1), 인덱스를 통하여 바로 값을 읽을 수 있기 때문이다.  
배열의 마지막에 값을 삽입하는 것 또한 O(1)이다.  
slice는 배열을 복사하기에 빈 값을 만들고 원래 배열을 돌며 push작업을 실행한다.  
includes역시 처음 값부터 해당 하는 값이 나올 때까지 배열을 돌며 확인하기 때문에 O(n)이다.

**32. 단어 갯수 출력**

```javascript
function words(str) {
  const strArr = str.split(" ");
  return strArr.length;
}

console.log(words("자바스크립트 세계에 오신것을 환영합니다.")); // 4
```

**33. 거꾸로 출력하기**

```javascript
const data = prompt("숫자를 입력하세요.").split(" ").reverse();
let result = "";

for (let i = 0; i < data.length; i++) {
  result += data[i];
}

console.log(result);
```

**34. sort 구현하기**

```javascript
const data = prompt("키를 입력하세요.").split(" ");

function isSort(data) {
  for (let i = 1; i < data.length; i++) {
    if (data[i - 1] > data[i]) return "NO";
  }
  return "YES";
}

console.log(isSort(data));
```

다른 방법

```javascript
const data = prompt("키를 입력하세요.");

let sorted = "";

sorted = data
  .split(" ")
  .sort(function (a, b) {
    return a - b;
  })
  .join(" ");

if (data === sorted) {
  console.log("YES");
} else {
  console.log("NO");
}
```

**35. Factory 함수 사용**

```javascript
function one(n) {
  function two(value) {
    const sq = Math.pow(value, n);
    return sq;
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10)); // 100
console.log(b(10)); // 1000
console.log(c(10)); // 10000
```

**36. 구구단 출력하기**

```javascript
function timesTable(num) {
  let arr = "";
  for (let i = 1; i < 10; i++) {
    arr += num * i + " ";
  }
  return arr;
}

console.log(timesTable(2)); // 2 4 6 8 10 12 14 16 18
```

**37. 반장 선거**

```javascript
const data = prompt("이름을 입력하세요.").split(" ");

function ballotCounting(data) {
  let obj = {};
  for (let i = 0; i < data.length; i++) {
    if (obj[data[i]]) obj[data[i]] += 1;
    else obj[data[i]] = 1;
  }

  const winner = Object.keys(obj).reduce(function (prev, curr) {
    return obj[prev] > obj[curr] ? prev : curr;
  });

  console.log(`${winner}(이)기 총 ${obj[winner]}표로 반장이 되었습니다.`);
}

ballotCounting(data);
```

**38. 호준이의 아르바이트**

```javascript
const data = prompt("점수입력").split(" ");

function solution(data) {
  let score = new Set(data);
  let cutScore = Array.from(score).sort((a, b) => b - a)[2];
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] >= cutScore) {
      arr.push(data[i]);
    }
  }
  console.log(arr.length);
}

solution(data.map(Number));
```

다른 풀이

```javascript
const scores = prompt("점수입력")
  .split(" ")
  .map(function (n) {
    return parseInt(n, 10);
  });

scores.sort((a, b) => {
  return a - b;
});

let count = 0;
let arr = [];

while (arr.length < 3) {
  let n = scores.pop();
  if (!arr.includes(n)) {
    arr.push(n);
  }
  count += 1;
}

console.log(count);
```

**39. 오타 수정하기**

```javascript
function changeChar(input, search, replace) {
  console.log(input.replace(search, replace));
}

changeChar("querty", "q", "e"); // euerty
changeChar("hqllo my namq is hyqwon", "q", "e"); // hello my namq is hyqwon
```

**40. 놀이동산에 가자**

```javascript
let total = 0;
let count = 0;
const limit = prompt("제한 무게 입력");
const n = prompt("인원 수 입력");

for (let i = 0; i < n; i++) {
  total += parseInt(prompt("무게를 입력해주세요"), 10);
  if (total <= limit) count += 1;
}

console.log(count);
```
