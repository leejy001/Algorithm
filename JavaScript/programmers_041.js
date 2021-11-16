function solution(n, lost, reserve) {
    const students = {};
    let answer = 0;
    for(let i = 1; i <= n; i++) {
        students[i] = 1;
    }
    lost.map(item => students[item] -= 1);
    reserve.map(item => students[item] += 1);
    
    for(let i = 1; i <= n; i++) {
        if(students[i] === 2 && students[i-1] === 0) {
            students[i-1]++;
            students[i]--;
        } else if(students[i] === 2 && students[i+1] === 0) {
            students[i+1]++;
            students[i]--;
        }
    }
    
    for(let key in students) {
        if(students[key] !== 0) {
            answer++;
        }
    }
    
    return answer
}