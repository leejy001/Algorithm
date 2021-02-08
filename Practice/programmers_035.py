def solution(N, stages):
    answer = {}
    l = len(stages)
    for i in range(N):
        answer[i+1] = 0 if stages.count(i+1) == 0 else stages.count(i+1)/l
        l -= stages.count(i+1)
    answer = dict(sorted(answer.items(), key=lambda x: x[1], reverse=True))
    return [i for i in answer]