// LV.2 줄 서는 방법

function solution(n, k) {
  const answer = [];
  const arr = new Array(n).fill(1).map((_, i) => _ + i);

  const getNum = (arr) => {
    let fac = 1;
    for (let i = 1; i < arr.length; i++) {
      fac *= i;
    }

    const idx = Math.ceil(k / fac) - 1;
    k = k - idx * fac;

    return arr[idx];
  };

  for (let i = 1; i <= n; i++) {
    const num = getNum(arr);
    arr.splice(arr.indexOf(num), 1);
    answer.push(num);
  }

  return answer;
}
