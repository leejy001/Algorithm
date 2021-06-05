def solution(number, k):
    num = list(number)
    stack = [num[0]]
    cnt = 0

    for i in range(1, len(num)):
        if cnt == k:
            stack = stack + num[i:]
            break
        stack.append(num[i])
        if stack[-1] > stack[-2]:
            while len(stack) != 1 and stack[-1] > stack[-2] and cnt < k:
                stack[-1], stack[-2] = stack[-2], stack[-1]
                stack.pop()
                cnt += 1
    return "".join(stack[:len(num)-k])


# 간소화
def solution(number, k):
    value = []
    for i in range(len(number)):
        while value and k > 0 and value[-1] < number[i]:
            value.pop()
            k = k - 1
        value.append(number[i])

    return ''.join(value[:len(value)-k])