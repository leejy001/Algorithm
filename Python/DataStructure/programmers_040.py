def solution(prices):
    answer = []

    for i in range(len(prices)):
        count = 1
        for j in range(i+1,len(prices)):
            if (prices[i] > prices[j]) or (j == len(prices)-1):
                answer.append(count)
                break
            else:
                count += 1
    answer.append(0)
    return answer

# 더 줄여본 코드
def solution(prices):
    answer = [0] * len(prices)
    for i in range(len(prices)):
        for j in range(i+1, len(prices)):
            if prices[i] <= prices[j]:
                answer[i] += 1
            else:
                answer[i] += 1
                break
    return answer

# 주식 가격이 처음으로 떨어지는 지점 계산
def solution(p):
    ans = [0] * len(p)
    stack = [0]
    for i in range(1, len(p)):
        print(stack, ans)
        if p[i] < p[stack[-1]]:
            for j in stack[::-1]:
                if p[i] < p[j]:
                    ans[j] = i-j
                    stack.remove(j)
                else:
                    break
        stack.append(i)
    for i in range(0, len(stack)-1):
        ans[stack[i]] = len(p) - stack[i] - 1
    return ans