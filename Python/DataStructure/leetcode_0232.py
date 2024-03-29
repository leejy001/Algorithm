# 내가 푼 풀이 28ms
class MyQueue_one:

    def __init__(self):
        self.st = []
        
    def push(self, x: int) -> None:
        self.st.append(x)
        
    def pop(self) -> int:
        return self.st.pop(0)
        
    def peek(self) -> int:
        return self.st[0]
        
    def empty(self) -> bool:
        return len(self.st) == 0

# Stack 2개 활용 32ms
class MyQueue_two:

    def __init__(self):
        self.input = []
        self.output = []

    def push(self, x: int) -> None:
        self.input.append(x)
        
    def pop(self) -> int:
        self.peek()
        return self.output.pop()
        
    def peek(self) -> int:
        if not self.output:
            while self.input:
                self.output.append(self.input.pop())
        return self.output[-1]
        
    def empty(self) -> bool:
        return self.input == [] and self.output == []
        
# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()