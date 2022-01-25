# 진입점 기준
def solution(routes):
    routes.sort(key=lambda x:x[0])
    answer = 0
    start, end = routes.pop(0)
    equal = False
    for a, b in routes:
        if start <= a and a <= end and start <= b and b <= end:
            start, end = a, b
            equal = True
        elif start <= a and a <= end:
            start = a
            equal = True
        elif start <= b and b <= end:
            end = b
            equal = True
        else:
            start, end = a, b
            equal = False
            answer += 1
    return answer + 1

# 진출점 기준
def solution(routes):
    routes = sorted(routes, key=lambda x: x[1])
    last_camera = -30001

    answer = 0

    for route in routes:
        if last_camera < route[0]:
            answer += 1
            last_camera = route[1]

    return answer