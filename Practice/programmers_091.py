def solution(s):
    st = []
    for ch in s:
        if ch == '(':
            st.append('(')
        elif st and ch == ')':
            st.pop()
        else:
            return False
    if len(st) == 0:
        return True
    else:
        return False

# 삼항 연산
def solution(s):
    x = 0
    for w in s:
        if x < 0:
            break
        x = x + 1 if w == "(" else x - 1 if w == ")" else x
    return x == 0