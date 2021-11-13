function solution(left, right) {
    var answer = 0
    for(let i = left ; i <= right; i++) {
        var count = 0
        for(let j = 1; j <= i; j++) {
            if(i % j === 0) {
                count++;
            }
        }
        if(count % 2 == 0) {
            answer += i
        }else if(count % 2 != 0) {
            answer -= i
        }
    }
    return answer;
}

// 제곱근이 정수로 떨어진다면 약수는 홀수

function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}