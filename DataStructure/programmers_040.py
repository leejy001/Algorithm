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