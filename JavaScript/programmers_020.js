// 에라토스테네스의 채 (반복문)
function loop_solution(n){
    if(n == 2) return 1;
    let primes = [0,0];
    for (let i = 2; i <= n; i++) primes[i] = 1;
    for (let i = 2; i <= n; i++){
        if(!primes[i]) continue;
        for(let j = i * 2; j <= n; j += i) primes[j] = 0;
    }
    return primes.reduce((acc,cur) => acc + cur);
}

// 에라토스테네스의 채 (다른 풀이)
function array_solution(n){
  let num= [...Array(n).keys()]
  num[0] = 0
  for(let i = 2; i <= Number(n ** 0.5) + 1; i++){

    for (let j = 2 ; j <= (n - i) / i + 1; j++){
      num[ i * j - 1] = 0
    }
  }
  return num.filter(x=>Boolean(x)).length;
}

// 에라토스테네스의 채 (Set)
function set_solution(n) {
    let num = new Set();
    for(let i = 1;  i <= n; i += 2){
        num.add(i);
    }
    num.delete(1);
    num.add(2);
    for(let j=3; j < Math.sqrt(n); j++){
        if(num.has(j)){
             for(let k = j * 2; k <= n; k += j){    
                num.delete(k);
             }
        }
    }
    return num.size;
}