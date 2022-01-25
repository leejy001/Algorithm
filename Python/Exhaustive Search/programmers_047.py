from itertools import permutations

def isPrime(n):
    k = n ** 0.5
    if n < 2:
        return False
    for i in range(2, int(k) + 1):
        if n % i == 0:
            return False
    return True

def solution(numbers):
    answer = []
    for i in range(1, len(numbers) + 1):
        perlist = list(set(map(''.join, permutations(list(numbers), i))))
        for num in perlist:
            if isPrime(int(num)):
                answer.append(int(num))
    return len(set(answer))