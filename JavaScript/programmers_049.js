function transpose(matrix) {
    return matrix.reduce((result, row) => row.map((_, i) => [...(result[i] || []), row[i]]), []);   
}

function solution(board, moves) {
    var answer = 0;
    let _board = transpose(board)
    let score = []
    moves.map(function(item) {
        for(let i = 0; i < _board[0].length; i++) {
            if(_board[item-1][i] !== 0) {
                if(score && score[score.length - 1] === _board[item-1][i]){
                    score.pop()
                    answer += 2
                } else {
                    score.push(_board[item-1][i])
                }
                _board[item-1][i] = 0
                break
            }
        }
    })
    return answer;
}