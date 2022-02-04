**1. 배열 삭제**

```javascript
var nums = [100, 200, 300, 400, 500];
nums.pop();
nums.pop();
console.log(nums); // [100, 200, 300]
```

**2. 배열 추가**

```javascript
var arrOne = [200, 100, 300];
arrOne.splice(2, 0, 10000);
console.log(arrOne); // [200, 100, 10000, 300]
```

**3. 변수의 타입**

```javascript
var arrTwo = [100, 200, 300];
console.log(typeof arrTwo); // object
```

**4. 변수의 타입 2**

```javascript
var a = 1;
console.log(typeof a); // number
var b = 2.22;
console.log(typeof b); // number
var c = "p";
console.log(typeof c); // string
var d = [1, 2, 3];
console.log(typeof d); // object
```

**5. for 문**

```javascript
var a = 10;
var b = 2;

for (var i = 1; i < 5; i += 2) {
  a += i;
}

console.log(a + b); // 16
```

**6. False**

```
1) NaN  // false
2) 1    // true
3) ""   // false
4) 0    // false
5) undefined   // false
```

**7. 변수명**

```
1) age
2) Age
3) let  // wrong
4) _age
5) 1age  // wrong
```

JavaScript 식별자는 문자, 밑줄(\_) 혹은 달러 기호($)로 시작해야하며 JavaScript 문법에 존재하는 예약어는 사용이 불가능

**8. 객체의 키 이름 중복**

```javascript
var d = {
  height: 100,
  weight: 78,
  weight: 84,
  temperature: 36,
  eyesight: 1,
};

console.log(d["weight"]); // 84
```

**9. concat을 활용한 출력 방법**

```javascript
var year = "2019";
var month = "04";
var day = "26";
var hour = "11";
var minute = "34";
var second = "27";

var result = year.concat(
  "/",
  month,
  "/",
  day,
  " ",
  hour,
  ":",
  minute,
  ":",
  second
);

console.log(result);
```

**10. 별 찍기**

```javascript
function setTree(input) {
  let tree = "";
  for (let i = 0; i <= input; i++) {
    let star = "";
    for (let j = 0; j <= input - i; j++) {
      star += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      star += "*";
    }
    tree += star + "\n";
  }
  return tree;
}

console.log(setTree(5));
```
