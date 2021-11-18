function solution(absolutes, signs) {
    var answer = absolutes.reduce((acc, cur, index) => { 
        if(signs[index]) {
            return acc + cur;    
        } else {
            return acc - cur;
        }}, 0);
    return answer;
}