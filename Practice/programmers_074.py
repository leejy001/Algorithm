def convert(n, base):
    T = "0123456789ABCDEF"
    q, r = divmod(n, base)
    if q == 0:
        return T[r]
    else:
        return convert(q, base) + T[r]

def solution(n, t, m, p):
    li = []
    num = 0
    while len(li) <= t*m:
        li += convert(num, n)
        num += 1

    answer = ''
    idx = p-1
    for i in range(t):
        answer += li[idx]
        idx += m
    return answer