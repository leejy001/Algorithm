**21. set 만드는 방법**

```
1)  var x = {1, 2, 3, 5, 6, 7};  // wrong
2)  var x = {};  // wrong
3)  var x = new Set('javascript');
4)  var x = new Set(range(5));  // wrong
5)  var x = new Set();
```

**22. 배수 확인**

```
1)  i / 6 == 0
2)  i % 6 == 0  // 정답
3)  i & 6 == 0
4)  i | 6 == 0
5)  i // 6 == 0
```

**23. OX 문제**

console.log(10/3)의 출력 결과는 3이다.  
딥: X (output : 3.3333333333333335)

**24. 대문자 변환**

```javascript
function Upper(input) {
  return input.toUpperCase();
}

function Lower(input) {
  return input.toLowerCase();
}

console.log(Upper("JavaScript")); // JAVASCRIPT
console.log(Lower("JavaScript")); // javascript
```

**25. 원의 넓이 구하기**

```javascript
function Circular(input) {
  return input * input * 3.14;
}

console.log(Circular(5)); // 78.5
console.log(Circular(7)); // 153.86
```

**26. 영어 이름 반환**

```javascript
function translate(input) {
  const planet = {
    수성: "Mercury",
    금성: "Venus",
    지구: "Earth",
    화성: "Mars",
    목성: "Jupiter",
    토성: "Saturn",
    천왕성: "Uranus",
    해왕성: "Neptune",
  };
  return planet[input];
}

console.log(translate("지구")); // Earth
console.log(translate("천왕성")); // Uranus
```

**27. 객체 만들기**

```javascript
const keys = ["apple", "orange"];
const values = [1000, 2000];
const obj = {};

function makeObj(keys, values) {
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i];
  }
  return obj;
}

console.log(makeObj(keys, values)); // {apple : 1000, orange: 2000}
```

**28. 2-gram**

```javascript
function twoGram(input) {
  for (let i = 1; i < input.length; i++) {
    console.log(input[i - 1], input[i]);
  }
}

twoGram("Javascript");
```

**29. 대소문자 판별**

```javascript
function isUpper(char) {
  if (char === char.toUpperCase()) return "YES";
  else return "NO";
}

console.log(isUpper("J"));
console.log(isUpper("j"));
```

**30. 문자 찾기**

```javascript
function findWard(str, word) {
  return str.indexOf(word);
}

console.log(findWard("pineapple is yummy", "apple"));
```

indexOf() 메서드는 호출한 스트링 객체나 배열에서 주어진 값과 일치하는 값 혹은 요소의 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환한다.
