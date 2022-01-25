from typing import List

# 반복 풀이 240ms
class Solution_one:
    def search(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums)-1
        while left <= right:
            mid = left + (right-left) // 2
            print(mid)
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        return -1


# 재귀 풀이 240ms
class Solution_two:
    def search(self, nums: List[int], target: int) -> int:
        def binary_search(left, right):
            if left <= right:
                mid = left + (right-left) // 2
            
                if nums[mid] < target:
                    return binary_search(mid + 1, right)
                elif nums[mid] > target:
                    return binary_search(left, mid - 1)
                else:
                    return mid
            else:
                return -1   
     
        return binary_search(0, len(nums)-1)


# 이진 검색 모듈 이용 236ms
class Solution_three:
    def search(self, nums: List[int], target: int) -> int:
        index = bisect.bisect_left(nums, target)
        
        if index < len(nums) and nums[index] == target:
            return index
        else:
            return -1