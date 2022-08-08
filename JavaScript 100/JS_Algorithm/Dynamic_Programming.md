### 계단오르기

input : 7, output : 21

```javascript
function solution(num) {
  let answer = 0;
  let dy = Array.from({ length: num }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= num; i++) dy[i] = dy[i - 2] + dy[i - 1];
  answer = dy[num];
  return answer;
}

console.log(solution(7));
```

### 돌다리 건너기

input : 7, output : 34

```javascript
function solution(num) {
  let answer = 0;
  let dy = Array.from({ length: num + 2 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= num + 1; i++) dy[i] = dy[i - 2] + dy[i - 1];
  answer = dy[num + 1];
  return answer;
}

console.log(solution(7));
```

### 최대부분증가수열(LIS)

input : [5, 3, 7, 8, 6, 2, 9, 4], output : 4

```javascript
function solution(arr) {
  let answer = 0;
  let dp = Array.from({ length: arr.length }, () => 0);
  dp[0] = 1;

  for (let i = 1; i < arr.length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && dp[j] > max) max = dp[j];
    }
    dp[i] = max + 1;
    answer = Math.max(answer, dp[i]);
  }
  return answer;
}

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]));
```

### 동전교환(냅색 알고리즘)

input : [1, 2, 5], 15, output : 3

```javascript
function solution(coin, m) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 1000);
  dy[0] = 0;
  for (let i = 1; i < coin.length; i++) {
    for (let j = coin[i]; j <= m; j++) {
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
  }
  answer = dy[m];
  return answer;
}

console.log(solution([1, 2, 5], 15));
```

### 최대점수 구하기(냅색을 이용한 조합)

input : 20, [[10, 5],[25, 12],[15, 8],[6, 3],[7, 4]], output : 41

```javascript
function solution(quiz, m) {
  let score = 0;
  let dp = Array.from({ length: m + 1 }, () => 0);
  for (let i = 0; i < quiz.length; i++) {
    let ps = quiz[i][0];
    let pt = quiz[i][1];
    for (let j = m; j >= pt; j--) {
      dp[j] = Math.max(dp[j], dp[j - pt] + ps);
    }
  }
  score = dp[m];
  return score;
}

console.log(
  solution(
    [
      [10, 5],
      [25, 12],
      [15, 8],
      [6, 3],
      [7, 4],
    ],
    20
  )
);
```
