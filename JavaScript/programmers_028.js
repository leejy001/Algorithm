function solution(arr, divisor) {
    const result = arr.filter(value => value % divisor === 0)
    return result.length > 0 ? result.sort((a, b) => { return a - b; }) : [-1]
}