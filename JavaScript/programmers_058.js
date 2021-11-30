function solution(progresses, speeds) {
    var answer = [0];
    var dev_days = [];
    dev_days = progresses.map((item, index) => Math.ceil((100 - item) / speeds[index]))
    console.log(dev_days);
    var max = 0
    for(let i = 0, j = -1; i < dev_days.length; i++) {
        if (max < dev_days[i]) {
            max = dev_days[i];
            answer[++j] = 1;
        } else if (max >= dev_days[i]) {
            answer[j] += 1;
        }
    }
    return answer;
}