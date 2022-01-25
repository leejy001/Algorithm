def solution(n):
    answer = []
    board = [[0]*n for i in range(n)]
    x, y = -1, 0
    num = 1
    for i in range(n):
        for j in range(i, n):
            if i%3 == 0:
                x+=1
            if i%3 == 1:
                y+=1
            if i%3 == 2:
                x-=1
                y-=1
            board[x][y] = num
            num += 1
    for i in board:
        for j in i:
            if j != 0:
                answer.append(j)
    return answer