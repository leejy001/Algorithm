function solution(x) {
    return (x % (x + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0)) === 0
}