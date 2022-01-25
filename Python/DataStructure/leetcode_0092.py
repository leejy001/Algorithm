# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# 내가 푼 풀이 (형 변환) 28ms
class Solution_one:
    def reverseBetween(self, head: ListNode, left: int, right: int) -> ListNode:
        l1 = []
        l1_left = []
        l1_right = []
        l1_mid = []
        
        while head:
            l1.append(head.val)
            head = head.next
        
        l1_left, l1_mid, l1_right = l1[:left-1], l1[left-1:right], l1[right:]
        l1_mid = l1_mid[::-1]
        l1 = l1_left + l1_mid + l1_right

        node = temp = ListNode()

        for i in l1:
            temp.next = ListNode(i)
            temp = temp.next
            
        return node.next

# 반복 구조로 노드 뒤집기 32ms
class Solution_two:
    def reverseBetween(self, head: ListNode, left: int, right: int) -> ListNode:
        if not head or left == right:
            return head
        
        root = start = ListNode(None)
        root.next = head
        
        for _ in range(left - 1):
            start = start.next
        
        end = start.next
        
        for _ in range(right - left):
            tmp, start.next, end.next = start.next, end.next, end.next.next
            start.next.next = tmp
            
        return root.next