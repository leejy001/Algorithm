function solution(answers) {
    var answer = [];
    var people = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]]
    var score = [0,0,0]
    
    for(let i = 0; i < people.length; i++) {
        for(let j = 0; j < answers.length; j++) {
            if(people[i][j % people[i].length] === answers[j]) score[i]++;
        }
    }
    
    for(let i = 0; i < score.length; i++) {
        if(score[i] === Math.max(...score)) answer.push(i+1)
    }
    
    return answer
    
}