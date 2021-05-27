def check(p):
    u = []
    try:
        for i in p:
            if i == '(':
                u.append('(')
            else:
                u.pop()
        return True
    except:
        return False

def split(p):
    cnt = 0
    for i in range(len(p)):
        if p[i] == '(':
            cnt += 1
        else:
            cnt -= 1
        if cnt == 0:
            break
    return p[:i+1], p[i+1:]

def convert (u):
    temp = ''
    for i in u:
        if i == '(':
            temp += ')'
        else:
            temp += '('
    return temp

def solution(p):
    answer = ''
    while len(p) != 0:
        u, p = split(p)
        if check(u):
            answer += u
        else:
            answer += '(' + solution(p) + ')' + convert(u[1:-1])
            break

    return answer


# 간소화
def solution(p):
    if p == '': 
        return p
    r = True
    c = 0
    
    for i in range(len(p)):
        if p[i] == '(': 
            c -= 1
        else: 
            c += 1
            
        if c > 0: 
            r = False
        if c == 0:
            if r:
                return p[:i+1] + solution(p[i+1:])
            else:
                return '('+solution(p[i+1:])+')'+''.join(['(' if x==')' else ')' for x in p[1:i]])