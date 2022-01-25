# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# 내가 푼 풀이 (값만 교환) 28ms
class Solution_one:
    def swapPairs(self, head: ListNode) -> ListNode:
        cur = head
        
        while cur and cur.next:
            cur.val, cur.next.val = cur.next.val, cur.val
            cur = cur.next.next
            
        return head

# 반복 구조 풀이 28ms
class Solution_two:
    def swapPairs(self, head: ListNode) -> ListNode:
        root = prev = ListNode(None)
        prev.next = head
        while head and head.next:
	# head 1-(2-3-4)  head.next를 b로
	# b 2-(3-4)         b.next를 head.next로
	# head (1-3-4)     head를 전부 b.next로
	# b 2-1-3-4        swap된 b
            b = head.next
            head.next = b.next
            b.next = head
            # prev가 b를 가리키도록
            prev.next = b

            # 다음 번 비교를 위해 이동
            head = head.next
            prev = prev.next.next
        return root.next

# 재귀 구조 풀이 32ms
class Solution_three:
    def swapPairs(self, head: ListNode) -> ListNode:
        if head and head.next:
            p = head.next
            # 스왑된 값 리턴 받음
            head.next = self.swapPairs(p.next)
            p.next = head
            return p
        return head