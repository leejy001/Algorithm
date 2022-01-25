def solution(n):
    answer = 0
    for i in range(1, n):
        num = i
        snum = 0
        while snum < n:
            snum += num
            num += 1
        if snum == n:
            answer += 1
    return answer + 1

# 공식 적용
def solution(num):
    return len([i for i in range(1, num+1, 2) if num % i is 0])