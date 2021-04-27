from typing import List

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# 내가 푼 풀이 40ms
class Solution_one:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        a: List = []
        n1 = l1
        n2 = l2

        while n1 is not None:
            a.append(n1.val)
            n1 = n1.next
        
        while n2 is not None:
            a.append(n2.val)
            n2 = n2.next
        a.sort()
        
        node = temp = ListNode()
        
        for i in a:
            temp.next = ListNode(i)
            temp = temp.next
            
        return node.next

# 재귀 구조로 연결 40ms
class Solution_two:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        if (not l1) or (l2 and l1.val > l2.val):
            # l1이 더 크다면 swap
            l1, l2 = l2, l1
        if l1:
            l1.next = self.mergeTwoLists(l1.next, l2)
        return l1