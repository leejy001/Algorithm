def solution(arr):
    answer = []
    answer.append(arr[0])
    for i in range(1,len(arr)):
        if arr[i-1] != arr[i]:
            answer.append(arr[i])
    return answer

# 슬라이싱 사용
def solution(s):
    a = []
    for i in s:
        if a[-1:] == [i]: continue
        a.append(i)
    return a