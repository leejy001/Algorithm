# 대소문자 전부 고려하여 비교
def solution(s):
    return s.count('P') + s.count('p') == s.count('Y') + s.count('y')

# 소문자 변환 뒤 비교
def solution(s):
    return s.lower().count('p') == s.lower().count('y')