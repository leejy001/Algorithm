function solution(numbers, target) {
    var answer = 0;
    var number = 0;
    var len = numbers.length;
    function dfs(idx, number) {
        if (len === idx) {
            if (number === target) answer++;
            return;
        }

        dfs(idx+1, number + numbers[idx]);
        dfs(idx+1, number - numbers[idx]);
    }
    dfs(0, 0);
    return answer;
}