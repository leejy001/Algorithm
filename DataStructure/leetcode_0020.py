# 스택 일치 여부 판별

class Solution:
    def isValid(self, s: str) -> bool:
        di = {')':'(', '}':'{', ']':'['}
        st = []
        for i in range(len(s)):
            if st and di.get(s[i]):
                if st.pop() != di[s[i]]:
                    return False
            else:
                st.append(s[i])
        if st:
            return False
        else:
            return True