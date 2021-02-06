def solution(d, budget):
    d.sort()
    cnt = 0
    for idx in d:
        budget -= idx
        if budget >= 0:
            cnt += 1
    return cnt

# sum 이용
def solution(d, budget):
    d.sort()
    while budget < sum(d):
        d.pop()
    return len(d)