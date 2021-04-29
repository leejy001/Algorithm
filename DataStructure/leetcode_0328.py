# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# 내가 푼 풀이 (반복 구조로 처리) 40ms
class Solution:
    def oddEvenList(self, head: ListNode) -> ListNode:
        if head is None:
            return
        
        oddNode = head
        evenNode = temp = head.next
        
        while evenNode and evenNode.next:
	# 짝수번 노드 다음을 홀수번 노드에, 다음다음을 다시 짝수번 노드에 연결
            oddNode.next, evenNode.next = evenNode.next, evenNode.next.next
	# 다음으로 이동
            oddNode = oddNode.next
            evenNode = evenNode.next
        
        oddNode.next = temp
        return head