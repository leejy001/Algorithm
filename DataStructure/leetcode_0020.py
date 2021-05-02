# 일반적인 풀이 44ms
class Solution_one:
    def isValid(self, s: str) -> bool:
        stack = []
        for i in s:
            if i in '({[':
                stack.append(i)
            elif i in ')}]':
                if len(stack) == 0:
                    return False
                elif i == ')' and stack.pop() == '(':
                    pass
                elif i == ']' and stack.pop() == '[':
                    pass
                elif i == '}' and stack.pop() == '{':
                    pass
                else:
                    return False
        if len(stack) != 0:
            return False
        return True

# 스택 일치 여부 판별 28ms
class Solution_two:
    def isValid(self, s: str) -> bool:
        di = {')':'(', '}':'{', ']':'['}
        st = []
        for i in range(len(s)):
            if st and di.get(s[i]):
                if st.pop() != di[s[i]]:
                    return False
            else:
                st.append(s[i])

        return len(st) == 0