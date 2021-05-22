# no 정규표현식
def mat(id, file):
    head = ''
    number = ''
    tail = ''
    for i in range(len(file)):
        if file[i].isdigit():
            head = file[:i]
            file = file[i:]
            break;
    
    flag = 0
    for i in range(len(file)):
        if file[i].isalpha():
            flag = 1
            number = file[:i-1]
            tail = file[i-1:]
            break;
            
    if flag == 0:
        number = file[:]
    return [id, head, number, tail]
    
def solution(files):
    answer = []
    arr = []
    id = 0
    for file in files:
        id += 1
        arr.append(mat(id, file))
    
    arr = sorted(arr, key = lambda x : [x[1].lower(), int(x[2]), x[0]] )
    for a in arr:
        answer.append(''.join(a[1:]))
        
    return answer


# 정규표현식 사용
import re

def solution(files):
    a = sorted(files, key=lambda file : int(re.findall('\d+', file)[0]))
    b = sorted(a, key=lambda file : re.split('\d+', file.lower())[0])
    return b