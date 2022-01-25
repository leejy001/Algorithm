# 재귀구조 브루트포스

class Solution_one:
    def fib(self, n: int) -> int:
        if n <= 1:
            return n
        return self.fib(n-1) + self.fib(n-2)


# 메모이제이션 (하향식)

class Solution:
    dp = collections.defaultdict(int)
    
    def fib(self, n: int) -> int:
        if n <= 1:
            return n
        
        if self.dp[n]:
            return self.dp[n]
        self.dp[n] = self.fib(n-1) + self.fib(n-2)
        return self.dp[n]


# 타뷸레이션 (상향식)

class Solution:
    dp = collections.defaultdict(int)
    
    def fib(self, n: int) -> int:
        self.dp[1] = 1
        
        for i in range(2, n+1):
            self.dp[i] = self.dp[i - 1] + self.dp[i - 2]
        return self.dp[n]


# 두 변수만 이용

class Solution:
    def fib(self, n: int) -> int:
        x, y = 0, 1
        for i in range(0, n):
            x, y = y, x + y
        return x


# 행렬 (numpy)

class Solution:
    def fib(self, n: int) -> int:
        m = np.matrix([[0, 1], [1, 1]])
        vec = np.array([[0], [1]])
        return np.matmul(m ** n, vec)[0]