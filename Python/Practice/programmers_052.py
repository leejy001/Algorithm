def solution_one(absolutes, signs):
    answer = 0
    for a, s in zip(absolutes, signs):
        if s == True:
            answer += a
        else:
            answer -= a
    return answer

# 코드 간소화
def solution_two(absolutes, signs):
    return sum(a if s else -a for a, s in zip(absolutes, signs))