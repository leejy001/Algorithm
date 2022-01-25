# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# 삽입 정렬? 1980ms
class Solution_one:
    def insertionSortList(self, head: ListNode) -> ListNode:
        cur = parent = ListNode(None)
        while head:
            while cur.next and cur.next.val < head.val:
                cur = cur.next
            cur.next, head.next, head = head, cur.next, head.next
            cur = parent
        return cur.next

# 최적화 168ms
class Solution_two:
    def insertionSortList(self, head: ListNode) -> ListNode:
        cur = parent = ListNode(0)
        while head:
            while cur.next and cur.next.val < head.val:
                cur = cur.next
            cur.next, head.next, head = head, cur.next, head.next
            
            if head and cur.val > head.val:
                cur = parent
        return parent.next