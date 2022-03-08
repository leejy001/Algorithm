**71. 깊이 우선 탐색**

```javascript
const graph = {
  E: ["D", "A"],
  F: ["D"],
  A: ["E", "C", "B"],
  B: ["A"],
  C: ["A"],
  D: ["E", "F"],
};

function DFS(graph, startNode) {
  let visited = [];
  let visit = [startNode];

  while (visit.length !== 0) {
    const node = visit.pop();
    if (!visited.includes(node)) {
      visited.push(node);
      let sub = graph[node].filter((x) => !visited.includes(x));
      for (let i of sub) {
        visit.push(i);
      }
    }
  }
  return visited;
}

console.log(DFS(graph, "E"));
```

**72. 너비 우선 탐색**

```javascript
const graph = {
  A: ["E", "C", "B"],
  B: ["A"],
  C: ["A"],
  D: ["E", "F"],
  E: ["D", "A"],
  F: ["D"],
};

function BFS(graph, start) {
  let visited = [];
  let stack = [start];

  while (stack.length !== 0) {
    let n = stack.shift();
    if (!visited.includes(n)) {
      visited.push(n);
      let sub = graph[n].filter((x) => !visited.includes(x));
      for (let i of sub) {
        stack.push(i);
      }
    }
  }
  return visited;
}

console.log(BFS(graph, "E"));
```

**73. 최단 경로 찾기** try

```javascript
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

function BFS(graph, start, end) {
  let visited = [start];
  let queue = [start];
  let count = -1;
  while (queue.length !== 0) {
    count += 1;
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = String(queue.splice(0, 1));
      if (node === end) return count;

      for (let next_node in graph[node]) {
        if (!visited.includes(graph[node][next_node])) {
          visited.push(graph[node][next_node]);
          queue.push(graph[node][next_node]);
        }
      }
    }
  }
}

console.log(BFS(graph, "A", "F")); // 2
```

**74. 최장 경로 찾기** try

```javascript
const graph = {
  1: [2, 3, 4],
  2: [1, 3, 4, 5, 6],
  3: [1, 2, 7],
  4: [1, 2, 5, 6],
  5: [2, 4, 6, 7],
  6: [2, 4, 5, 7],
  7: [3, 5, 6],
};

let start = 1;
let end = 7;
let visited = [];
let queue = [start];

function BFS(visited, queue) {
  let node = queue[queue.length - 1];
  let length = 0;
  if (node === end) {
    return visited.length;
  }
  if (visited.includes(node)) {
    return visited.length;
  } else visited.push(node);

  let max = [];

  for (let next_node in graph[node]) {
    queue.push(graph[node][next_node]);
    max.push(length, BFS(visited, queue));
    length = Math.max.apply(null, max);

    queue.pop();
  }
  return length;
}

console.log(BFS(visited, queue)); // 6
```

**75. 369**

```javascript
const threesixnine = { 3: 1, 6: 2, 9: 3 };

function ThreeSixNine(num) {
  let answer = 0;
  let count = 1;
  while (num.length !== 0) {
    answer += threesixnine[parseInt(num.pop(), 10)] * count;
    count *= 3;
  }
  return answer;
}

console.log(ThreeSixNine("333".split("")));
```

**76. 안전한 땅**

```javascript
const mapSize = 5;
const findSize = 3;
const map = [
  [1, 0, 0, 1, 0],
  [0, 1, 0, 1, 1],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
];

function Search() {
  let max = 0;
  for (let i = 0; i <= mapSize - findSize; i++) {
    for (let j = 0; j <= mapSize - findSize; j++) {
      const amount = FindMine(i, j);
      if (max < amount) max = amount;
    }
  }
  return max;
}

function FindMine(x, y) {
  let count = 0;
  for (let i = x; i < x + findSize; i++) {
    for (let j = y; j < y + findSize; j++) {
      if (map[i][j] === 1) count++;
    }
  }
  return count;
}

console.log(Search());
```

**77. 가장 긴 공통 부분 문자열**

```javascript
function makeArr(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < i; j++) {
      result.push(str.slice(j, j + str.length - i + 1));
    }
  }
  return result;
}

function sol(str1, str2) {
  const arrayOne = makeArr(str1);
  const arrayTwo = makeArr(str2);
  let intersection = arrayOne.filter((item) => arrayTwo.includes(item));

  intersection.sort((a, b) => {
    return b.length - a.length;
  });

  return intersection[0].length;
}

console.log(sol("THISISSTRINGS", "THISIS")); // 6
console.log(sol("THISISSTRINGS", "TATHISISKKQQAEW")); // 6
console.log(sol("THISISSTRINGS", "KIOTHIKESSISKKQQAEW")); // 3
console.log(sol("THISISSTRINGS", "TKHKIKSIS")); // 3
```

**78. 원형 테이블**

```javascript
function sol(num, idx) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(i + 1);
  }

  while (arr.length > 2) {
    arr.splice(0, 1);
    const sub = arr.splice(0, idx - 1);
    arr = [...arr, ...sub];
  }
  return arr;
}

console.log(sol(6, 3)); // [3, 5]
```

**79. 순회하는 리스트**

```javascript
let arr = [10, 20, 25, 27, 34, 35, 39];

function rotate(arr, num) {
  let c_arr = arr.slice();
  for (let i = 0; i < num; i++) {
    let sub = c_arr.pop();
    c_arr = [sub, ...c_arr];
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(Math.abs(arr[i] - c_arr[i]));
  }

  let min = result.indexOf(Math.min.apply(null, result));
  return `index: ${min}\nvalue: ${arr[min]}, ${c_arr[min]}`;
}

console.log(rotate(arr, 2));
/*
  index: 6
  value: 39, 34
*/
```

**80. 순열과 조합**

```javascript (조합)
const charArr = ["ㄱ", "ㄴ", "ㄷ", "ㄹ"];

function Combination(arr, num) {
  const result = [];
  if (num === 1) {
    return arr.map((item) => [item]);
  }
  arr.forEach((prev, index, arr) => {
    const rest = arr.slice(index + 1);
    const comb = Combination(rest, num - 1);
    const answer = comb.map((item) => [prev, ...item]);
    result.push(...answer);
  });
  return result;
}

console.log(Combination(charArr, 3)); // ["ㄱㄴㄷ", "ㄱㄴㄹ", "ㄱㄷㄹ", "ㄴㄷㄹ"]
```

다른풀이 (순열)

```javascript
const charArr = ["ㄱ", "ㄴ", "ㄷ", "ㄹ"];

function Permutaion(charArr, n) {
  let combi = [];

  const f = (prefix, charArr) => {
    for (let i = 0; i < charArr.length; i++) {
      combi.push(prefix + charArr[i]);
      f(prefix + charArr[i], charArr.slice(i + 1));
    }
  };

  f("", charArr);

  const result = combi.filter((x) => x.length === n);

  return result;
}

console.log(Permutaion(charArr, 3)); // ["ㄱㄴㄷ", "ㄱㄴㄹ", "ㄱㄷㄹ", "ㄴㄷㄹ"]
```
