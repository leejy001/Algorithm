### 세 수 중 최솟값

input : 6 5 11, output : 5

```javascript
function solution(A, B, C) {
  return A < B ? (A < C ? A : C) : B < C ? B : C;
}

console.log(solution(6, 5, 11)); // 5
```

### 삼각형 판별하기

input : 6 7 11, output : YES
input : 13 33 17, output : NO

```javascript
function solution(A, B, C) {
  let total = A + B + C;
  let max = A > B ? (A > C ? A : C) : B > C ? B : C;
  return total - max > max ? "YES" : "NO";
}

console.log(solution(6, 7, 11)); // YES
console.log(solution(13, 33, 17)); // NO
```

### 연필 개수

input : 25, output : 3
input : 178, output : 15

```javascript
function solution(person) {
  return Math.ceil(person / 12);
}

console.log(solution(25)); // 3
console.log(solution(178)); // 15
```

### 1부터 N까지 합 출력하기

input : 6, output : 21
input : 10, output : 55

```javascript
function solution(num) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
}

console.log(solution(6)); // 21
console.log(solution(10)); // 55
```

### 최솟값 구하기

input : 5 3 7 11 2 15 17, output : 2

```javascript
function solution(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

console.log(solution([5, 3, 7, 11, 2, 15, 17])); // 2
```

```javascript
function solution(arr) {
  return Math.min(...arr);
}

console.log(solution([5, 3, 7, 11, 2, 15, 17])); // 2
```

### 홀수

```
input : 12 77 38 41 53 92 85
output : 256
		 41
```

```javascript
function reduce(arr) {
  let answer = [];
  return arr.reduce((prev, curValue) => {
    if (curValue % 2 !== 0) answer.push(curValue);
    return answer;
  }, 0);
}

function solution(arr) {
  let odd = reduce(arr);
  let sum = odd.reduce((acc, cur) => {
    return acc + cur;
  });
  console.log(sum); // 256
  console.log(Math.min(...odd)); // 41
}

solution([12, 77, 38, 41, 53, 92, 85]);
```

### 10부제

```
input
3
25 23 11 47 53 17 33
output
3

input
0
12 20 54 30 87 91 30
output
3
```

```javascript
function solution(day, arr) {
  let answer = 0;
  for (let num of arr) {
    if (num % 10 === day) answer++;
  }
  return answer;
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33])); // 3
```

### 일곱 난쟁이

input : 20 7 23 19 10 15 25 8 13, output : 20 7 23 19 10 8 13

```javascript
function solution(arr) {
  let total = arr.reduce((a, b) => a + b);
  let diff = total - 100;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === diff) {
        arr.splice(i, 1);
        arr.splice(j, 1);
        return arr;
      }
    }
  }
}

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13])); // [20, 7, 23, 19, 10, 8, 13]
```

### A를 #으로

input : BANANA, output : B#N#N#

```javascript
function solution(str) {
  const arr = [];
  str.split("").forEach((ch) => {
    if (ch === "A") {
      arr.push("#");
    } else {
      arr.push(ch);
    }
  });
  return arr.join("");
}

console.log(solution("BANANA")); // B#N#N#
```

```javascript
function solution(str) {
  let answer = str;
  answer = answer.replace(/A/g, "#");
  return answer;
}

console.log(solution("BANANA"));
```

### 문자 찾기

```
input : COMPUTERPROGRAMMING
				R
output : 3
```

```javascript
function solution(str, char) {
  return str.split(char).length - 1;
}

console.log(solution("COMPUTERPROGRAMMING", "R")); // 3
```

### 대문자 찾기

input : KoreaTimeGood, output : 3

```javascript
function solution(str) {
  let cnt = 0;
  for (let char of str) {
    if (char === char.toUpperCase()) cnt++;
  }
  return cnt;
}

console.log(solution("KoreaTimeGood")); // 3
```

### 대문자로 통일

input : ItisTimeToStudy, output : ITISTIMETOSTUDY

```javascript
function solution(str) {
  return str.toUpperCase();
}

console.log(solution("ItisTimeToStudy")); // ITISTIMETOSTUDY
```

### 대소문자 변환

input : ItisTimeToStudy, output : iTIStIMEtOsTUDY
input : StuDY, output : sTUdy

```javascript
function solution(str) {
  let answer = "";
  for (let char of str) {
    if (char === char.toUpperCase()) {
      answer += char.toLowerCase();
    } else {
      answer += char.toUpperCase();
    }
  }
  return answer;
}

console.log(solution("ItisTimeToStudy")); // iTIStIMEtOsTUDY
console.log(solution("StuDY")); // sTUdy
```

### 가장 긴 문자열

input : ["teacher", "time", "student", "beautiful", "good"], output : beautiful

```javascript
function solution(arr) {
  let max = "";
  for (let str of arr) {
    if (max.length < str.length) max = str;
  }
  return max;
}

console.log(solution(["teacher", "time", "student", "beautiful", "good"])); // beautiful
```

### 가운데 문자 출력

input : study, output : u
input : good, output : oo

```javascript
function solution(str) {
  let mid = Math.floor(str.length / 2);
  return str.length % 2 === 0 ? str.substr(mid - 1, 2) : str.substr(mid, 1);
}

console.log(solution("good")); // oo
console.log(solution("study")); // u
```

```javascript
function solution(str) {
  let mid = Math.floor(str.length / 2);
  return str.length % 2 === 0
    ? str.substring(mid - 1, mid + 1)
    : str.substring(mid, mid + 1);
}

console.log(solution("good")); // oo
console.log(solution("study")); // u
```

### 중복문자제거

input : ksekkset, output : kset

```javascript
function solution(str) {
  let answer = "";
  for (let char of str) {
    if (!answer.includes(char)) answer += char;
  }
  return answer;
}

console.log(solution("ksekkset")); // kset
```

```javascript
function solution(str) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (i === str.indexOf(str[i])) answer += str[i];
  }
  return answer;
}

console.log(solution("ksekkset")); // kset
```

### 중복단어제거

input : ["good", "time", "good", "time", "student"]
output : ["good", "time", "student"]

```javascript
function solution(arr) {
  let set = [];
  for (let str of arr) {
    if (!set.includes(str)) set.push(str);
  }
  return set;
}

console.log(solution(["good", "time", "good", "time", "student"])); // ["good", "time", "student"]
```

```javascript
function solution(arr) {
  return arr.filter(function (value, idx) {
    if (arr.indexOf(value) === idx) return value;
  });
}

console.log(solution(["good", "time", "good", "time", "student"])); // ["good", "time", "student"]
```
