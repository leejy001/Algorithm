def solution(n):
    answer = ''
    while n > 0:
        answer += str(int(n % 3))
        n = int(n / 3)
        
    return int(answer, 3)