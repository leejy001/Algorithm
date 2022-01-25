# 반복구조
def solution_one(n, results):
    answer = 0
    score = [[0 for _ in range(n)] for _ in range(n)]

    for a, b in results:
        score[a - 1][b - 1] = 1
        score[b - 1][a - 1] = -1

    for i in range(n):
        for j in range(n):
            if score[i][j] == 1:
                for k in range(n):
                    if score[i][k] == 0 and score[j][k] == 1:
                        score[i][k] = 1
                        score[k][i] = -1
            if score[i][j] == -1:
                for k in range(n):
                    if score[i][k] == 0 and score[j][k] == -1:
                        score[i][k] = -1
                        score[k][i] = 1

    return len(['know' for s in score if s.count(0) == 1])


#DFS 반복
def solution_two(n, results):
    answer = 0
    score = [[0 for _ in range(n)] for _ in range(n)]

    for a, b in results:
        score[a - 1][b - 1] = 1
        score[b - 1][a - 1] = -1

    for player in range(n):
        wins = [idx for idx, res in enumerate(score[player]) if res == 1]
        while wins:
            loser = wins.pop()
            for idx, res in enumerate(score[loser]):
                if res == 1 and score[player][idx] == 0:
                    score[player][idx], score[idx][player] = 1, -1
                    wins.append(idx)

    return len(['know' for x in score if x.count(0) == 1])


# 해시 (import collections)
def solution_three(n, results):
    answer = 0
    wins = collections.defaultdict(set)
    loses = collections.defaultdict(set)
    
    for a, b in results:
        wins[a].add(b)
        loses[b].add(a)
        
    for i in range(1, n+1):
        for loser in wins[i]:
            loses[loser] |= loses[i]
        for winner in loses[i]:
            wins[winner] |= wins[i]
    
    for i in range(1, n+1):
        if len(wins[i]) + len(loses[i]) == n - 1:
            answer += 1
            
    return answer

