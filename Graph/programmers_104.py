# 내 풀이 (DFS)
def solution(n, computers):
    answer = 0
    visit = [False for _ in range(n)]

    while False in visit:
        for com in range(n):
            if visit[com] == False:
                dfs(n, com, visit, computers)
                answer += 1

    return answer

def dfs(n, com, visit, computers):
    visit[com] = True
    for i in range(n):
        if computers[com][i] == 1 and visit[i] == False:
                dfs(n, i, visit, computers)


# BFS
def solution(n, computers):
    answer = 0
    visit = [False for _ in range(n)]
    que = []
    while visit.count(False) != 0:
        v = visit.index(False)
        que.append(v)
        while que:
            visited = que.pop(0)
            visit[visited] = True
            
            for i in range(n):
                if computers[visited][i] == 1 and visit[i] == False:
                    que.append(i)
                    visit[i] = True
        answer += 1
    return answer