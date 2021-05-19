from typing import List

# 브루트포스 풀이 172ms
class Solution_one:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        for mat in matrix:
            for m in mat:
                if target == m:
                    return True
        return False


# 부분 이진 검색 풀이 168ms
class Solution_two:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        for mat in matrix:
            left, right = 0, len(mat)-1
            while left <= right:
                mid = left + (right - left) // 2
                if mat[mid] < target:
                    left = mid + 1
                elif mat[mid] > target:
                    right = mid - 1
                else:
                    return True
        return False


# 첫 행의 뒤에서 부터 이진 검색 168ms
class Solution_three:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        if not matrix:
            return False
        
        row = 0
        col = len(matrix[0]) - 1
        
        while row <= len(matrix) - 1 and col >= 0:
            if target == matrix[row][col]:
                return True
	# 타켓이 작으면 왼쪽으로 이동
            elif target < matrix[row][col]:
                col -= 1
	# 타겟이 크면 아래로 이동
            elif target > matrix[row][col]:
                row += 1
        return False


# any() 함수를 이용한 풀이 148ms
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        return any(target in row for row in matrix)