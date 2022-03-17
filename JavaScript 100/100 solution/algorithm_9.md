**81. 지뢰찾기**

```javascript
let flag = []; // 지뢰 없이 깃발만 있는 리스트
let minesweeper = []; // 지뢰를 찾은 리스트
let count = 0;
let minefield = [
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];
let len = minefield.length;

let direction = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

function findflag() {
  let field = minefield;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (minefield[i][j] === 1) {
        field[i][j] = "f";
        findMine(field, i, j);
      }
    }
  }
  return field.map((item) => item.join(""));
}

function findMine(field, x, y) {
  for (let i = 0; i < 4; i++) {
    let nx = x + direction[i][0];
    let ny = y + direction[i][1];
    if (nx < 0 || ny < 0 || nx >= len || ny >= len) continue;
    else if (field[nx][ny] === "*") continue;
    else {
      field[nx][ny] = "*";
      minesweeper.push([nx, ny]);
    }
  }
}

console.log(findflag());
/*
["* f * 0 0",
 "0 * 0 * 0",
 "0 0 * f *",
 "0 * f * 0",
 "0 0 * 0 0"]
*/
console.log(flag); // [[0, 1], [2, 3], [3, 2]]
console.log(minesweeper); // [[0, 0], [0, 2], [1, 1], [1, 3], [2, 2], [2, 4], [3, 1], [3, 3], [4, 2]]
```

**82. 수학 괄호 파싱**

```javascript
function math(e) {
  let exp = e.split("");
  let step = 0;
  for (let i = 0; i < exp.length; i++) {
    if (exp[i] === "(") {
      step += 1;
    } else if (step !== 0 && exp[i] === ")") {
      step -= 1;
    } else if (step === 0 && exp[i] === ")") {
      return "False";
    }
  }
  if (step > 0) return "False";
  return "True";
}

console.log(math("5 + 7) * (3 * 5)")); // False
console.log(math("3 + 5")); // True
console.log(math("(3 + 5")); // False
console.log(math("((3 + 5) - (4 / 5)) - (1 - 2)")); // True
```

**83. 수학 괄호 파싱2**

```javascript
function math(e) {
  let exp = e.split("");
  let step1 = 0;
  let step2 = 0;
  for (let i = 0; i < exp.length; i++) {
    if (exp[i] === "(") {
      step1 += 1;
    } else if (exp[i] === "{") {
      step2 += 1;
    } else if (step1 !== 0 && exp[i] === ")") {
      step1 -= 1;
    } else if (step1 === 0 && exp[i] === ")") {
      return "False";
    } else if (step2 !== 0 && exp[i] === "}") {
      step2 -= 1;
    } else if (step2 === 0 && exp[i] === "}") {
      return "False";
    }
  }
  if (step1 > 0 || step2 > 0) return "False";
  return "True";
}

console.log(math("5 + 7) * (3 * 5)")); // False
console.log(math("3 + 5")); // True
console.log(math("(3 + 5")); // False
console.log(math("((3 + 5) - (4 / 5)) - (1 - 2)")); // True
console.log(math("{5 + 7) * (3 * 5)")); // False
console.log(math("{{3 + 5})")); // False
console.log(math("{3 + 5")); // False
console.log(math("{(3 + 5) - (4 / 5)} - (1 - 2)")); // True
```

다른 풀이

```javascript
function math(e) {
  const m = {
    ")": "(",
    "}": "{",
  };
  let stack = [];

  for (let i = 0; i < e.length; i++) {
    if (e[i].includes("(") || e[i].includes("{")) {
      stack.push(e[i]);
    } else if (m[e[i]]) {
      if (stack.length === 0) {
        return false;
      } else {
        let t = m[e[i]];
        if (t !== stack.pop()) return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(math("5 + 7) * (3 * 5)")); // False
console.log(math("3 + 5")); // True
console.log(math("(3 + 5")); // False
console.log(math("((3 + 5) - (4 / 5)) - (1 - 2)")); // True
console.log(math("{5 + 7) * (3 * 5)")); // False
console.log(math("{{3 + 5})")); // False
console.log(math("{3 + 5")); // False
console.log(math("{(3 + 5) - (4 / 5)} - (1 - 2)")); // True
```

