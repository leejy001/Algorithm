// 반복문
function solution(arr) {
    if (arr.length < 2) return [-1]
    var min = arr[0]
    for (let i = 1; i < arr.length; i++ ) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    var index = -1
    for (let i = 0; i < arr.length; i++ ) {
        if (arr[i] === min) {
            index = i
        }
    }
   return [...arr.slice(0, index), ...arr.slice(index+1, arr.length)]
}

// splice
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1)return[-1];
    return arr;
}