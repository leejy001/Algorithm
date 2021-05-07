from itertools import combinations

def is_prime(num):
    if num <= 1:
        return False
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    return True

def solution(nums):
    answer = 0
    for c in combinations(nums, 3):
        num = sum(c)
        if is_prime(num):
            answer += 1
    return answer