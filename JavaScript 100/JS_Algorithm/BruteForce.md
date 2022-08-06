### 자릿수의 합

input : [128, 460, 603, 40, 521, 137, 123], output : 137

```javascript
function solution(arr) {
  let max = 0;
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i]
      .toString()
      .split("")
      .reduce((acc, cur) => Number(acc) + Number(cur));
    if (max <= sum && num < arr[i]) {
      max = sum;
      num = arr[i];
    }
  }
  return num;
}

console.log(solution([128, 460, 603, 40, 521, 137, 123]));
```

### 뒤집은 소수

input : [32, 55, 62, 20, 250, 370, 200, 30, 100], output : [23, 2, 73, 2, 3]

```javascript
function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
      .toString()
      .split("")
      .reverse()
      .join("")
      .replace(/(^0+)/, "");
    if (isPrime(num)) {
      answer.push(num);
    }
  }
  return answer;
}

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
```

### 멘토링

```
input
3 4 1 2
4 3 2 1
3 1 4 2

output
3
```

```javascript
function solution(arr) {
  let answer = 0;
  let m = arr.length;
  let n = arr[0].length;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = 0;
        let pj = 0;
        for (let s = 0; s < n; s++) {
          if (arr[k][s] === i) pi = s;
          if (arr[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === m) answer++;
    }
  }
  return answer;
}

console.log(
  solution([
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);
```

### 졸업 선물

```
input
5 28
[[6, 6],[2, 2],[4, 3],[4, 5],[10, 3]]

output
4
```

```javascript
function solution(limit, arr) {
  let answer = 0;
  let len = arr.length;
  arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < len; i++) {
    let money = limit - (arr[i][0] / 2 + arr[i][1]);
    let cnt = 1;
    for (let j = 0; j < len; j++) {
      if (j !== i && arr[j][0] + arr[j][1] > money) break;
      if (j !== i && arr[j][0] + arr[j][1] <= money) {
        money -= arr[j][0] + arr[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }

  return answer;
}

console.log(
  solution(28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
);
```

### K번째 큰 수

input : 3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]
output : 143

```javascript
function solution(k, arr) {
  let n = arr.length;
  let tmp = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        tmp.add(arr[i] + arr[j] + arr[k]);
      }
    }
  }

  return Array.from(tmp).sort((a, b) => b - a)[k - 1];
}

console.log(solution(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));
```

```javascript
function getComb(arr, num) {
  const result = [];
  if (num === 1) return arr.map((item) => [item]);
  arr.forEach((fixed, index, arr) => {
    const rest = arr.slice(index + 1);
    const comb = getComb(rest, num - 1);
    const answer = comb.map((item) => [fixed, ...item]);
    result.push(...answer);
  });
  return result;
}

function solution(k, arr) {
  let comb = getComb(arr, k).map((item) =>
    item.reduce((acc, cur) => acc + cur)
  );
  let tmp = new Set(comb);
  return Array.from(tmp).sort((a, b) => b - a)[k - 1];
}

console.log(solution(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));
```
