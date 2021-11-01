function solution(phone_number) {
    var len = phone_number.length
    var number = phone_number.slice((len - 4), len)
    var answer = number.padStart(len, '*')
    return answer;
}