from typing import List

# DFS 72ms
class Solution_one:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        graph = collections.defaultdict(list)
        for a, b in sorted(tickets, reverse=True):
            graph[a].append(b)
            
        route = []
        def dfs(s):
            while graph[s]:
                dfs(graph[s].pop())
            route.append(s)
        
        dfs('JFK')
        return route[::-1]

# 반복 구조 80ms
class Solution_two:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        graph = collections.defaultdict(list)
        for a, b in sorted(tickets, reverse=True):
            graph[a].append(b)
         
        route = []
        stack = ['JFK']
        while stack:
            while graph[stack[-1]]:
                stack.append(graph[stack[-1]].pop())
            route.append(stack.pop())
        
        return route[::-1]