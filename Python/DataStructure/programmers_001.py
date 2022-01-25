def solution(board, moves):
    buket = []
    answer = 0
    for i in moves:
        for j in range(len(board)):
            if board[j][i-1] > 0:
                buket.append([board[j][i-1]])
                board[j][i-1] = 0
                if len(buket) > 1 and buket[-1] == buket[-2] :
                    answer += 1
                    buket = buket[:-2]
                break
    return answer * 2