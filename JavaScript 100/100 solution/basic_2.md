**11. 1~100 더하기**

```javascript
let s = 0;

for (let i = 1; i <= 50; i++) {
  s += i + 100 - i + 1;
}

console.log(s); // 5050
```

**12. 게임 캐릭터 클래스 만들기**

```javascript
class Wizard {
  constructor(health, mana, armor) {
    this.health = health;
    this.mana = mana;
    this.armor = armor;
  }

  attack() {
    console.log("파이어볼");
  }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor); // 545 210 10
x.attack(); // 파이어볼
```

**13. 행성 이름 맞추기**

```javascript
const planet = [
  "수성",
  "금성",
  "지구",
  "화성",
  "목성",
  "토성",
  "천왕성",
  "해왕성",
];

function planetName(input) {
  return planet[input - 1];
}

console.log(planetName(1)); // 수성
console.log(planetName(3)); // 지구
console.log(planetName(5)); // 목성
console.log(planetName(7)); // 천왕성
```

**14. 3의 배수?**

```javascript
function isMultiple(input) {
  if (input % 3 === 0) return "짝";
  else if (input % 3 !== 0) return input;
}

console.log(isMultiple(3)); // 짝
console.log(isMultiple(17)); // 17
```

**15. 자기 소개**

```javascript
function myName(input) {
  return `안녕하세요. 저는 ${input}입니다.`;
}

console.log(myName("자바스크립트")); // 안녕하세요. 저는 자바스크립트입니다.
```

**16. 역순**

```javascript
function reverse(input) {
  return input.split("").reverse().join("");
}

console.log(reverse("자바스크립트")); // 트립크스바자
```

**17. 조건문**

```javascript
function isTall(input) {
  if (input < 150) {
    return "NO";
  } else {
    return "YES";
  }
}

console.log(isTall(140)); // NO
console.log(isTall(185)); // YES
```

**18. 평균 구하기**

```javascript
function Average(arr) {
  return parseInt(arr.reduce((acc, val) => acc + val) / arr.length);
}

console.log(Average([20, 33, 40])); // 31
```

**19. 제곱 구하기**

```javascript
function Squared(a, b) {
  return a ** b;
}

console.log(Squared(2, 3)); // 8
console.log(Math.pow(parseInt(2, 10), parseInt(3, 10))); // 8
```

**20. 몫 나머지**

```javascript
function divide(a, b) {
  const result = parseInt(a / b);
  const left = a % b;
  return `${result} ${left}`;
}

console.log(divide(11, 2));
```
