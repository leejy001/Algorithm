def solution(array, commands):
    answer = []
    temp = []
    for i, j, k in commands:
        temp = array[i-1:j]
        temp.sort()
        answer.append(temp[k-1])
    return answer

# 간략화
def solution(array, commands):
    answer = []
    for i, j, k in commands:
        answer.append(list(sorted(array[i-1:j]))[k-1])
    return answer

# map, lamda 사용
def solution(array, commands):
    return list(map(lambda x:sorted(array[x[0]-1:x[1]])[x[2]-1], commands))