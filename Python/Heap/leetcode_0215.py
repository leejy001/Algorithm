from typing import List

# heapq 68ms
class Solution_one:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        heap = []
        for num in nums:
            heapq.heappush(heap, -num)
        
        for _ in range(1, k):
            heapq.heappop(heap)         
        
        return -heapq.heappop(heap)


class Solution_two:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        heapq.heapify(nums)
        
        for _ in range(len(nums) - k):
            heapq.heappop(nums)         
        
        return heapq.heappop(nums)


# heapq nlargest 56ms
class Solution_three:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        return heapq.nlargest(k, nums)[-1]


# 정렬 52ms
class Solution_four:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        return sorted(nums, reverse=True)[k-1]