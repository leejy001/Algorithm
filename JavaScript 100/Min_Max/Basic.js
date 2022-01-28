// 최대값 최소값 구하기
let a = [10, 20, 30, 1, 2, 3, 5, 9, 11];

// 정수 2개
console.log(Math.max(10, 20)); // 최대값
console.log(Math.min(10, 20)); // 최솟값

// 배열
console.log(Math.max.apply(null, a)); // 최대값
console.log(Math.min.apply(null, a)); // 최솟값

// 반복문
let max = a[0];
let min = a[0];
for (let variable of a) {
  if (variable > max) {
    max = variable;
  }
  if (variable < min) {
    min = variable;
  }
}
console.log(max, min);
