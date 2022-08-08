### 선택정렬

input : [13,5,11,7,23,15], output : [5,7,11,13,15,23]

```javascript
function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j;
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  return arr;
}

console.log(solution([13, 5, 11, 7, 23, 15]));
```

### 버블정렬

input : [13,5,11,7,23,15], output : [5,7,11,13,15,23]

```javascript
function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
}

console.log(solution([13, 5, 11, 7, 23, 15]));
```

### Special Sort

input : [1,2,3,-3,-2,5,6,-6], output : [-3,-2,-6,1,2,3,5,6]

```javascript
function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0)
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
}

console.log(solution([1, 2, 3, -3, -2, 5, 6, -6]));
```

### 삽입정렬

input : [11,7,5,6,10,9], output : [5,6,7,9,10,11]

```javascript
function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = tmp;
  }
  return arr;
}

console.log(solution([11, 7, 5, 6, 10, 9]));
```

```javascript
function solution(arr) {
  let answer = [];
  answer.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < answer.length; j++) {
      if (arr[i] < answer[j]) {
        answer.splice(j, 0, arr[i]);
        break;
      }
    }
  }
  return answer;
}

console.log(solution([11, 7, 5, 6, 10, 9]));
```

### 장난꾸러기 현수

input : [120, 125, 152, 130, 135, 135, 143, 127, 160], output : 3 8
input : [120, 130, 150, 150, 130, 150], output : 3 5

```javascript
function solution(arr) {
  let answer = [];
  let sortArr = arr.slice();
  sortArr.sort((a, b) => a - b);
  for (let i = 0; i < sortArr.length; i++) {
    if (arr[i] !== sortArr[i]) answer.push(i + 1);
  }
  return answer;
}

console.log(solution([120, 125, 152, 130, 135, 135, 143, 127, 160]));
console.log(solution([120, 130, 150, 150, 130, 150]));
```

### 좌표 정렬

input : [[2, 7], [1, 3], [1, 2], [2, 5], [3, 6]], output : [[1, 2], [1, 3], [2, 5], [2, 7], [3, 6]]

```javascript
function solution(arr) {
  let answer = arr;
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });
  return answer;
}

console.log(
  solution([
    [2, 7],
    [1, 3],
    [1, 2],
    [2, 5],
    [3, 6],
  ])
);
```

### 회의실 배정

input : [[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]], output : 3
input : [[3, 3], [1, 3], [2, 3]], output : 2

```javascript
function solution(arr) {
  let answer = 0;
  arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let et = 0;
  for (let time of arr) {
    if (time[0] >= et) {
      answer++;
      et = time[1];
    }
  }
  return answer;
}

console.log(
  solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);
```

### 결혼식

input : [[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]], output : 2

```javascript
function solution(arr) {
  let answer = 0;
  let times = [];
  for (let time of arr) {
    times.push([time[0], "s"]);
    times.push([time[1], "e"]);
  }

  times.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });

  let cnt = 0;
  for (let time of times) {
    if (time[1] === "s") cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }
  return answer;
}

console.log(
  solution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);
```

### 이분검색

input : 32, [23, 87, 65, 12, 57, 32, 99, 81], output : 3

```javascript
function solution(m, songs) {
  songs.sort((a, b) => a - b);
  let lt = 0;
  let rt = songs.length - 1;
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2, 10);
    if (songs[mid] === m) {
      return mid + 1;
    } else if (songs[mid] > m) {
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
}

console.log(solution(32, [23, 87, 65, 12, 57, 32, 99, 81]));
```

### 뮤직비디오

input : 3, [1, 2, 3, 4, 5, 6, 7, 8, 9], output : 17

```javascript
function count(songs, mid) {
  let cnt = 1;
  let sum = 0;
  for (let song of songs) {
    if (sum + song > mid) {
      cnt++;
      sum = song;
    } else sum += song;
  }
  return cnt;
}

function solution(m, songs) {
  let answer;
  let lt = Math.max(...songs);
  let rt = songs.reduce((acc, cur) => acc + cur, 0);
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2, 10);
    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else lt = mid + 1;
  }
  return answer;
}

console.log(solution(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
```

### 마구간 정하기

input : 3, [1, 2, 8, 4, 9], output : 3

```javascript
function count(arr, dist) {
  let cnt = 1;
  let cur = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - cur >= dist) {
      cnt++;
      cur = arr[i];
    }
  }
  return cnt;
}

function solution(m, arr) {
  let answer;
  arr.sort((a, b) => a - b);
  let lt = 1;
  let rt = arr[arr.length - 1];
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2, 10);
    console.log(mid);
    if (count(arr, mid) >= m) {
      answer = mid;
      lt = mid + 1;
    } else rt = mid - 1;
  }
  return answer;
}

console.log(solution(3, [1, 2, 8, 4, 9]));
```
