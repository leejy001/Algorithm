def solution(n):
    c = format(n, "b").count('1')
    for m in range(n+1, 1000001):
        if c == format(m, "b").count('1'):
            return m
    return -1