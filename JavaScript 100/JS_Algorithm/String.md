### 회문 문자열

input : gooG, output : YES
input : banana, output : NO

```javascript
function solution(str) {
  str = str.toLowerCase();
  let n = str.length;
  let mid = Math.ceil(n / 2) - 1;
  for (let i = 0; i <= mid; i++) {
    if (str[i] !== str[n - i - 1]) return "NO";
  }
  return "YES";
}

console.log(solution("gooG")); // YES
console.log(solution("bEdgEgdEb")); // YES
console.log(solution("banana")); // NO
```

### 유효한 팰린드롬

input : found7, time: study; Yduts; emit, 7Dnuof
output : YES

```javascript
function solution(str) {
  str = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
  let n = str.length;
  let mid = Math.ceil(n / 2) - 1;
  for (let i = 0; i <= mid; i++) {
    if (str[i] !== str[n - i - 1]) return "NO";
  }
  return "YES";
}

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof")); // YES
```

### 숫자만 추출

input : g0en2T0s8eSoft
output : 208

```javascript
function solution(str) {
  return str.replace(/[^0-9]/g, "").replace(/(^0+)/, "");
}

console.log(solution("g0en2T0s8eSoft")); // 208
```

### 가장 짧은 문자거리

input : teachermode e
output : 1 0 1 2 1 0 1 2 2 1 0

```javascript
function solution(str, char) {
  let answer = [];
  let len = str.length;
  let p = 0;
  for (let i = 0; i < len; i++) {
    if (str[i] === char) {
      p = 0;
      answer.push(p);
    } else {
      answer.push(++p);
    }
  }

  for (let i = len - 1; i >= 0; i--) {
    if (str[i] === char) {
      p = 0;
    } else {
      answer[i] = Math.min(answer[i], ++p);
    }
  }
}

console.log(solution("teachermode", "e")); // 1 0 1 2 1 0 1 2 2 1 0
```

### 문자열 압축

input : KKHSSSSSSSE, output : K2HS7E

```javascript
function solution(str) {
  let answer = "";
  let cnt = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      cnt++;
    } else if (str[i] !== str[i + 1] && cnt > 1) {
      answer += str[i] + cnt;
      cnt = 1;
    } else {
      answer += str[i];
    }
  }

  return answer.replace("1", "").replace("1", "");
}

console.log(solution("KKHSSSSSSSE")); // K2HS7E
```
