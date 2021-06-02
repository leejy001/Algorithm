def get_divisor(n):
    n = int(n)
    divisors = []

    for i in range(1, int(n**0.5) + 1):
        if (n % i == 0):            
            divisors.append((i, n//i))

    return divisors

def solution(brown, yellow): 
    div_list = get_divisor(yellow)
    for y, x in div_list:
        cost = (x * 2) + (y * 2) + 4
        if cost == brown:
            return [x + 2, y + 2]
    return -1


#간소화
def solution(brown, red):
    for i in range(1, int(red**(1/2))+1):
        if red % i == 0:
            if 2*(i + red//i) == brown-4:
                return [red//i+2, i+2]


#근의 공식
#import math

def solution(brown, yellow):
    term = math.sqrt((brown+4)**2 /4 - 4 * (brown + yellow))
    w = ((brown + 4) / 2 + term) / 2
    h = ((brown + 4) / 2 - term) / 2
    return [w,h]