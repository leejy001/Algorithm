from itertools import combinations
from collections import Counter

def solution(orders, course):
    answer = []
    arr = []
    for cnt in course:
        brr = []
        for order in orders:
            for comb in combinations(order, cnt):
                res = ''.join(sorted(comb))
                brr.append(res)
        sort_counter = Counter(brr).most_common()
        answer += [menu for menu, cnt in sort_counter if cnt > 1 and cnt == sort_counter[0][1]]
    return sorted(answer)