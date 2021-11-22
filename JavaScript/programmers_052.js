function solution(new_id) {
    // step 1
    var answer = new_id.toLowerCase()
    // step 2
    answer = answer.replace(/[^\w-_.]+/g, '');
    // step 3
    answer = answer.replace(/[\.]{2,}/g, '.');
    // step 4
    answer = answer[0] === '.' ? answer.slice(1) : answer;
    answer = answer[answer.length - 1] === '.' ? answer.slice(0, answer.length - 1) : answer;
    // step 5
    answer = answer.length === 0 ? 'a' : answer;
    // step 6
    answer = answer.length >= 15 ? answer.slice(0, 15) : answer;
    answer = answer[14] === '.' ? answer.slice(0, 14) : answer;
    // step 7
    if(answer.length < 3) {
        answer = answer + answer[answer.length - 1].repeat(2);
        answer = answer.slice(0, 3);
    } 
    return answer;
}

// 정규식
const solution_regExp = (new_id) => {
    const id = new_id
        .toLowerCase()
        .replace(/[^\w\d-_.]/g, '')
        .replace(/\.{2,}/g, '.')
        .replace(/^\.|\.$/g, '')
        .padEnd(1, 'a')
        .slice(0, 15)
        .replace(/^\.|\.$/g, '')        
    return id.padEnd(3, id[id.length-1])
}