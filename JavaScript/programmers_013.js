// 덧셈 풀이
function add_solution(x, n) {
    let arr = []
    let num = 0
    while(n--) {
        arr.push(num += x)
    }
    return arr
}

// 곱셈 풀이
function mul_solution(x, n) {
    var answer = [];
    for (let i = 1; i <= n; i++) {
        answer.push(x*i)
    }
    return answer;
}

// Array
function array_solution(x, n) {
    return Array(n).fill(x).map((x, i) => x * (i + 1)) 
}