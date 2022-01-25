def solution(arr):
    answer = [0, 0]
    l = len(arr)
    
    def comp(x, y, l):
        init  = arr[x][y]
        for i in range(x, x+l):
            for j in range(y, y+l):
                if arr[i][j] != init:
                    l = l//2
                    comp(x, y, l)
                    comp(x, y+l, l)
                    comp(x+l, y, l)
                    comp(x+l, y+l, l)
                    return
        answer[init] += 1
    comp(0, 0, l)
    return answer