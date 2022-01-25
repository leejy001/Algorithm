# 크루스칼 알고리즘
def solution(n, costs):
    costs.sort(key=lambda x : x[2])
    mst=[]
    p=[0]
    
    for i in range(1, n+1):
        p.append(i)
    
    def find(u):
        if u != p[u]:
            p[u] = find(p[u])
        return p[u]
    
    def union(u, v):
        root1 = find(u)
        root2 = find(v)
        p[root2] = root1
    
    tree_edges = 0
    mst_cost = 0
    
    while True:
        if tree_edges == n-1:
            break
        u, v, wt = costs.pop(0)
        if find(u) != find(v):
            union(u, v)
            mst.append((u, v))
            mst_cost += wt
            tree_edges += 1
    
    return mst_cost


# set 이용
def solution(n, costs):  
    answer = 0
    costs.sort(key=lambda x:x[2])
    routes = set([costs[0][0]])
    
    while n != len(routes):
        for node, cost in enumerate(costs):
            if cost[0] in routes and cost[1] in routes:
                continue
            if cost[0] in routes or cost[1] in routes:
                routes.update([cost[0], cost[1]])
                answer += cost[2]
                costs[node] = [-1, -1, -1]
                break
    return answer