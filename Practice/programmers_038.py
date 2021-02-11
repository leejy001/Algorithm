def solution(n):
    answer = ''
    while n != 0:
        remain = n % 3
        if remain == 0:
            answer = '4' + answer
            n = n // 3 - 1
        else:
            answer = str(remain) + answer
            n = n // 3
    return answer

# 문자열을 이용한 풀이
def solution(n):
    num = ['1','2','4']
    answer = ""

    while n > 0:
        n -= 1
        answer = num[n % 3] + answer
        n //= 3

    return answer