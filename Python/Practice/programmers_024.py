def solution(n):
    return sum([int(i) for i in str(n)])

# 재귀 이용
def sum_digit(number):
    if number < 10:
        return number;
    return (number % 10) + sum_digit(number // 10) 