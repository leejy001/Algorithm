function solution(a, b) {
    let answer = b
    let days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let week = ['THU', 'FRI','SAT','SUN','MON','TUE','WED']
    for(let i = 0; i < a - 1; i++) {
        answer += days[i]
    }
    return week[answer % 7];
}

// Date
function solution(a,b){
    var arr = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    var date = new Date(`2016-${a}-${b}`);
    var day = date.getDay()
    return arr[day];
}