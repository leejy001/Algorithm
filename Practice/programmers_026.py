def solution(n):
    answer = n**0.5
    if answer % 1 == 0:
        return pow(answer+1, 2)
    return -1

# 조건부 함수 활용
def solution(n):
    return (int(n**0.5)+1)**2 if n**0.5 % 1 == 0 else -1 