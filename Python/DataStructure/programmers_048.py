import heapq

def solution(scoville, K):
    answer = 0
    h_list = []
    for num in scoville:
        heapq.heappush(h_list, num)
    while h_list[0] < K:
        try:
            heapq.heappush(h_list,heapq.heappop(h_list)+heapq.heappop(h_list)*2)
            answer += 1
        except:
            return -1
    return answer