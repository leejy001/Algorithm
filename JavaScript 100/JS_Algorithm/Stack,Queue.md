### 올바른 괄호(스택)

input : (()(()))((), output : NO
input : ((())()), output : YES

```javascript
function solution(str) {
  let st = [];
  for (let char of str) {
    if (char === "(") st.push(char);
    else if (st && char === ")") st.pop();
    else return "NO";
  }

  return st.length !== 0 ? "NO" : "YES";
}

console.log(solution("(()(()))(()"));
console.log(solution("((())())"));
```

### 괄호 문자 제거(스택)

input : (A(BC)D)EF(G(H)(IJ)K)LM(N)
output : EFLM

```javascript
function solution(str) {
  let st = [];
  for (let char of str) {
    if (char === ")") {
      while (st.pop() !== "(");
    } else {
      st.push(char);
    }
  }

  return st.join("");
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
```

### 크레인 인형뽑기(스택): 카카오

input : [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]
output : [1,5,3,5,1,2,1,4]

```javascript
function solution(board, moves) {
  let st = [];
  let answer = 0;
  for (let move of moves) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][move - 1] !== 0) {
        if (st[st.length - 1] === board[i][move - 1]) {
          st.pop();
          answer += 2;
        } else {
          st.push(board[i][move - 1]);
        }
        board[i][move - 1] = 0;
        break;
      }
    }
  }
  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
```

### 후위식(postfix) 연산(스택)

input : 352+\*9-
output : 12

```javascript
function solution(str) {
  let st = [];
  for (let char of str) {
    if (/\d/.test(char)) st.push(Number(char));
    else {
      let right = st.pop();
      let left = st.pop();
      if (char === "+") st.push(left + right);
      if (char === "-") st.push(left - right);
      if (char === "*") st.push(left * right);
      if (char === "/") st.push(left / right);
    }
  }
  return st[0];
}

console.log(solution("352+*9-"));
```

### 쇠막대기(스택)

input : ()(((()())(())()))(()), output : 17
input : ()(((()())(())()))(()), output : 24

```javascript
function solution(str) {
  let st = [];
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") st.push(str[i]);
    else if (str[i - 1] === "(" && str[i] === ")") {
      st.pop();
      cnt += st.length;
    } else {
      st.pop();
      cnt += 1;
    }
  }
  return cnt;
}

console.log(solution("()(((()())(())()))(())"));
console.log(solution("(((()(()()))(())()))(()())"));
```

### 공주구하기(큐)

input : 8 3, output : 7

```javascript
function solution(num, k) {
  let answer;
  let queue = Array.from({ length: num }, (v, i) => i + 1);
  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }
  return answer;
}

console.log(solution(8, 3));
```

### 교육과정설계(큐)

input : CBA, CBDAGE
output : YES

input : CBA, CADBGE
output : NO

```javascript
function solution(subjects, curriculum) {
  let answer = "YES";
  let queue = subjects.split("");
  for (let subject of curriculum) {
    if (queue.includes(subject)) {
      if (subject !== queue.shift()) return "NO";
    }
  }
  if (queue.length > 0) return "NO";
  return answer;
}

console.log(solution("CBA", "CBDAGE"));
console.log(solution("CBA", "CADBGE"));
```
