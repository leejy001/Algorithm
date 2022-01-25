from collections import deque

def solution(N, road, K):
    graph = {}
    dist = {i:500001 if i != 1 else 0 for i in range(1, N+1)}
    for v1, v2, cost in road:
        graph[v1] = graph.get(v1, []) + [(v2, cost)]
        graph[v2] = graph.get(v2, []) + [(v1, cost)]
    
    que = deque([1])
    
    while que:
        cur_node = que.popleft()
        for next_node, cost in graph[cur_node]:
            if dist[next_node] > dist[cur_node] + cost:
                dist[next_node] = dist[cur_node] + cost
                que.append(next_node)

    return len([True for dist in dist.values() if dist <= K])