def solution(numbers):
    answer = []
    for number in numbers:
        n = 0
        while True:
            if bin(number ^ number + 2**n).count('1') <= 2:
                answer.append(number + 2**n)
                break
            n += 1
    return answer