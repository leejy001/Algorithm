**61. 문자열 압축하기**

```javascript
function zip(str) {
  let count = 0;
  let result = "";
  let char = str[0];
  for (let i in str) {
    if (char !== str[i]) {
      result += char + count;
      char = str[i];
      count = 0;
    }
    if (char === str[i]) count += 1;
  }
  return (result += char + count);
}

console.log(zip("aaabbbcaaaddddcccccdfffff")); // a3b3c1a3d4c5d1f5
console.log(zip("aaabbbcaaddddd")); // a3b3c1a2d5
```

**62. 20220212 출력하기**

1. 코드 내에 숫자가 없어야 한다. - 예) console.log(20190923)
2. 파일 이름이나 경로를 사용해서는 안된다.
3. 시간, 날짜 함수를 사용해서는 안된다.
4. 에러 번호 출력을 이용해서는 안된다.
5. input을 이용해서는 안된다.

```javascript
const year_s = "aaccddffghh";

console.log(
  `${year_s.match(/a/g).length}${Number(year_s.match(/b/g))}${
    year_s.match(/c/g).length
  }${year_s.match(/d/g).length}${Number(year_s.match(/e/g))}${
    year_s.match(/f/g).length
  }${year_s.match(/g/g).length}${year_s.match(/h/g).length}`
); // 20220212
```

**63. 문자열 앞글자 따기**

```javascript
function zip(str) {
  let result = "";
  const strArr = str.split(" ");
  for (let i in strArr) {
    result += strArr[i][0];
  }
  return result;
}

console.log(zip("복잡한 세상 편하게 살자")); // 복세편살
console.log(zip("안 물어봤음, 안 궁금함")); // 안물안궁
```

**64. 이상한 엘리베이터**

```javascript
function elevator(limit) {
  let count = 0;
  while (true) {
    if (limit % 7 === 0) {
      count += parseInt(limit / 7, 10);
      return count;
    }
    limit -= 3;
    count += 1;
    if (limit < 0) return -1;
  }
}

console.log(elevator(5)); // -1
console.log(elevator(17)); // 3
console.log(elevator(32)); // 8
```

**65. 변형된 리스트**

```javascript
function twoArray(arr1, arr2) {
  const result = [];
  for (let i in arr1) {
    if (i % 2 === 0) result.push([arr1[i], arr2[i]]);
    else result.push([arr2[i], arr1[i]]);
  }
  return result;
}
console.log(twoArray([1, 2, 3, 4], ["a", "b", "c", "d"])); //  [[1, 'a'], ['b', 2], [3, 'c'], ['d', 4]]
```

```javascript
function twoArray(arr1, arr2) {
  const result = [];
  arr1.forEach(function (val, idx) {
    if (idx % 2 === 0) result.push([val, arr2[idx]]);
    else result.push([arr2[idx], val]);
  });
  return result;
}
console.log(twoArray([1, 2, 3, 4], ["a", "b", "c", "d"])); //  [[1, 'a'], ['b', 2], [3, 'c'], ['d', 4]]
```

**66. 블럭탑쌓기**

```javascript
function solution(bricks, rule) {
  let result = [];
  for (let brick of bricks) {
    result.push(check(brick, rule));
  }
  return result;
}

function check(brick, rule) {
  let r = rule.indexOf(rule[0]);

  for (let ch of brick) {
    if (rule.includes(ch)) {
      if (r > rule.indexOf(ch)) return "불가능"; // 현재 문자 인덱스보다 더 앞의 문자 인덱스가 나온다면
      r = rule.indexOf(ch);
    }
  }
  return "가능";
}

console.log(solution(["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"], "ABD")); // ["가능", "불가능", "가능", "가능", "가능"]
```

**67. 민규의 악수**

```javascript
function solution(num) {
  let people = 0;
  let total = 0;
  let temp = 0;
  while (true) {
    total = parseInt((people * (people - 1)) / 2, 10);
    if (num < total) break;
    temp = total;
    people += 1;
  }
  return [parseInt(num - temp, 10), people];
}

console.log(solution(59)); // [4, 12]
```

**68. 버스 시간표**

```javascript
function busTime(times, cur) {
  let result = [];
  cur = cur.split(":").map((n) => parseInt(n, 10));
  cur = cur[0] * 60 + cur[1];
  for (let time of times) {
    let bus = time.split(":").map((n) => parseInt(n, 10));
    bus = bus[0] * 60 + bus[1];
    if (bus < cur) {
      result.push("지나갔습니다");
    } else {
      let hour = parseInt((bus - cur) / 60, 10);
      let minute = (bus - cur) % 60;
      result.push(
        String(hour).padStart(2, 0) +
          "시간 " +
          String(minute).padStart(2, 0) +
          "분"
      );
    }
  }
  return result;
}

console.log(busTime(["12:30", "13:20", "14:13"], "12:40")); // ["지나갔습니다", "00시간 40분", "01시간 33분"]
```

**69. 골드바흐의 추측**

```javascript
let prime = [];
for (let i = 2; i <= 10000; i++) {
  prime[i] = i;
}

for (let i = 2; i <= 10000; i++) {
  if (prime[i] === 1) continue;
  for (let j = i + i; j <= 10000; j += i) {
    prime[j] = 0;
  }
}
prime = prime.filter((n) => n !== 0);

function Goldbach(input, prime) {
  let answer = [];
  for (let n of prime) {
    if (prime.includes(input - n) && n <= input - n) {
      answer.push([n, input - n]);
    }
  }

  let minus = answer.map((e) => e[1] - e[0]);

  console.log(answer); // [[3, 97], [11, 89], [17, 83], [29, 71], [41, 59], [47, 53]]
  console.log(minus); // [94, 78, 66, 42, 18, 6]
  console.log(answer[minus.indexOf(Math.min.apply(null, minus))]); // [47, 53]
  console.log(answer[minus.indexOf(Math.max.apply(null, minus))]); // [3, 97]
}

Goldbach(100, prime);
```

**70. 행렬 곱하기**

```javascript
function solution(a, b) {
  let result = [];
  for (let i in a) {
    const row = a[i];
    result.push([]);
    for (let j in b) {
      let sum = 0;
      for (let k in b[j]) {
        sum += row[j] * b[j][k];
      }
      result[i].push(sum);
    }
  }
  return result;
}

let a = [
  [1, 2],
  [2, 4],
];

let b = [
  [1, 0],
  [0, 3],
];

console.log(solution(a, b)); // [[1,6],[2,12]]
```
