function gcd(minNum, maxNum){
  return (minNum % maxNum) === 0 ? maxNum : gcd(maxNum, minNum % maxNum);
}

function lcm(minNum, maxNum){
  return minNum * maxNum / gcd(minNum, maxNum);
}

function solution(n, m) {
    var minNum = 0
    var maxNum = 0
    if (n < m) {
        minNum = n
        maxNum = m
    }
    if (m < n) {
        minNum = m
        maxNum = n
    }
    return [gcd(n, m), lcm(n, m)]
}