# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# 반복 구조 36ms
class Solution_one:
    def reverseList(self, head: ListNode) -> ListNode:
        node, prev = head, None
        
        while node:
	# next에 현재 노드를 제외한 다음 노드들이 연결되고
	# 현재 노드의 next를 prev를 가리킨다.
            next, node.next = node.next, prev
	# 현재 노드에 prev를 이동시키고
	# node는 next가 가리키는 곳으로 이동한다.
            prev, node = node, next
            
        return prev

# 재귀 구조 36ms
class Solution_two:
    def reverseList(self, head: ListNode) -> ListNode:
        def reverse(node: ListNode, prev: ListNode = None):
            if not node:
                return prev
            next, node.next = node.next, prev
            return reverse(next, node)
        
        return reverse(head)