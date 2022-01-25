from typing import List

# 두 포인터 방식 64ms
class Solution_one:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        left, right = 0, len(numbers)-1
        while numbers[left] + numbers[right] != target:
            if numbers[left] + numbers[right] < target:
                left += 1
            else:
                right -= 1
        
        return [left+1, right+1]


# 이진 검색 92ms
class Solution_two:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        for k, v in enumerate(numbers):
            left, right = k+1, len(numbers)-1
            expected = target - v
            
            while left <= right:
                mid = left + (right-left) // 2
                if numbers[mid] < expected:
                    left = mid + 1
                elif numbers[mid] > expected:
                    right = mid - 1
                else:
                    return k+1, mid+1


# 이진 검색 모듈 이용 68ms
class Solution_three:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        for k, v in enumerate(numbers):
            expected = target - v
            i = bisect.bisect_left(numbers, expected, k+1)
            if i < len(numbers) and numbers[i] == expected:
                return k+1, i+1