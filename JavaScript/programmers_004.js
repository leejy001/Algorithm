function solution(n) {
    var answer = 0;
    var num = n ** 0.5
    if (n % num === 0) {
        answer = Number((num + 1) ** 2)
    } else {
        answer = -1
    }
    return answer;
}