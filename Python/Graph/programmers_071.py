# 처음 풀었을 때
def solution(dirs):
    xy = []
    x, y = 0, 0
    for go in dirs:
        if go == 'U' and y+1 <= 5:
            xy.append((x, y, x, y+1))
            y += 1
        elif go == 'D' and y-1 >= -5:
            xy.append((x, y, x, y-1))
            y -= 1
        elif go == 'R' and x+1 <= 5:
            xy.append((x, y, x+1, y))
            x += 1
        elif go == 'L' and x-1 >= -5:
            xy.append((x, y, x-1, y))
            x -= 1
    xy = list(set(xy))
    cnt = 0
    for i in range(len(xy)-1):
        for j in range(i, len(xy)):
            if xy[i][0] == xy[j][2] and xy[i][1] == xy[j][3] and xy[i][2] == xy[j][0] and xy[i][3] == xy[j][1]:
                cnt += 1

    return len(xy) - cnt


# 간소화
def solution(dirs):
    xy = set()
    dis = {'U': (0,1), 'D': (0, -1), 'R': (1, 0), 'L': (-1, 0)}
    x, y = 0, 0
    for go in dirs:
        nx, ny = x + dis[go][0], y + dis[go][1]
        if -5 <= nx <= 5 and -5 <= ny <= 5:
            xy.add((nx,ny,x,y))
            xy.add((x,y,nx,ny))
            x, y = nx, ny
            
    return len(xy)//2