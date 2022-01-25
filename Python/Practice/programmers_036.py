def solution(dartResult):
    answer = []
    score = ''
    for board in dartResult:
        if board.isnumeric():
            score += board
        elif board == 'S':
            answer.append(int(score)**1)
            score = ''
        elif board == 'D':
            answer.append(int(score)**2)
            score = ''
        elif board == 'T':
            answer.append(int(score)**3)
            score = ''
        elif board == '*':
            if len(answer) > 1:
                answer[-2]*=2
            answer[-1]*=2
        elif board == '#':
            answer[-1] *= -1
            
    return sum(answer)

# 정규 표현식 이용
import re

def solution(dartResult):
    bonus = {'S' : 1, 'D' : 2, 'T' : 3}
    option = {'' : 1, '*' : 2, '#' : -1}
    p = re.compile('(\d+)([SDT])([*#]?)')
    dart = p.findall(dartResult)
    for i in range(len(dart)):
        if dart[i][2] == '*' and i > 0:
            dart[i-1] *= 2
        dart[i] = int(dart[i][0]) ** bonus[dart[i][1]] * option[dart[i][2]]

    answer = sum(dart)
    return answer