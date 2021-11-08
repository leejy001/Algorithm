function solution(dartResult) {
    var answer = [];
    var score = ''
    const reducer = (accumulator, curr) => accumulator + curr;
    
    for(let i = 0; i < dartResult.length; i++) {
        if(!isNaN(dartResult[i])) {
            score += dartResult[i]
        } else if (isNaN(dartResult[i])) {
            if(score) answer.push(Number(score))
            score = ''
            if (dartResult[i] === 'S') {
                answer[answer.length - 1] **= 1
            } else if (dartResult[i] === 'D') {
                answer[answer.length - 1] **= 2
            } else if (dartResult[i] === 'T') {
                answer[answer.length - 1] **= 3
            } else if (dartResult[i] === '*') {
                answer[answer.length - 2] *= 2
                answer[answer.length - 1] *= 2
            } else if (dartResult[i] === '#') {
                answer[answer.length - 1] *= -1
            }
        }
    }
    return answer.reduce(reducer);
}