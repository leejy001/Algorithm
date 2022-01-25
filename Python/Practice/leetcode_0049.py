from typing import List

# defaultdict 이용 92ms
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        arr = collections.defaultdict(list)
        for word in strs:
            arr[''.join(sorted(word))].append(word)
        return list(arr.values())