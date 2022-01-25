def solution(arr, divisor):
    answer = []
    for i in arr:
        if i % divisor == 0:
            answer.append(i)
        
    if len(answer) == 0:
        answer.append(-1)
    answer.sort()
    return answer

# 간단하게 줄인 코드
def solution(arr, divisor):
    return sorted([n for n in arr if n%divisor == 0]) or [-1]