from typing import List

# 딕셔너리 이용 32ms
class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        words = [word for word in re.sub(r'[^\w]', ' ', paragraph).lower().split() if word not in banned]
        dic = {}
        for word in words:
            if dic.get(word):
                dic[word] += 1
            else:
                dic[word] = 1
        
        idx = 0
        word = None
        for k, v in dic.items():
            if v > idx:
                idx = v
                word = k

        return word

# counter 이용 36ms
class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        words = [word for word in re.sub(r'[^\w]', ' ', paragraph).lower().split() if word not in banned]
        counts = collections.Counter(words)
        # [(key, value)] = [0][0] = key
        return counts.most_common(1)[0][0]