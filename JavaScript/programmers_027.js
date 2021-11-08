function solution(arr)
{
    var answer = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === arr[i+1]) {
            continue
        }
        answer.push(arr[i])
    }
    return answer
}


// filter
function solution(arr)
{
    return arr.filter((val,index) => val != arr[index - 1]);
}