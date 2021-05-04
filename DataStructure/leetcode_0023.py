from typing import List# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# 모든 연결리스트 순회하며 저장 후 리스트로 다시 만들어 리턴해주기 84ms
class Solution_one:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        arr = []
        for li in lists:
            while li:
                arr.append(li.val)
                li = li.next
        arr.sort()
        
        root = temp = ListNode()
        for i in arr:
            temp.next = ListNode(i)
            temp = temp.next
            
        return root.next

# 우선순위 큐를 이용하여 문제 해결 92ms
class Solution_one:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        root = result = ListNode(None)
        heap = []
        for i in range(len(lists)):
            if lists[i]:
                heapq.heappush(heap, (lists[i].val, i, lists[i]))
        print(heap)
        while heap:
            node = heapq.heappop(heap)
            idx = node[1]
            result.next = node[2]
            
            result = result.next
            if result.next:
                heapq.heappush(heap, (result.next.val, idx, result.next))
        
        return root.next
