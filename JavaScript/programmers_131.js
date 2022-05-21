// LV3. 이중우선순위큐

function solution(operations) {
    var answer = [];
    for(let operation of operations) {
        const [commend, num] = operation.split(' ')
        if(commend === 'I') {
            answer.push(num)
            answer.sort((a,b) => {return b - a})
        } else if(commend === 'D' && num === '1') {
            answer.shift()
        } else if(commend === 'D' && num === '-1') {
            answer.pop()
        }
    }
    return [answer[0] ? Number(answer[0]) : 0, answer[answer.length - 1] ? Number(answer[answer.length - 1]) : 0]
}