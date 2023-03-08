// LV.1 멀리 뛰기

function solution(n) {
  let dp = [0, 1, 2];
  if (n === 1) return dp[1];
  if (n === 2) return dp[2];
  for (let i = 3; i <= n; i++) {
    dp.push((dp[i - 2] + dp[i - 1]) % 1234567);
  }
  return dp[n];
}
