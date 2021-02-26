# 내가 푼 풀이

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        h = {}
        max_len = start = 0
        for idx, char in enumerate(s):
            if char in h and start <= h[char]:
                start = h[char]+1
            else:
                max_len = max(max_len, idx - start + 1)
            h[char] = idx
        
        return max_len