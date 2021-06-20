import collections

def solution(n, edge):
    answer = 0
    visit = [-1]*(n+1)
    graph = collections.defaultdict(list)
    for a, b in edge:
        graph[a].append(b)
        graph[b].append(a)
            
    que = collections.deque([(1, 0)])
    count = 0
    while que:
        val = que.popleft()
        v = val[0]
        count = val[1]
        if visit[v] == -1:
            visit[v] = count
            count += 1
            for e in graph[v]:
                que.append((e, count))
    
    for v in visit:
        if v == max(visit):
            answer += 1
            
    return answer