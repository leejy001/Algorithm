import math

def solution(progresses, speeds):
    answer = []
    complete = [math.ceil((100-a)/b) for a, b in zip(progresses, speeds)]
    front = 0
    for i in range(len(complete)):
        if complete[front] < complete[i]:
            answer.append(i-front)
            front = i
    answer.append(len(complete)-front)
    
    return answer

# 올림하는게 인상적이었던 코드
def solution(progresses, speeds):
    Q=[]
    for p, s in zip(progresses, speeds):
        if len(Q)==0 or Q[-1][0]<-((p-100)//s):
            Q.append([-((p-100)//s),1])
        else:
            Q[-1][1]+=1
    return [q[1] for q in Q]