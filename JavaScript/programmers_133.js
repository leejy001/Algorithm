// LV.3 2 x n 타일링

function solution(n) {
  let dp = [0, 1, 2];
  if (n === 1) return dp[1];
  if (n === 2) return dp[2];
  for (let i = 3; i <= n; i++) {
    dp.push((dp[i - 2] + dp[i - 1]) % 1000000007);
  }
  return dp[n];
}
