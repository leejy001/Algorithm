# DFS 반복 풀이
import collections

def solution(tickets):
    answer = []
    stack = ["ICN"]
    graph = collections.defaultdict(list)
    for a, b in sorted(tickets, reverse=True):
        graph[a].append(b)
        
    while stack:
        while graph[stack[-1]]:
            stack.append(graph[stack[-1]].pop())
        answer.append(stack.pop())
        
    return answer[::-1]