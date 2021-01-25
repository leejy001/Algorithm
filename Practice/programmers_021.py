def solution(s, n):
    s = list(s)
    for i in range(len(s)):
        if s[i].isupper():
            s[i] = chr((ord(s[i])-ord('A')+n)%26+ord('A'))
        elif s[i].islower():
            s[i] = chr((ord(s[i])-ord('a')+n)%26+ord('a'))
        
    return "".join(s)

# string 상수 사용
import string

def solution(s, n):
    answer = ""
    base = ""
    for c in s:
        if c in string.ascii_lowercase:
            base = string.ascii_lowercase
        elif c in string.ascii_uppercase:
            base = string.ascii_uppercase
        else:
            answer += c
            continue
        a = base.index(c) + n
        answer += base[a % len(base)]
    return answer