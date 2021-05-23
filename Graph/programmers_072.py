from collections import deque

def solution(maps):
    answer = 0
    h = len(maps)
    w = len(maps[0])
    visit = [[1 for i in range(w)] for j in range(h)]
    
    dx = [-1,1,0,0]
    dy = [0,0,1,-1]
    
    def bfs(x, y):
        queue = deque()
        queue.append((x,y))
        visit[x][y] = 0
        
        while queue:
            x, y = queue.popleft()
            for i in range(4):
                nx = x + dx[i]
                ny = y + dy[i]
                
                if nx < 0 or nx >= h or ny < 0 or ny >= w:
                    continue
                
                if maps[nx][ny] == 0:
                    continue
                
                if maps[nx][ny] == 1:
                    maps[nx][ny] = maps[x][y] + 1
                    visit[nx][ny] = 0
                    queue.append((nx,ny))
    bfs(0, 0)
    
    if visit[h-1][w-1] == 1:
        return -1
    
    return maps[h-1][w-1]