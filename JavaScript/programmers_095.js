// LV2. 점프와 순간 이동

function solution(n) {
  var ans = 0;
  while (n !== 0) {
    if (n % 2 === 0) n /= 2;
    else {
      n -= 1;
      ans += 1;
    }
  }
  return ans;
}

// 2진수 이용

function solution(n) {
  return n.toString(2).replace(/0/g, "").length;
}
