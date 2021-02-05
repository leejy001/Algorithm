def solution(arr1, arr2):
    for i in range(len(arr1)) :
        for j in range(len(arr1[0])):
            arr1[i][j] += arr2[i][j] 
    return arr1

# zip 이용
def solution(arr1, arr2):
    return [[a + b for a, b in zip(i, j)] for i, j in zip(arr1, arr2)]