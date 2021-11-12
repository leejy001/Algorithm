// set
function solution(numbers) {
    var numArr = []
    for(let i = 0; i < numbers.length - 1; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            numArr.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(numArr)]
    return answer.sort((a, b) => a - b);
}