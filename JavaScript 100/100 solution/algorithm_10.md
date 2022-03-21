**91. 반평균 등수**

```javascript
let student_score = [];
let class_score = [];
let total_score = [];
let argument_class_score = [];
let argument_class_top = [];
let argument_total = [];

for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 30; j++) {
    for (let k = 0; k < 5; k++) {
      student_score.push(Math.floor(Math.random() * 100) + 1);
    }
    class_score.push(student_score);
    student_score = [];
  }
  argumentClass(class_score);
  total_score.push(class_score);
  class_score = [];
}

argTotal(argument_class_score);

function argumentClass(arr) {
  let korean = 0;
  let english = 0;
  let math = 0;
  let social = 0;
  let science = 0;
  let max = 0;
  let maxArr = [];
  for (let i = 0; i < arr.length; i++) {
    let arg = argStudent(arr[i]);
    korean += arr[i][0];
    english += arr[i][1];
    math += arr[i][2];
    social += arr[i][3];
    science += arr[i][4];
    if (max < arg) {
      max = arg;
      maxArr = arr[i];
    }
  }
  argument_class_top.push({ max: max, arr: maxArr });
  argument_class_score.push([
    Math.round(korean / 30),
    Math.round(english / 30),
    Math.round(math / 30),
    Math.round(social / 30),
    Math.round(science / 30),
  ]);
}

function argStudent(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return Math.round(total / 5);
}

function argTotal(arr) {
  let korean = 0;
  let english = 0;
  let math = 0;
  let social = 0;
  let science = 0;
  for (let i = 0; i < arr.length; i++) {
    korean += arr[i][0];
    english += arr[i][1];
    math += arr[i][2];
    social += arr[i][3];
    science += arr[i][4];
  }
  argument_total.push(
    Math.ceil(korean / 7),
    Math.ceil(english / 7),
    Math.ceil(math / 7),
    Math.ceil(social / 7),
    Math.ceil(science / 7)
  );
}

console.log("전교 점수 리스트");
for (let i = 0; i < total_score.length; i++) {
  console.log(`${i + 1}반:`, total_score[i]);
}
console.log("반 평균(국어, 영어, 수학, 사회, 과학)");
for (let i = 0; i < argument_class_score.length; i++) {
  console.log(
    `${i + 1}반 1등(과목 평균):`,
    argument_class_top[i].max,
    "점수",
    argument_class_top[i].arr
  );
  console.log(`${i + 1}반:`, argument_class_score[i]);
}
console.log("전교 평균(국어, 영어, 수학, 사회, 과학)");
console.log(argument_total);
```

**92. 키보드 고장**

```javascript
const inputs = `이대표,'333,356,766','S은행','100-0000-0000-001'
최차장,'7,000,000','S은행','100-0000-0000-002'
이과장,'6,200,000','S은행','100-0000-0000-003'
홍팀장,'5,300,000','S은행','100-0000-0000-004'
이대리,'4,300,000','S은행','100-0000-0000-005'`;

let input = inputs.split("\n");
let num = [];
let list = [];

for (let i of input) {
  let data = i.split(",");
  let salary = data.slice(1, data.length - 2);
  num.push(salary.join(""));
  list.push([...data.slice(0, 1), ...data.slice(data.length - 2)]);
}

let result = [];
let cnt = 0;

for (let salary of num) {
  let salary1 = "";
  let salary2 = "";
  for (let digit of salary) {
    if (digit !== "'") {
      if (digit === "3") {
        salary1 += "1";
        salary2 += "2";
      } else if (digit === "4") {
        salary1 += "2";
        salary2 += "2";
      } else if (digit === "6") {
        salary1 += "5";
        salary2 += "1";
      } else {
        salary1 += digit;
        salary2 += "0";
      }
    }
  }
  result.push([parseInt(salary1, 10), parseInt(salary2, 10)]);
}

let answer = [];

for (let i = 0; i < result.length; i++) {
  answer.push([list[i][0], ...result[i], list[i][1], list[i][2]]);
}

console.log(answer);

/*
[['이대표', 111155755, 222201011, "'S은행'", "'100-0000-0000-001'"],
 ['최차장', 7000000, 0, "'S은행'", "'100-0000-0000-002'"],
 ['이과장', 5200000, 1000000, "'S은행'", "'100-0000-0000-003'"],
 ['홍팀장', 5100000, 200000, "'S은행'", "'100-0000-0000-004'"],
 ['이대리', 2100000, 2200000, "'S은행'", "'100-0000-0000-005'"]]
*/
```

**93. 페이지 교체 - 선입선출 알고리즘**

