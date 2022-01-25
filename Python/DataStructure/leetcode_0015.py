from typing import List

# 부르트포스 풀이 (시간 초과)
class Solution_one:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        result=[]
        nums.sort()
        
        for i in range(len(nums)-2):
            if i > 0 and nums[i] == nums[i-1]:
                continue
            for j in range(i+1,len(nums)-1):
                if j > i+1 and nums[j] == nums[j-1]:
                    continue
                for k in range(j+1,len(nums)):
                    if k > j+1 and nums[k] == nums[k-1]:
                        continue
                    if nums[i]+nums[j]+nums[k] == 0:
                        result.append([nums[i], nums[j], nums[k]])
                        
        return result

# 두 포인터 방식 (스킵 조건 중요) 856ms
class Solution_two:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        results=[]
        nums.sort()
        
        for i in range(len(nums)-2):
            if i > 0 and nums[i] == nums[i-1]:
                continue
            left, right = i+1, len(nums)-1
            while left < right:
                add = nums[i]+nums[left]+nums[right]
                if add < 0:
                    left+=1
                elif add > 0:
                    right-=1
                else:
                    results.append([nums[i],nums[left],nums[right]])
                    
                    while left < right and nums[left] == nums[left + 1]:
                        left += 1
                    while left < right and nums[right] == nums[right - 1]:
                        right -= 1
                    left += 1
                    right -= 1

        return results