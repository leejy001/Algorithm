function primeCheck(n){
    for(var i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0) {
            return false;
        }
    }
    return true;    
}

function solution(nums) {
    var answer = 0;

    const getComb = (arr, select) => {
        const result = []
        if(select === 1) return arr.map(item => [item]);

        arr.forEach((fixer, index, origin) => {
            const rest = origin.slice(index + 1);
            const comb = getComb(rest, select - 1);
            const atteched = comb.map((item) => [fixer, ...item]);
            result.push(...atteched);
        })
        return result;
    }

    var combNum = getComb(nums, 3)

    combNum.forEach((item) => {
        if(primeCheck(item.reduce((acc, cur) => {return acc + cur}, 0))) answer++;
    })

    return answer;
}