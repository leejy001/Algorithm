def solution(board):
    answer = 0
    row = len(board)
    colum=len(board[0])
    for i in range(row):
        for j in range(colum):
            if i==0 or j==0:
                continue
            if board[i][j]!=0:
                board[i][j]=min(board[i-1][j-1],min(board[i-1][j],board[i][j-1]))+1
    li=[]
    for i in range(row):
        li.append(max(board[i]))
    return max(li)**2