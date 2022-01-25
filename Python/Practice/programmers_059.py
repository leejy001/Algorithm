def solution(s):
    zero_count = 0
    count = 0
    while s != "1":
        zero_count += s.count("0")
        s.replace("0", "")
        s = s.count("1")
        s = format(s, 'b')
        count += 1
    return [count, zero_count]

# 간소화
def solution(s):
    a, b = 0, 0
    while s != '1':
        a += 1
        num = s.count('1')
        b += len(s) - num
        s = bin(num)[2:]
    return [a, b]