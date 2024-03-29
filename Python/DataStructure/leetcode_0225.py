import collections

# deque을 이용하여 구현 24ms
class MyStack:

    def __init__(self):
        self.q = collections.deque()
        
    def push(self, x: int) -> None:
        self.q.append(x)
        
    def pop(self) -> int:
        return self.q.pop()
        
    def top(self) -> int:
        return self.q[-1]
       
    def empty(self) -> bool:
        if self.q:
            return False
        else:
            return True
        
# Your MyStack object will be instantiated and called as such:
# obj = MyStack()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.top()
# param_4 = obj.empty()