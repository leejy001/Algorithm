### 큰 수 출력하기

input : [7, 3, 9, 5, 6, 12], output : [7, 9, 6, 12]

```javascript
function solution(arr) {
  let answer = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

console.log(solution([7, 3, 9, 5, 6, 12])); // [7, 9, 6, 12]
```

### 보이는 학생

input : [130, 135, 148, 140, 145, 150, 150, 153], output : 5

```javascript
function solution(arr) {
  let answer = [arr[0]];
  let cur = 0;
  for (let i = 1; i < arr.length; i++) {
    if (cur < arr[i]) {
      answer.push(arr[i]);
      cur = arr[i];
    }
  }
  return answer.length;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153])); // 5
```

### 가위 바위 보

input : [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]
output : ["A", "B", "A", "B", "D"]

```javascript
function solution(A, B) {
  return A.map((item, idx) => {
    if (item === B[idx]) {
      return "D";
    } else if (item === 1 && B[idx] === 2) {
      return "B";
    } else if (item === 2 && B[idx] === 3) {
      return "B";
    } else if (item === 3 && B[idx] === 1) {
      return "B";
    } else {
      return "A";
    }
  });
}

console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3])); // ["A", "B", "A", "B", "D"]
```

### 점수계산

input : [1, 0, 1, 1, 1, 0, 0, 1, 1, 0], output : 10

```javascript
function solution(arr) {
  let answer = 0;
  let score = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) answer += score++;
    else score = 1;
  }
  return answer;
}

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0])); // 10
```

### 등수구하기

input : [87, 89, 92, 100, 76, 89, 92], output : [6, 4, 2, 1, 7, 4, 2]

```javascript
function solution(arr) {
  let answer = [];
  let sortedArr = [...arr].sort((a, b) => b - a);

  for (let i = 0; i < sortedArr.length; i++) {
    answer.push(sortedArr.indexOf(arr[i]) + 1);
  }

  return answer;
}

console.log(solution([87, 89, 92, 100, 76, 89, 92])); // [6, 4, 2, 1, 7, 4, 2]
```

```javascript
function solution(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }

  return answer;
}

console.log(solution([87, 89, 92, 100, 76, 89, 92])); // [6, 4, 2, 1, 7, 4, 2]
```

### 격자판 최대합

```
input
10 13 10 12 15
12 39 30 23 11
11 25 50 53 15
19 27 29 37 27
19 13 30 13 19

output
155
```

```javascript
function solution(arr) {
  let n = arr.length;
  let answer = 0;
  let a = 0;
  let b = 0;

  for (let i = 0; i < n; i++) {
    a = 0;
    b = 0;
    for (let j = 0; j < n; j++) {
      a += arr[i][j];
      b += arr[j][i];
    }
    answer = Math.max(answer, a, b);
  }

  a = 0;
  b = 0;
  for (let i = 0; i < n; i++) {
    a += arr[i][i];
    b += arr[i][n - i - 1];
  }

  return Math.max(answer, a, b);
}

console.log(
  solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
```

### 봉우리

```
input
5 3 7 2 3
3 7 1 6 1
7 2 5 3 4
4 3 6 4 1
8 7 3 5 2

output
10
```

```javascript
function solution(arr) {
  let cnt = 0;
  let n = arr.length;
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) cnt++;
    }
  }
  return cnt;
}

console.log(
  solution([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);
```
