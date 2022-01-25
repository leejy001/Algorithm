def solution(w,h):
    c_w = w
    c_h = h
    while c_w!=c_h:
        if c_w > c_h:
            c_w -= c_h
        else:
            c_h -= c_w
        
    return w*h - (w+h-c_w)

# gcd 이용
import math

def solution(w,h):
    return w*h - (w+h-math.gcd(w,h))