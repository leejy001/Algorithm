// 2차원 배열
function solution(arr1, arr2) {
    var answer = [[]];
    for (let i = 0; i < arr1.length; i++) {
        answer[i] = [];
        for (let j = 0; j < arr1[i].length; j++) {
            answer[i].push(arr1[i][j] + arr2[i][j])
        }
    }
    return answer;
}

// map
function map_solution(arr1, arr2) {
    arr1.map((arr, i) => arr.map((arr, j) => arr2[i][j] += arr))
    return arr2
}