def gcd(a, b):
    if b > a:
        tmp = a
        a = b
        b = tmp
    while b > 0:
        c = b
        b = a % b
        a = c
    return a

def lcm(a, b):
    return a*b // gcd(a, b)

def solution(arr):
    answer = arr[0]
    if len(arr) == 1:
        return arr[0]
    
    for i in range(1, len(arr)):
        answer = lcm(answer, arr[i])
            
    return answer