from collections import deque
def solution(bridge_length, weight, truck_weights):
    answer = 0
    bridge = [0]*bridge_length
    while len(bridge) != 0:
        answer += 1
        bridge.pop(0)
        if truck_weights:
            if sum(bridge) + truck_weights[0] <= weight:
                bridge.append(truck_weights.pop(0))
            else:
                bridge.append(0)
    return answer

# 진짜 빨랐던 코드
def solution(bridge_length, weight, truck_weights):
    b, w, t = bridge_length, weight, truck_weights
    time = deque([1])
    wsum = deque([t[0]])
    sec = 0
    for v, i in enumerate(t[1:]):
        if i <= weight - sum(wsum):
                time.append(1)
                wsum.append(i)
                if sum(time) - time[0] == b:
                    sec += time.popleft()
                    wsum.popleft()
                continue
        if i <= weight - sum(wsum) + wsum[0]:
            sec += time.popleft()
            wsum.popleft()
            time.append(b - sum(time))
            wsum.append(i)
            continue
        while i > weight - sum(wsum):
            sec += time.popleft()
            wsum.popleft()
        time.append(b - sum(time))
        wsum.append(i)
    for i in time:
        sec += i
    return sec + b
