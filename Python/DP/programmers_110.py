# bottom-up
def solution(triangle):
    for level in range(len(triangle) - 2, -1, -1):
        for i in range(len(triangle[level])):
            triangle[level][i] = max(triangle[level + 1][i] + triangle[level][i], triangle[level + 1][i + 1] + triangle[level][i])
    
    return triangle[0][0]

# top-down
def solution(triangle):
    triangle = [[0] + line + [0] for line in triangle]
    
    for i in range(1, len(triangle)):
        for j in range(1, i+2):
            triangle[i][j] += max(triangle[i-1][j-1], triangle[i-1][j])
            
    return max(triangle[-1])
