import re

def solution(s):
    dic = {}

    # re 모듈 쓰지 않고 리스트로 출력
#     s1 = s.lstrip('{').rstrip('}').split('},{')
#     new_s = []
#     for i in s1:
#         new_s.append(i.split(','))

    s = list(map(int, re.sub('[^0-9,]','',s).split(',')))
    
    for i in s:
        if dic.get(i):
            dic[i] += 1
        else:
            dic[i] = 1

    return sorted(dic, key=lambda x: dic[x], reverse=True)