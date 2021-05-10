def solution(n, a, b):
    num = n
    answer = 0

    while a != b:
        a = (a+1) // 2
        b = (b+1) // 2
        answer += 1

    return answer