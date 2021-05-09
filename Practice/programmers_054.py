def solution(lottos, win_nums):
    rank = [6,6,5,4,3,2,1]
    answer = []
    li = list(set(lottos).intersection(win_nums))
    first = len(li)+lottos.count(0)
    second = len(li)
    answer.append(rank[first])
    answer.append(rank[second])
    return answer