def solution(clothes):
    answer = 0
    hq = {}
    for name in clothes:
        if hq.get(name[1]):
            hq[name[1]] += 1
        else:
            hq[name[1]] = 1

    answer = 1
    for i in hq:
        answer *= hq[i] + 1

    answer -= 1
    return answer