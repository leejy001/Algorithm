def solution(m, n, board):
    answer = 0
    board = list(map(list, zip(*board)))

    while True:
        flag = 0
        check = [b[:] for b in board]
        for i in range(1, n):
            for j in range(1, m):
                if board[i][j] == -1:
                    continue
                if board[i][j] == board[i][j-1] == board[i-1][j] == board[i-1][j-1]:
                    flag = 1
                    check[i][j], check[i][j-1], check[i-1][j], check[i-1][j-1] = 0,0,0,0

        if flag == 0:
            break

        for k, v in enumerate(check):
            cnt = v.count(0)
            answer += cnt
            board[k] = [-1]*cnt + [a for a in v if a!=0]

    return answer