```javascript
function FIFO(pages, frame) {
  let pageArr = pages.split("");
  let result = [];
  let runTime = 0;

  if (frame === 0) return pageArr.length * 6;

  for (let page of pageArr) {
    if (result.includes(page)) {
      runTime += 1;
      continue;
    } else if (result.length === frame && !result.includes(page)) {
      runTime += 6;
      result.shift();
      result.push(page);
    } else if (result.length < frame && !result.includes(page)) {
      runTime += 6;
      result.push(page);
    }
  }

  return runTime;
}

console.log(FIFO("BCBAEBCE", 3)); // 38
console.log(FIFO("ABCABCABC", 3)); // 24
console.log(FIFO("ABCDABEABCDE", 4)); // 62
console.log(FIFO("ABCEDF", 0)); // 36
console.log(FIFO("ABCDABEA", 3)); // 43
```

**94. 페이지 교체 - LRU 알고리즘**

```javascript
function LRU(pages, frame) {
  let pageArr = pages.split("");
  let result = [];
  let runTime = 0;

  if (frame === 0) return pageArr.length * 6;

  for (let page of pageArr) {
    if (result.includes(page)) {
      runTime += 1;
      result.splice(result.indexOf(page), 1);
      result.push(page);
    } else if (result.length === frame && !result.includes(page)) {
      runTime += 6;
      result.shift();
      result.push(page);
    } else if (result.length < frame && !result.includes(page)) {
      runTime += 6;
      result.push(page);
    }
  }

  return runTime;
}

console.log(LRU("BCBAEBCE", 3)); // 33
console.log(LRU("ABCABCABC", 3)); // 24
console.log(LRU("ABCDABEABCDE", 4)); // 52
console.log(LRU("ABCEDF", 0)); // 36
console.log(LRU("ABCDABEA", 3)); // 43
```

**95. 도장찍기**

```javascript
function rotateMatrix(arr, k) {
  let answer = arr.map((v) => [...v]);
  const rotateOne = rotate90(arr);
  const rotateTwo = rotate180(arr);
  const rotateThree = rotate270(arr);

  for (let i = 1; i <= k; i++) {
    if (i % 4 === 1) {
      answer = add(answer, rotateOne).map((v) => [...v]);
    } else if (i % 4 === 2) {
      answer = add(answer, rotateTwo).map((v) => [...v]);
    } else if (i % 4 === 3) {
      answer = add(answer, rotateThree).map((v) => [...v]);
    } else {
      answer = add(answer, arr).map((v) => [...v]);
    }
  }
  return answer;
}

function add(arr1, arr2) {
  let sum = arr1.map((item, i) => item.map((item2, j) => item2 + arr2[i][j]));
  return sum;
}

function rotate90(arr) {
  let result = [];
  for (let i = 0; i < arr[0].length; i++) {
    result.push([]);
  }
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = arr.length - 1; j >= 0; j--) {
      result[i].push(arr[j][i]);
    }
  }
  return result;
}

function rotate180(arr) {
  let result = arr.map((v) => [...v]);
  for (let i = 0; i < result.length; i++) {
    result[i].reverse();
  }
  result.reverse();
  return result;
}

function rotate270(arr) {
  let result = rotate90(arr);
  for (let i = 0; i < result.length; i++) {
    result[i].reverse();
  }
  result.reverse();
  return result;
}

let arr = [
  [1, 1, 1, 2],
  [2, 0, 0, 0],
  [1, 1, 1, 1],
  [0, 0, 0, 0],
];

console.log(rotateMatrix(arr, 1));
/*
 [1, 2, 3, 3]
 [2, 1, 0, 1]
 [1, 2, 1, 2]
 [0, 1, 0, 2]
*/
console.log(rotateMatrix(arr, 2));
/*
 [1, 2, 3, 3]
 [3, 2, 1, 2]
 [1, 2, 1, 4]
 [2, 2, 1, 3]
*/
console.log(rotateMatrix(arr, 3));
/*
 [3, 2, 4, 3]
 [4, 2, 2, 2]
 [2, 2, 2, 4]
 [3, 4, 2, 3]
*/
console.log(rotateMatrix(arr, 4));
/*
 [4, 3, 5, 5]
 [6, 2, 2, 2]
 [3, 3, 3, 5]
 [3, 4, 2, 3]
*/
console.log(rotateMatrix(arr, 5));
/*
 [4, 4, 7, 6]
 [6, 3, 2, 3]
 [3, 4, 3, 6]
 [3, 5, 2, 5]
*/
```

**96. 넓은 텃밭 만들기**

