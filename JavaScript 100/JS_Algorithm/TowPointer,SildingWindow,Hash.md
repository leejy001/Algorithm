### 두 배열 합치기

input : [1,3,5], [2,3,6,7,9]
output : [1, 2, 3, 3, 5, 6, 7, 9]

```jsx
function solution(A, B) {
  return [...A, ...B].sort((a, b) => a - b);
}

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));
```

```jsx
function solution(A, B) {
  let answer = [];
  let n = A.length;
  let m = B.length;
  let a = 0;
  let b = 0;
  while (a < n && b < m) {
    if (A[a] <= B[b]) answer.push(A[a++]);
    else answer.push(B[b++]);
  }
  while (a < n) answer.push(A[a++]);
  while (b < m) answer.push(B[b++]);
  return answer;
}

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));
```

### 공통원소 구하기

input : [1,3,9,5,2], [3,2,5,7,8]
output : [2,3,5]

```jsx
function solution(A, B) {
  let answer = [];
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  let n = A.length;
  let m = B.length;
  let a = 0;
  let b = 0;
  while (a < n && b < m) {
    if (A[a] === B[b]) {
      answer.push(A[a++]);
      b++;
    } else if (A[a] < B[b]) {
      a++;
    } else {
      b++;
    }
  }
  return answer;
}

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
```

### 연속 부분수열 1

input : 6, [1,2,1,3,1,1,1,2]
output : 3

```jsx
function solution(m, arr) {
  let answer = 0;
  let left = 0;
  let right = 1;
  let sum = arr[left] + arr[right];
  while (left !== right) {
    if (sum === m) answer++;
    if (sum < m) {
      sum += arr[++right];
    } else {
      sum -= arr[left++];
    }
  }
  return answer;
}

console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));
```

### 연속 부분수열 2

input : 5, [1,3,1,2,3]
output : 10

```jsx
function solution(m, arr) {
  let answer = 0,
    sum = 0,
    lt = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }
  return answer;
}

console.log(solution(5, [1, 3, 1, 2, 3]));
```

### 최대 매출

input : 3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]
output : 56

```jsx
function solution(k, arr) {
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}

console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
```

### 학급 회장(해쉬)

input : BACBACCACCBDEDE, output : C

```jsx
function solution(str) {
  let hash = {};
  str.split("").map((item) => {
    if (hash[item]) {
      hash[item] += 1;
    } else {
      hash[item] = 1;
    }
  });

  let max = 0;
  let answer = "";
  for (let [key, value] of Object.entries(hash)) {
    if (max < value) {
      max = value;
      answer = key;
    }
  }
  return answer;
}

console.log(solution("BACBACCACCBDEDE"));
```

```jsx
function solution(str) {
  let answer = "";
  let sH = new Map();
  for (let char of str) {
    if (sH.has(char)) sH.set(char, sH.get(char) + 1);
    else sH.set(char, 1);
  }
  let max = 0;
  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

console.log(solution("BACBACCACCBDEDE"));
```

### 아나그램(해쉬)

input : AbaAeCe, AbaAeCe
output : YES

input : abaCC, Caaab
output : NO

```jsx
function solution(A, B) {
  let answer = "YES";
  let sH = new Map();
  for (let char of A) {
    if (sH.has(char)) sH.set(char, sH.get(char) + 1);
    else sH.set(char, 1);
  }

  for (let char of B) {
    if (!sH.has(char) || sH.get(char) === 0) return "NO";
    sH.set(char, sH.get(char) - 1);
  }

  return answer;
}

console.log(solution("AbaAeCe", "baeeACA"));
console.log(solution("abaCC", "Caaab"));
```

### 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)

input : bacaAacba, abc
output : 3 [{bac}, {acb}, {cba}]

```jsx
function compare(A, B) {
  if (A.size !== B.size) return false;
  for (let [key, val] of A) {
    if (!B.has(key) || B.get(key) !== val) return false;
  }
  return true;
}

function solution(A, B) {
  let answer = 0;
  let aH = new Map();
  let bH = new Map();
  for (let b of B) {
    if (bH.has(b)) bH.set(b, bH.get(b) + 1);
    else bH.set(b, 1);
  }

  let len = B.length - 1;
  for (let i = 0; i < len; i++) {
    if (aH.has(A[i])) aH.set(A[i], aH.get(A[i]) + 1);
    else aH.set(A[i], 1);
  }

  let l = 0;
  for (let r = len; r < A.length; r++) {
    if (aH.has(A[r])) aH.set(A[r], aH.get(A[r]) + 1);
    else aH.set(A[r], 1);
    if (compare(aH, bH)) answer++;
    aH.set(A[l], aH.get(A[l]) - 1);
    if (aH.get(A[l]) === 0) aH.delete(A[l]);
    l++;
  }
  return answer;
}

console.log(solution("bacaAacba", "abc"));
```
