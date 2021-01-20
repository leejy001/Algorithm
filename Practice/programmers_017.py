def solution(seoul):
    answer = ''
    for s in range(len(seoul)):
        if seoul[s] == 'Kim':
            answer = '김서방은 ' + str(s) + '에 있다'
            
    return answer

# index 함수 이용
def solution(seoul):
    return "김서방은 {}에 있다".format(seoul.index('Kim'))