// 반복문
function solution(n)
{
    var answer = 0;

    var num = String(n)

    for (let i = 0; i < num.length; i++) {
        answer += Number(num[i])
    }

    return answer;
}


// split, reduce
function solution(n){
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}