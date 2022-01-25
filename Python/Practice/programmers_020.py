def solution(a, b):
    answer = 0
    for a, b in zip(a, b):
        answer += a*b
    return answer

# 간단하게 줄인 코드
def solution(a, b):
    return sum([x*y for x, y in zip(a,b)])