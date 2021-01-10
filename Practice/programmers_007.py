def solution(a, b):
    days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    week = ['FRI','SAT','SUN','MON','TUE','WED','THU']
    return week[(sum(days[:a-1])+b-1)%7]

# datetime 라이브러리 이용
def solution(a, b):
    date = 'MON TUE WED THU FRI SAT SUN'.split()
    return date[datetime.datetime(2016, a, b).weekday()]