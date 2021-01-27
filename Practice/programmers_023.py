def solution(s):
    answer = []
    for char in s.split(' '):
        idx = 0
        for i in char:
            if idx % 2 == 0:
                answer.append(i.upper())
            else:
                answer.append(i.lower())
            idx += 1
        answer.append(' ')
    
    answer.pop()
    return "".join(answer)

# 열거형 및 조건부 함수 이용
def solution(s):
    return " ".join(map(lambda x: "".join([a.lower() if i % 2 else a.upper() for i, a in enumerate(x)]), s.split(" ")))