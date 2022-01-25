def solution(x):
    sum = 0
    for n in str(x):
        sum += int(n)
    answer = True if x % sum == 0 else False
        
    return answer

# 간단하게 줄인 코드
def solution(x):
    return x % sum(int(n) for n in str(x)) == 0