### 재귀함수와 스택 프레임

input: 3, output: 1 2 3

```jsx
function solution(n) {
  function DFS(L) {
    if (L === 0) return;
    else {
      DFS(L - 1);
      console.log(L);
    }
  }
  DFS(n);
}

console.log(solution(3));
```

### 이진수 출력

input : 11, output : 1011

```jsx
function solution(n) {
  let answer = "";
  function DFS(n) {
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2, 10));
      answer += String(n % 2);
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(11));
```

### 이진트리순회

전위순회 출력 : 1 2 4 5 3 6 7
중위순회 출력 : 4 2 5 1 6 3 7
후위순회 출력 : 4 5 2 6 7 3 1

```jsx
function solution(n) {
  let answer = "";
  function DFS(v) {
    if (v > 7) return;
    else {
      // 전위 순회
      answer += v + " ";
      DFS(v * 2);
      DFS(v * 2 + 1);

      // 중위 순회
      DFS(v * 2);
      answer += v + " ";
      DFS(v * 2 + 1);

      // 후위 순회
      DFS(v * 2);
      DFS(v * 2 + 1);
      answer += v + " ";
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(1));
```

### 바둑이 승차

input : 259, [81, 58, 42, 33, 61]  
output : 242

```jsx
function solution(limit, arr) {
  let answer = 0;
  let n = arr.length;
  function DFS(idx, sum) {
    if (sum > limit) return;
    if (idx === n) answer = Math.max(answer, sum);
    else {
      DFS(idx + 1, sum + arr[idx]);
      DFS(idx + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(solution(259, [81, 58, 42, 33, 61]));
```

### 최대점수 구하기

input : 20, [[10, 5],[25, 12],[15, 8],[6, 3],[7, 4]]  
output : 41

```jsx
function solution(limit, arr) {
  let answer = 0;
  let n = arr.length;
  function DFS(idx, sum, time) {
    if (time > limit) return;
    if (idx === n) answer = Math.max(answer, sum);
    else {
      DFS(idx + 1, sum + arr[idx][0], time + arr[idx][1]);
      DFS(idx + 1, sum, time);
    }
  }
  DFS(0, 0, 0);
  return answer;
}

console.log(
  solution(20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4]
  ])
);
```

### 중복순열

input : 3, 2  
output : [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3, 3]]

```jsx
function solution(num, limit) {
  let answer = [];
  let check = Array.from({ length: limit }, () => 0);
  function DFS(idx) {
    if (idx === limit) {
      answer.push(check.slice());
    } else {
      for (let i = 1; i <= num; i++) {
        check[idx] = i;
        DFS(idx + 1);
      }
    }
  }
  DFS(0);
  return answer;
}

console.log(solution(3, 2));
```

### 동전교환

input : [1, 2, 5], 15  
output : 3

```jsx
function solution(arr, limit) {
  let answer = Number.MAX_SAFE_INTEGER;
  let n = arr.length;
  function DFS(idx, sum) {
    if (sum > limit) return;
    if (idx >= answer) return;
    if (sum === limit) {
      answer = Math.min(answer, idx);
    } else {
      for (let i = 0; i < n; i++) {
        DFS(idx + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(solution([1, 2, 5], 15));
```

### 순열 구하기

input : 3, 2  
output : [[3, 6], [3, 9], [6, 3], [6, 9], [9, 3], [9, 6]]

```jsx
function solution(arr, limit) {
  let answer = [];
  let n = arr.length;
  let ch = Array.from({ length: n }, () => 0);
  let tmp = Array.from({ length: limit }, () => 0);
  function DFS(idx) {
    if (idx === limit) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[idx] = arr[i];
          DFS(idx + 1);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return answer;
}

console.log(solution([3, 6, 9], 2));
```

### 팩토리얼

input : 5, output : 120

```jsx
function solution(num) {
  function DFS(idx) {
    if (idx === 1) return 1;
    else return idx * DFS(idx - 1);
  }
  return DFS(num);
}

console.log(solution(5));
```

### 조합수(메모이제이션)

input : 5 3, output : 10  
input : 33 19, output : 818809200

```jsx
function solution(n, r) {
  let answer = [];
  let dy = Array.from(Array(35), () => Array(35).fill(0));

  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }
  answer = DFS(n, r);
  return answer;
}

console.log(solution(5, 3));
```

### 조합 구하기

input : 4, 2  
output : [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]

```jsx
function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L, sum) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = sum; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 1);
  return answer;
}

console.log(solution(4, 2));
```

### 수들의 조합

input : 3, [2, 4, 5, 8, 12], 6  
output : 2

```jsx
function solution(n, arr, m) {
  let answer = 0;
  let len = arr.length;
  function DFS(idx, start, sum) {
    if (idx === n) {
      if (sum % m === 0) answer++;
    } else {
      for (let i = start; i < len; i++) {
        DFS(idx + 1, i + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0, 0);
  return answer;
}

console.log(solution(3, [2, 4, 5, 8, 12], 6));
```
