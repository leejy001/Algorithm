from typing import List

# set을 이용한 풀이 44ms
class Solution_one:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        return list(set(nums1) & set(nums2))


# 부르트 포스 128ms
class Solution_two:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        result: Set = set()
        for n1 in nums1:
            for n2 in nums2:
                if n1 == n2:
                    result.add(n1)
        return result


# 이진 검색 이용 36ms
class Solution_three:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        result: Set = set()
        nums2.sort()
        for n1 in nums1:
            l2 = bisect.bisect_left(nums2, n1)
            if len(nums2) > 0 and len(nums2) > l2 and n1 == nums2[l2]:
                result.add(n1)
        return result


# 투 포인터 이용 44ms
class Solution_four:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        result: Set = set()
        nums1.sort()
        nums2.sort()
        
        i = j = 0
        while i < len(nums1) and j < len(nums2):
            if nums1[i] > nums2[j]:
                j += 1
            elif nums1[i] < nums2[j]:
                i += 1
            else:
                result.add(nums1[i])
                i += 1
                j += 1
                
        return result