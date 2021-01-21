def solution(n):
    cnt = 0
    answer = [True] * (n+1)
    m = int(n ** 0.5)
    for i in range(2, m+1):
        if answer[i] == True:
            for j in range(i+i, n+1, i):
                answer[j] = False
    for i in range(2, n+1):
        if answer[i] == True:
            cnt+=1  
    return cnt

# set을 이용한 풀이
def solution(n):
    num=set(range(2,n+1))

    for i in range(2,int(n**0.5)+1):
        if i in num:
            num-=set(range(2*i,n+1,i))
    return len(num)