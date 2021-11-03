// 반복문
function solution(n) {
    var answer = '';
    for (let i = 0; i < n; i++) {
        if(i % 2 === 0) {
            answer += '수'
        }
        if(i % 2 !== 0) {
            answer += '박'
        }
    }
    return answer;
}

// repeat
function solution(n) {
    return '수박'.repeat(n/2) + (n % 2 === 1 ? '수' : '');
}