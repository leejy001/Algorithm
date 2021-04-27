from collections import deque
from typing import List

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# 내가 푼 풀이 Deque() 사용 68ms
class Solution_one:
    def isPalindrome(self, head: ListNode) -> bool:
        deq = deque()
        node = head
        while node != None:
            deq.append(node.val)
            node = node.next

        while len(deq) > 1:
            right_val = deq.pop()
            left_val = deq.popleft()
            if right_val != left_val:
                return False
        return True

# 리스트 이용 160ms
class Solution_two:
    def isPalindrome(self, head: ListNode) -> bool:
        q: List = []
            
        if not head:
            return True
        
        node = head
        # 리스트 변환
        while node is not None:
            q.append(node.val)
            node = node.next
        
        # 판별
        while len(q) > 1:
            if q.pop(0) != q.pop():
                return False
        return True

# 런너 기법 사용 64ms
class Solution_three:
    def isPalindrome(self, head: ListNode) -> bool:
        rev = None
        slow = fast = head
        # 런너를 이용하여 역순 연결 리스트 구성 (다중 할당 사용)
        while fast and fast.next:
            fast = fast.next.next
            rev, rev.next, slow = slow, rev, slow.next
        # 길이가 홀수일 때
        if fast:
            slow = slow.next
            
        # 판별, slow 나머지 이동경로와 rev와 비교
        while rev and rev.val == slow.val:
            slow, rev = slow.next, rev.next
        return not rev