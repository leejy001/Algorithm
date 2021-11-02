function solution(n) {
    var answer = 0;

    for(let m = 1 ; m <= n ; m++){
        if(n % m === 0){
           answer = answer + m
        }
    }

    return answer;
}