// LV.3 [1차] 추석 트래픽

function getTime (time) {
    let [hour, minute, second] = time.split(':')
    return hour * 3600000 + minute * 60000 + second * 1000
}

function solution(lines) {
    var answer = 0;
    let times = []
    for(let line of lines) {
        const [date, endTime, cost] = line.split(' ')
        let n = cost.replace('s', '') * 1000 - 1
        times.push([getTime(endTime) - n, getTime(endTime)])
    }
    for(let i = 0; i < times.length; i++) {
        let start = times[i][1]
        let end = times[i][1] + 1000
        let count = 0
        for(let j = i + 1; j < times.length; j++) {
            if(start <= times[j][0] && times[j][0] < end) {
                count += 1
            } else if(start <= times[j][1] && times[j][1] < end) {
                count += 1
            } else if(times[j][0] <= start && end <= times[j][1]) {
                count += 1
            }
        }
        if(answer < count) answer = count
    }
    return answer + 1;
}