// 최대 공약수
const gcd = (a, b) => b ? gcd(b, a % b) : a;

// 최소 공배수
let lcm = a * b / gcd(a, b); 