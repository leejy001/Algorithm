class MyCircularQueue:

    def __init__(self, k: int):
        self.rq = [None]*k
        self.maxlen = k
        self.front, self.rear = 0, 0

    def enQueue(self, value: int) -> bool:
        if self.rq[self.rear] is None:
            self.rq[self.rear] = value
            self.rear = (self.rear + 1) % self.maxlen
            return True
        else:
            return False

    def deQueue(self) -> bool:
        if self.rq[self.front] is None:
            return False
        else:
            self.rq[self.front] = None
            self.front = (self.front + 1) % self.maxlen
            return True
        
    def Front(self) -> int:
        return -1 if self.rq[self.front] is None else self.rq[self.front] 

    def Rear(self) -> int:
        return -1 if self.rq[self.rear-1] is None else self.rq[self.rear-1]

    def isEmpty(self) -> bool:
        return self.front == self.rear and self.rq[self.front] is None

    def isFull(self) -> bool:
        return self.front == self.rear and self.rq[self.rear] is not None
        
# Your MyCircularQueue object will be instantiated and called as such:
# obj = MyCircularQueue(k)
# param_1 = obj.enQueue(value)
# param_2 = obj.deQueue()
# param_3 = obj.Front()
# param_4 = obj.Rear()
# param_5 = obj.isEmpty()
# param_6 = obj.isFull()