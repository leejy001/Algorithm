// 아스키 코드 이용
function ascii_solution(s, n) {
    var answer = '';
    for (let i = 0 ; i < s.length; i++) {
        var num = 0
        if(s[i] === ' ') {
            answer += ' '
            continue
        }
        if(s[i] === s[i].toUpperCase()) {
            if (s[i].charCodeAt(0) + n > 90) {
                num = 64 + s[i].charCodeAt(0) + n - 90
                answer += String.fromCharCode(num)
            }
            if (s[i].charCodeAt(0) + n <= 90) {
                num = s[i].charCodeAt(0) + n
                answer += String.fromCharCode(num)
            }
        }
        if(s[i] === s[i].toLowerCase()) {
            if (s[i].charCodeAt(0) + n > 122) {
                num = 96 + s[i].charCodeAt(0) + n - 122
                answer += String.fromCharCode(num)
            }
            if (s[i].charCodeAt(0) + n <= 122) {
                num = s[i].charCodeAt(0) + n
                answer += String.fromCharCode(num)
            }
        }
    }
    return answer;
}

// 문자열을 이용한 처리
function str_solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';

    for(var i =0; i <s.length; i++){
        var char = s[i];
        if(char == ' ') {
            answer += ' '; 
            continue;
        }
        var charArr = upper.includes(char) ? upper : lower;
        var index = charArr.indexOf(char)+n;
        if(index >= charArr.length) index -= charArr.length;
        answer += charArr[index];
    }
    return answer;
}