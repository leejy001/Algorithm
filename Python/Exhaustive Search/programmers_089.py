def solution(numbers, target):
    def dfs(num, level):
        nonlocal answer
        if level+1 == l:
            if num == target:
                answer += 1
            return
        first = [-num, num]
        level += 1
        if level == 1:
            dfs(first[0] + numbers[level], level)
            dfs(first[0] - numbers[level], level)
            dfs(first[1] + numbers[level], level)
            dfs(first[1] - numbers[level], level)
        else:
            dfs(num + numbers[level], level)
            dfs(num - numbers[level], level)
    answer = 0
    l = len(numbers)
    dfs(numbers[0], 0)
    return answer


# 초간단 풀이
def solution(numbers, target):
    if not numbers and target == 0 :
        return 1
    elif not numbers:
        return 0
    else:
        return solution(numbers[1:], target-numbers[0]) + solution(numbers[1:], target+numbers[0])