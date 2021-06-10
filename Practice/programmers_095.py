# 재귀적 풀이 (시간 초과)
def fibo(n):
    if n < 2:
        return n
    return fibo(n-1) + fibo(n-2)


# 반복적 풀이
def fibo(n):
    if n < 2:
        return n
    a, b = 0, 1
    for i in range(n - 1):
        a, b = b, a + b
    return b

def solution(n):
    return fibo(n) % 1234567


# DP
def fibo(n):
    if n < 2:
        return n
    arr = [0 for _ in range(n+1)]
    arr[1] = 1
    for i in range(2, n+1):
        arr[i] = arr[i-1] + arr[i-2]
    return arr[n]

def solution(n):
    return fibo(n) % 1234567


# DP 재귀 (시간 초과)
def solution(n):
    arr = [-1 for _ in range(n+1)]
    def fibo(n):
        if n < 2:
            return n
        
        if arr[n] != -1:
            return arr[n]
        
        arr[n] = fibo(n-1) + fibo(n-2)
        return arr[n]

    return fibo(n) % 1234567