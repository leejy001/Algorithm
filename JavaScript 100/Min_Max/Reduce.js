// 최대값 최소값 구하기
let a = [10, 20, 30, 1, 2, 3, 5, 9, 11];

const addReducer = (accumulator, currentvalue) => accumulator + currentvalue;
const minusReducer = (accumulator, currentvalue) => accumulator - currentvalue;
const maxReducer = (accumulator, currentvalue) =>
  accumulator > currentvalue ? accumulator : currentvalue;
const minReducer = (accumulator, currentvalue) =>
  accumulator < currentvalue ? accumulator : currentvalue;

console.log(a.reduce(addReducer)); // 배열의 모든 수 더하기
console.log(a.reduce(minusReducer)); // 배열의 모든 수 빼기
console.log(a.reduce(maxReducer)); // 배열의 최대 값
console.log(a.reduce(minReducer)); // 배열의 최소 값
