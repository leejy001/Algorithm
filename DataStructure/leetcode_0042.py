from typing import List

# 두 포인터 이용
class Solution_one:
    def trap(self, height: List[int]) -> int:
        if not height:
            return 0

        left, right = 0, len(height)-1
        left_max, right_max = height[left], height[right]
        height_max = max(height)
        cost = 0

        while left_max != height_max or right_max != height_max:
            if left_max != height_max:
                left += 1
                if left_max > height[left]:
                    cost += (left_max - height[left])
                else:
                    left_max = height[left]
            if right_max != height_max:
                right -= 1
                if right_max > height[right]:
                    cost += (right_max - height[right])
                else:
                    right_max = height[right]
        
        if left == right:
            return cost
        else:
            for i in range(left, right+1):
                cost += (left_max - height[i])
            return cost

# 두 포인터 이용 (코드 간소화)
class Solution_two:
    def trap(self, height: List[int]) -> int:
        if not height:
            return 0
        
        cost = 0
        left, right = 0, len(height)-1
        left_max, right_max = height[left], height[right]
        
        while left < right:
            left_max, right_max = max(height[left], left_max), max(height[right], right_max)
            
            if left_max <= right_max:
                cost += left_max - height[left]
                left += 1
            else:
                cost += right_max - height[right]
                right -= 1
        return cost

# Stack 활용
class Solution:
    def trap(self, height: List[int]) -> int:
        stack = []
        cost = 0
        
        for i in range(len(height)):
            # 변곡점 만나는 경우
            print('stack :', stack)
            while stack and height[i] > height[stack[-1]]:
                # 스택에서 꺼냄
                top = stack.pop()
                print('top :',top, 'stack :',stack)
                if not len(stack):
                    break
                
                # 이전과의 차이만큼 물 높이 처리
                distance = i - stack[-1] - 1
                waters = min(height[i], height[stack[-1]]) - height[top]
                cost += distance * waters
                print('distance :',distance, 'waters :',waters, 'cost :', cost)
            stack.append(i)
        return cost
