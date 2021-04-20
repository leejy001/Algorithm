// 일반적인 풀이 292ms
class Solution:
    def isPalindrome(self, s: str) -> bool:
        ss = []
        for ch in s:
            if ch.isalnum():
                ss.append(ch.lower())
        
        while len(ss) > 1:
            if ss.pop(0) != ss.pop():
                return False
        
        return True

// Deque 이용한 풀이 52ms
class Solution:
    def isPalindrome(self, s: str) -> bool:
        ss: Deque = collections.deque()
        for ch in s:
            if ch.isalnum():
                ss.append(ch.lower())
        
        while len(ss) > 1:
            if ss.popleft() != ss.pop():
                return False
        
        return True

// 정규 표현식 이용한 풀이 36ms
class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = s.lower()
        s = re.sub('[^a-z0-9]', '', s)
        return s == s[::-1]