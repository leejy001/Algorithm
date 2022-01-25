def solution(numbers):
    answer = []
    for number in numbers:
        n = 0
        while True:
            # 0111 ^ 0111 + 0001, 0010, 0100, 1000
            if bin(number ^ number + 2**n).count('1') <= 2:
                answer.append(number + 2**n)
                break
            n += 1
    return answer