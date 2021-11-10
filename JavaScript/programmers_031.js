function solution(price, money, count) {
    var answer = 0;
    for(let i = 1; i <= count; i++) {
        answer += price * i
    }
    return money - answer > 0 ? 0 : answer - money
}

// 등차수열
function solution(price, money, count) {
    const cost = price * count * (count + 1) / 2 - money;
    return cost > 0 ? cost : 0;
}