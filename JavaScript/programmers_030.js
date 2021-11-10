function solution(n, arr1, arr2) {
    var answer = [];
    for(let i = 0; i < n; i++) {
        answer.push(arr1[i] | arr2[i])
    }
    var map = answer.map(item => item.toString(2).padStart(n, 0))
    return map.map(item => item.replace(/0/g, ' ').replace(/1/g, '#'))
}