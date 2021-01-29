def solution(n):
    answer = list(str(n))
    answer.reverse()
    return list(map(int, answer))

# 간단하게 줄인 코드
def solution(n):
    return list(map(int, reversed(str(n))))

# 슬라이싱 활용
def solution(n):
    return [int(i) for i in str(n)][::-1]