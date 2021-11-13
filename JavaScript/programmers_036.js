function solution(d, budget) {
    var answer = 0;
    var i = 0;
    d = d.sort((a, b) => a - b)
    while(budget >= d[i]) {
        budget -= d[i++]
        answer++;
    }
    return answer;
}