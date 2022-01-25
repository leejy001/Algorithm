# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# 내가 푼 풀이(자료형 변환) 68ms
class Solution_one:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        num1 = ''
        num2 = ''
        
        while l1 != None:
            num1 += str(l1.val)
            l1 = l1.next
            
        while l2 != None:
            num2 += str(l2.val)
            l2 = l2.next
            
        num1 = int(num1[::-1])+int(num2[::-1])

        node = temp = ListNode()
        if num1 == 0:
            temp.next = ListNode(0)
            
        while num1 > 0:
            n = int(num1%10)
            num1 = num1//10
            temp.next = ListNode(n)
            temp = temp.next
            
        return node.next


# 전가산기 구현 68ms
class Solution_two:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        root = head = ListNode(0)

        carry = 0
        while l1 or l2 or carry:
            sum = 0
            # 두 입력값의 합 계산
            if l1:
                sum += l1.val
                l1 = l1.next
            if l2:
                sum += l2.val
                l2 = l2.next
            print(sum)

            # 몫(자리올림수)과 나머지(값) 계산
	        # 7    몫 : 0, 나머지 : 7
	        # 7 -> 0   몫 : 1, 나머지 : 0   몫을 다음 계산으로 넘겨준다.
	        # 7 -> 0 -> 8   몫 : 0, 나머지 : 7 + 이전 몫 : 1
            carry, val = divmod(sum + carry, 10)
            head.next = ListNode(val)
            head = head.next

        return root.next