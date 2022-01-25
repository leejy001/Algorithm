def solution(answers):
    answer = []
    p1 = [1,2,3,4,5]
    p2 = [2,1,2,3,2,4,2,5]
    p3 = [3,3,1,1,2,2,4,4,5,5]
    counts = [0,0,0]
    for i in range(len(answers)):
        if p1[(i%5)] == answers[i]:
            counts[0] += 1
        if p2[(i%8)] == answers[i]:
            counts[1] += 1
        if p3[(i%10)] == answers[i]:
            counts[2] += 1
            
    for idx in range(3):
        if counts[idx] == max(counts):
            answer.append(idx+1)
    return answer

# enumerate 사용
def solution(answers):
    p1 = [1,2,3,4,5]
    p2 = [2,1,2,3,2,4,2,5]
    p3 = [3,3,1,1,2,2,4,4,5,5]
    counts = [0,0,0]
    result = []
    
    for idx, answer in enumerate(answers):
        if answer == p1[idx%len(p1)]:
            counts[0] += 1
        if answer == p2[idx%len(p2)]:
            counts[1] += 1
        if answer == p3[idx%len(p3)]:
            counts[2] += 1
            
    for idx, s in enumerate(counts):
        if s == max(counts):
            result.append(idx+1)
    return result

# 더 간결한 Code
def solution(answers):
    p = [[1, 2, 3, 4, 5],
         [2, 1, 2, 3, 2, 4, 2, 5],
         [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]
    s = [0,0,0]

    for q, a in enumerate(answers):
        for i, v in enumerate(p):
            if a == v[q % len(v)]:
                s[i] += 1
    return [i + 1 for i, v in enumerate(s) if v == max(s)] 