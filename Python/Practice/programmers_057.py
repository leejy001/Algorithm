def solution(n, words):
    match = set()
    l = len(words)
    comp = words[0]
    match.add(words[0])
    
    for i in range(1, l):
        if comp[-1] == words[i][0]:
            if words[i] in match:
                return [(i%n)+1, (i//n)+1]
            match.add(words[i])
            comp = words[i]
        else:
            return [(i%n)+1, (i//n)+1]
        
    return [0, 0]

# 코드 간소화
def solution(n, words):
    for p in range(1, len(words)):
        if words[p][0] != words[p-1][-1] or words[p] in words[:p]: return [(p%n)+1, (p//n)+1]
    else:
        return [0,0]