```javascript
const garden = [
  [0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0],
];

function makeGarden(garden) {
  let width = garden[0].length;
  let height = garden.length;

  let DP = [];
  for (let i = 0; i < garden.length; i++) {
    DP.push(Array(garden.length).fill(0));
  }

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (garden[i][j] === 0) DP[i][j] = 1;
      else DP[i][j] = 0;
    }
  }

  for (let i = 1; i < height; i++) {
    for (let j = 1; j < width; j++) {
      let min;
      if (DP[i][j] === 1) {
        // 좌측 원소의 값이 가장 작을 경우
        if (DP[i - 1][j] >= DP[i][j - 1]) {
          min = DP[i][j - 1];
        }
        // 윗쪽 원소의 값이 가장 작은 경우
        else if (DP[i - 1][j] <= DP[i][j - 1]) {
          min = DP[i - 1][j];
        }
        // 대각선 원소의 값이 가장 작은 경우
        if (DP[i - 1][j - 1] < min) {
          min = DP[i - 1][j - 1];
        }
        // 현재 기준점이 그릴 수 있는 가장 큰 정사각형의 한변의 길이
        DP[i][j] = min + 1;
      }
    }
  }

  let maxValue = 0;
  let x = 0;
  let y = 0;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (maxValue < DP[i][j]) {
        maxValue = DP[i][j];
        x = i;
        y = j;
      }
    }
  }

  console.log(`${maxValue} X ${maxValue}`);

  for (let i = x - (maxValue - 1); i < x + 1; i++) {
    for (let j = y - (maxValue - 1); j < y + 1; j++) {
      DP[i][j] = "#";
    }
  }

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (DP[i][j] >= 1) {
        DP[i][j] = 0;
      } else if (DP[i][j] === 0) {
        DP[i][j] = 1;
      }
    }
  }

  return DP;
}

console.log(makeGarden(garden));

/*
3 X 3
[0, 0, '#', '#', '#']
[0, 1, '#', '#', '#']
[0, 1, '#', '#', '#']
[0, 0,   1,   0,  0]
[0, 0,   0,   1,  0]
*/
```

**97. 택배 배달**

```javascript
function solution(n, l) {
  let time = 0;
  let amount = new Array(n).fill(0);

  while (l.length !== 0) {
    for (let i = 0; i < n; i++) {
      if (l && amount[i] === 0) {
        amount[i] += l.shift();
      }
    }

    amount = amount.map((item) => (item = item - 1));

    time += 1;
  }

  time += Math.max.apply(null, amount);

  return time;
}

const men = 3;
const time = [1, 2, 1, 3, 3, 3];

console.log(solution(men, time)); // 5
```

**98. 청길이의 패션 대회**

```javascript
function setUnique(str) {
  let arr = str.split(/[\s번:]+/);
  let arr1 = [];
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 1) arr1.push(arr[i].split(","));
  }

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      if (unique.includes(arr1[i][j])) continue;
      else unique.push(arr1[i][j]);
    }
  }

  return unique;
}

console.log(setUnique("1번: 4,2,3 2번: 3 3번: 2,3,4,1 4번: 2,3")); // ["4", "2", "3", "1"]
console.log(setUnique("1번: 3,1 2번: 4 3번: 2,1,3 4번: 2,1,3,4")); // ["3", "1", "4", "2"]
```

다른 풀이

```javascript
function setUnique(str) {
  let arr = str.split(/[0-9]번: /g);
  arr.shift();

  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replace(/ /g, "").split(",");
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = parseInt(arr[i][j], 10);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (unique.includes(arr[i][j])) continue;
      else unique.push(arr[i][j]);
    }
  }

  return unique;
}

console.log(setUnique("1번: 4,2,3 2번: 3 3번: 2,3,4,1 4번: 2,3")); // ["4", "2", "3", "1"]
console.log(setUnique("1번: 3,1 2번: 4 3번: 2,1,3 4번: 2,1,3,4")); // ["3", "1", "4", "2"]
```

**99. 토끼들의 행진**

```javascript
function cross(stones, rabbits) {
  let result = [];

  for (let i = 0; i < rabbits.length; i++) {
    result.push("pass");
    for (let j = rabbits[i] - 1; j < stones.length; j += rabbits[i]) {
      if (stones[j] === 0) {
        result[i] = "fail";
        break;
      }
      stones[j] -= 1;
    }
  }
  return result;
}

console.log(cross([1, 2, 1, 4], [2, 1])); // ["pass", "pass"]
console.log(cross([1, 2, 1, 4, 5, 2], [2, 1, 3, 1])); // ["pass", "pass", "fail", "fail"]
```

**100. 퍼즐게임**

```javascript
function game(puzzle, move) {
  let stack = [0];
  let score = 0;
  for (let i = 0; i < move.length; i++) {
    for (let j = 0; j < puzzle.length; j++) {
      if (puzzle[j][move[i] - 1] !== 0) {
        let comp = stack.pop();
        if (comp === puzzle[j][move[i] - 1]) {
          score += puzzle[j][move[i] - 1] * 2;
          puzzle[j][move[i] - 1] = 0;
        } else {
          stack.push(comp);
          stack.push(puzzle[j][move[i] - 1]);
        }
        puzzle[j][move[i] - 1] = 0;
        break;
      } else if (j === puzzle.length - 1 && puzzle[j][move[i] - 1] === 0) {
        score -= 1;
      }
    }
  }
  return score;
}

let puzzle = [
  [0, 0, 0, 0],
  [0, 1, 0, 3],
  [2, 5, 0, 1],
  [2, 4, 4, 1],
  [5, 1, 1, 1],
];
let move = [1, 1, 1, 1, 3, 3, 3];

console.log(game(puzzle, move)); // 2
```
