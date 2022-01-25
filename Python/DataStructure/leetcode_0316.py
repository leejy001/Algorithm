# 재귀를 이용한 풀이 60ms
class Solution_one:
    def removeDuplicateLetters(self, s: str) -> str:
        for char in sorted(set(s)):
            suff = s[s.index(char):]
            
            if set(s) == set(suff):
                return char + self.removeDuplicateLetters(suff.replace(char, ''))
        return ''

# 스택을 이용한 풀이 48ms
class Solution_two:
    def removeDuplicateLetters(self, s: str) -> str:
        di, stack = {}, []
        
        for char in s:
            if di.get(char):
                di[char] += 1
            else:
                di[char] = 1
        
        for char in s:
            di[char] -= 1
            if char in stack:
                continue
            
            while stack and char < stack[-1] and di[stack[-1]] > 0:
                stack.pop()
            
            stack.append(char)
        
        return ''.join(stack)