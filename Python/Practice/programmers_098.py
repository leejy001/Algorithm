def solution(arr1, arr2):
    answer = [[0 for _ in range(len(arr2[0]))] for _ in range(len(arr1))]
    for i in range(len(arr1)):
        for j in range(len(arr2[0])):
            for k in range(len(arr1[0])):
                answer[i][j] += arr1[i][k]*arr2[k][j]
    return answer

# zip 이용
def solution(arr1, arr2):
    return [[sum(a * b for a, b in zip(one_row, two_col)) for two_col in zip(*arr2)] for one_row in arr1]