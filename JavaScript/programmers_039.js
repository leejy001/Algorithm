function solution(N, stages) {
    var result = new Array(N).fill(0)
    
    var len = stages.length;
    for (let val of stages) {
        result[val - 1]++
    }
    
    var failure = [];
    
    for (let i  = 0; i < N; i++) {
        if (len === 0) {
            failure.push({ failure: 0, stage: i + 1});
        } else if (len !== 0) {
            failure.push({ failure: result[i] / len, stage: i + 1});
        }
        len -= result[i]
    }
    
    return failure.sort((a, b) => b.failure - a.failure).map((item) => item.stage)
}