**84. 숫자뽑기**

```javascript
function PeekNumber(num, count) {
  let numArr = String(num).split("");
  const result = getComb(numArr, count).map(Number);
  return Math.max.apply(null, result);
}

function getComb(numArr, count) {
  const result = [];
  if (count === 1) return numArr.map((item) => [item]);
  numArr.forEach((fixed, index, numArr) => {
    const rest = numArr.slice(index + 1);
    const comb = getComb(rest, count - 1);
    const answer = comb.map((item) => [fixed, ...item]);
    result.push(...answer);
  });
  return result.map((item) => item.reduce((prev, cur) => prev + cur));
}

console.log(PeekNumber(1723, 2)); // 73
console.log(PeekNumber(93187, 3)); // 987
```

**85. 숫자놀이**

```javascript
function sol(n) {
  let answer = "1";
  if (n === 1) {
    return 1;
  }

  for (let i = 1; i < n; i++) {
    answer = rule(answer.split(""));
  }

  return answer;
}

function rule(answer) {
  let answerMax = 9;
  let result = "";
  let cnt = 0;

  for (let i = 1; i < answerMax; i++) {
    cnt = answer.filter((item) => item === String(i)).length;
    if (cnt >= 1) {
      result = result + String(i) + String(cnt);
    }
  }
  return result;
}

const user_input = 7;
console.log(sol(user_input)); // 132231
```

```javascript
function sol(n) {
  let answer = "1";
  if (n === 1) {
    return 1;
  }

  for (let i = 1; i < n; i++) {
    answer = rule(answer);
  }

  return answer;
}

function rule(answer) {
  let answerMax = 9;
  let result = "";

  for (let i = 1; i < answerMax; i++) {
    let re = new RegExp(i, "g");
    let count = (answer.match(re) || []).length;

    if (count >= 1) {
      result = result + String(i) + String(count);
    }
  }
  return result;
}

const user_input = 7;
console.log(sol(user_input)); // 132231
```

**86. 회전 초밥**

```javascript
function sol(point, dish) {
  dish -= 1;
  let answer = 0;
  let s = point.slice();
  s.sort((a, b) => {
    return a - b;
  });

  while (true) {
    let p = point.shift();

    if (s[0] === p) {
      if (dish === 0) {
        break;
      }
      dish -= 1;
      s.shift();
    } else {
      point.push(p);
      if (dish === 0) {
        dish = point.length - 1;
      } else {
        dish = dish - 1;
      }
    }
    answer += 1;
  }
  return answer;
}

console.log(sol([1, 1, 5, 3, 2, 5], 3)); // 10
```

**87. 천하제일 먹기 대회**

```javascript
function sort(name, score) {
  let list = {};
  for (let i = 0; i < name.length; i++) {
    list[name[i]] = score[i];
  }

  let keysSorted = Object.keys(list).sort(function (a, b) {
    return list[b] - list[a];
  });

  let result = {};
  for (let i = 0; i < keysSorted.length; i++) {
    result[keysSorted[i]] = i + 1;
  }

  return result;
}

const name = ["손오공", "야모챠", "메지터", "비콜로"];
const score = [70, 10, 55, 40];

console.log(sort(name, score)); // {손오공: 1, 메지터: 2, 비콜로: 3, 야모챠: 4}
```

**88. 지식이의 게임 개발**

```javascript
let width = 4;
let height = 5;
let caracter = [0, 0];
let wall = [
  [0, 1],
  [1, 1],
  [2, 3],
  [1, 3],
];

function make_map(width, height, caracter, wall) {
  let basic = Array.from(Array(height + 2), () => Array(width + 2).fill(2));
  for (let i = 1; i < basic.length - 1; i++) {
    for (let j = 1; j < basic[0].length - 1; j++) {
      basic[i][j] = 0;
    }
  }

  for (let i = 0; i < wall.length; i++) {
    basic[wall[i][0] + 1][wall[i][1] + 1] = 2;
  }

  basic[caracter[0] + 1][caracter[1] + 1] = 1;
  return basic;
}

console.log(make_map(width, height, caracter, wall));
/*
  [2, 2, 2, 2, 2, 2]
  [2, 1, 2, 0, 0, 2]
  [2, 0, 2, 0, 2, 2]
  [2, 0, 0, 0, 2, 2]
  [2, 0, 0, 0, 0, 2]
  [2, 0, 0, 0, 0, 2]
  [2, 2, 2, 2, 2, 2]
*/
```

