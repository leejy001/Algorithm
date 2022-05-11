// LV3. [1차] 셔틀버스

function toMinute(time) {
    let result = 0
    let [hour, minute] = time.split(':')
    result += Number(hour * 60) + Number(minute)
    return result
}

function solution(n, t, m, timetable) {
    let time = toMinute('09:00')
    let people = timetable.map((item) => toMinute(item)).sort((a,b) => a - b)
    
    for(let i = 0; i < n; i++) {
        let getIn = people.filter((item) => item <= time).length;
        if(i === n - 1) {
            if(getIn >= m) time = people[m - 1] - 1;
        } else {
            people.splice(0, getIn > m ? m : getIn)
            time += t
        }
    }
    return `${String(Math.floor(time/60)).padStart(2, "0")}:${String(Math.floor(time%60)).padStart(2, "0")}` 
}