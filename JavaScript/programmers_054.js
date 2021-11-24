function solution(s) {
    var answer = s.length;
    for(let i = 1; i < parseInt(s.length / 2) + 1; i++) {
        var result = ''
        var temp = s.slice(0, i)
        var count = 1
        for(let j = i; j < s.length; j+=i) {
            if(temp === s.slice(j, j+i)) {
                count++;
            } else {
                if (count > 1) {
                    result += count + temp
                } else {
                    result += temp
                }
                temp = s.slice(j, j+i)
                count = 1
            }
        }

        if (count > 1) {
            result += count + temp
        } else {
            result += temp
        }

        if (result.length < answer) {
            answer = result.length
        }
    }
    return answer;
}