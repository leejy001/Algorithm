def solution(left, right):
    answer = 0
    for num in range(left, right+1):
        if num**0.5 == int(num**0.5):
            answer -= num
        else:
            answer += num
    return answer


# 더 간소화 (이제 실행 시간은 더 걸리는...)
def solution(left, right):
    return sum([-num if int(num**0.5) == num**0.5 else num for num in range(left, right+1)])