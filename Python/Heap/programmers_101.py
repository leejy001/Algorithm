# no heapq
def solution(operations):
    arr = []
    for operation in operations:
        cmd, num = operation.split()
        if cmd == "I":
            arr.append(int(num))
        elif arr and cmd == "D" and num == "1":
            arr.remove(max(arr))
        elif arr and cmd == "D" and num == "-1":
            arr.remove(min(arr))
    
    return [max(arr), min(arr)] if arr else [0,0]

# heapq
import heapq
def solution(operations):
    heap = []
    
    for operation in operations:
        cmd, num = operation.split()
        num = int(num)
        if cmd == 'I':
            heapq.heappush(heap, num)
        else:
            if len(heap) == 0:
                pass
            elif num == 1:
                max_value = heapq.nlargest(1, heap)
                heap = heapq.nlargest(len(heap), heap)[1:]
                heapq.heapify(heap)
            elif num == -1:
                min_value = heapq.heappop(heap)
        
    return heapq.nlargest(1, heap) + [heapq.heappop(heap)] if heap else [0,0]