# 내 풀이 (딕셔너리 사용) 32ms
class Solution_one:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        have = {}
        for stone in stones:
            if have.get(stone):
                have[stone] += 1
            else:
                have[stone] = 1
            
        cost = 0
        for jewel in jewels:
            if have.get(jewel):
                cost += have[jewel]
            else:
                continue
        return cost

# defaultdict을 이용한 비교 생략 32ms
class Solution_two:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        freqs = collections.defaultdict(int)
        count = 0
        
        # 비교 없이 돌(S) 빈도 수 계산
        for char in stones:
            freqs[char] += 1
            
        # 비교 없이 보석(J) 빈도 수 합산
        for char in jewels:
            count += freqs[char]          
        return count

# Counter로 계산 생략 36ms
class Solution_three:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        freqs = collections.Counter(stones)
        count = 0
            
        # 비교 없이 보석(J) 빈도 수 합산
        for char in jewels:
            count += freqs[char]         
        return count

# 파이썬다운 방식1 32ms
class Solution_four:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        return sum(stone in jewels for stone in stones)

# 파이썬다운 방식2 24ms
class Solution_five:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        return len([1 for s in list(stones) if s in list(jewels)])