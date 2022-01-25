def solution(n, lost, reserve):
    answer = n - len(lost)
    for i in range(1, n+1):
        if i in lost and i in reserve:
            answer += 1
            reserve.remove(i)
            lost.remove(i)
    for i in reserve:
        if i-1 in lost:
            answer += 1
            lost.remove(i-1)
        elif i+1 in lost:
            answer += 1
            lost.remove(i+1)
    
    return answer

# set 사용
def solution(n, lost, reserve): 
    reserve_del = set(reserve)-set(lost) 
    lost_del = set(lost)-set(reserve) 
    for i in reserve_del: 
        if i-1 in lost_del: 
            lost_del.remove(i-1) 
        elif i+1 in lost_del: 
            lost_del.remove(i+1) 

    return n-len(lost_del)

# 또 다른 풀이
def solution(n, lost, reserve):
    _reserve = [r for r in reserve if r not in lost]
    _lost = [l for l in lost if l not in reserve]
    for r in _reserve:
        f = r - 1
        b = r + 1
        if f in _lost:
            _lost.remove(f)
        elif b in _lost:
            _lost.remove(b)
    return n - len(_lost)