**89. 지식이의 게임 개발2**

```javascript
let width = 4;
let height = 5;
let caracter = [0, 0];
let wall = [
  [0, 1],
  [1, 1],
  [2, 3],
  [1, 3],
];

let move = [2, 2, 2, 4, 4, 4];

function make_map(width, height, caracter, wall) {
  let basic = Array.from(Array(height + 2), () => Array(width + 2).fill(2));
  for (let i = 1; i < basic.length - 1; i++) {
    for (let j = 1; j < basic[0].length - 1; j++) {
      basic[i][j] = 0;
    }
  }

  for (let i = 0; i < wall.length; i++) {
    basic[wall[i][0] + 1][wall[i][1] + 1] = 2;
  }

  basic[caracter[0] + 1][caracter[1] + 1] = 1;
  console.log("캐릭터 이동 전 지도");
  console.log(basic);
  let result = [...basic];
  for (let i in result) {
    result[i] = [...basic[i]];
  }
  move_map(result, caracter, move);
  console.log("캐릭터 이동 후 지도");
  console.log(result);
}

function move_map(basic, caracter, move) {
  let x = caracter[0] + 1;
  let y = caracter[1] + 1;

  for (let i = 0; i < move.length; i++) {
    if (move[i] === 1 && basic[x - 1][y] !== 2) x--;
    if (move[i] === 2 && basic[x + 1][y] !== 2) x++;
    if (move[i] === 3 && basic[x][y - 1] !== 2) y--;
    if (move[i] === 4 && basic[x][y + 1] !== 2) y++;
  }

  basic[caracter[0] + 1][caracter[1] + 1] = 0;
  basic[x][y] = 1;
}

make_map(width, height, caracter, wall);

/*
  캐릭터 이동 전 지도

  [2, 2, 2, 2, 2, 2]
  [2, 1, 2, 0, 0, 2]
  [2, 0, 2, 0, 2, 2]
  [2, 0, 0, 0, 2, 2]
  [2, 0, 0, 0, 0, 2]
  [2, 0, 0, 0, 0, 2]
  [2, 2, 2, 2, 2, 2]

  캐릭터 이동 후 지도

  [2, 2, 2, 2, 2, 2]
  [2, 0, 2, 0, 0, 2]
  [2, 0, 2, 0, 2, 2]
  [2, 0, 0, 0, 2, 2]
  [2, 0, 0, 0, 1, 2]
  [2, 0, 0, 0, 0, 2]
  [2, 2, 2, 2, 2, 2]
*/
```

**90. 같은 의약 성분을 찾아라!**

```javascript
function randomItem(a) {
  let str = [];

  while (str.length !== 8) {
    let ch = a[Math.floor(Math.random() * a.length)];
    if (!str.includes(ch)) str.push(ch);
  }

  let medicine = str.join("");
  return medicine;
}

let total_medicine = [];
let char = [];
for (let i = 65; i < 91; i++) {
  char.push(String.fromCharCode(i));
}

while (total_medicine.length !== 10000) {
  let m = randomItem(char);
  if (!total_medicine.includes(char)) {
    total_medicine.push(m);
  }
}

function findIngredients(input, num) {
  let result = [];

  for (let medicine of total_medicine) {
    let ingredients = new Set(medicine);
    let inputs = new Set(input);
    let intersections = new Set(
      [...inputs].filter((item) => ingredients.has(item))
    );
    if (intersections.size === num) result.push(medicine);
  }

  return result;
}

console.log(findIngredients("ABCDEFGH", 4));
```
