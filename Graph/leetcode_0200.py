from typing import List

# 내가 푼 코드 144ms
class Solution_one:
    def numIslands(self, grid: List[List[str]]) -> int:
        m = len(grid)
        n = len(grid[0])
        visited = [[False]*n for i in range(m)]
        dic = [[1,0],[-1,0],[0,1],[0,-1]]
        def dfs(x, y):
            visited[x][y] = True
            for i in range(4):
                nx = x + dic[i][0]
                ny = y + dic[i][1]
                if 0 <= nx < m and 0 <= ny < n:
                    if grid[nx][ny] == '1' and visited[nx][ny] == False:
                        dfs(nx, ny)
                        
        count = 0
        for i in range(m):
            for j in range(n):
                if grid[i][j] == '1' and visited[i][j] == False:
                    dfs(i, j)
                    count += 1
        return count


# 그래프 탐색 136ms
class Solution_two:
    def numIslands(self, grid: List[List[str]]) -> int:
        def dfs(x, y):
            if x < 0 or x >= len(grid) or y < 0 or y >= len(grid[0]) or grid[x][y] != '1':
                return
        
            grid[x][y] = '0'
            dfs(x+1, y)
            dfs(x-1, y)
            dfs(x, y-1)
            dfs(x, y+1)
        
        count = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == '1':
                    dfs(i, j)
                    count += 1
        return count