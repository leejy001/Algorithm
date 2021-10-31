function solution(n) {
  const num = n + "";
  const newArr = num
    .split("")
    .sort()
    .reverse()
    .join("");

  return +newArr;
}