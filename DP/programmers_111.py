def solution(m, n, puddles):
    map = [[1] * m for _ in range(n)]

    for puddle in puddles:
        a, b = puddle[0] - 1, puddle[1] - 1
        map[b][a] = 0
        if a == 0:
            for i in range(b, n):
                map[i][a] = 0
        if b == 0:
            for i in range(a, m):
                map[b][i] = 0

    for i in range(1, n):
        for j in range(1, m):
            if map[i][j] != 0:
                map[i][j] = map[i - 1][j] + map[i][j - 1]

    return (map[n - 1][m - 1]) % 1000000007