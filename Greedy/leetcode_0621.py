from typing import List
from collections import Counter

# 딕셔너리 이용 396ms
class Solution_one:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        dic = {}
        for task in tasks:
            if dic.get(task):
                dic[task] += 1
            else:
                dic[task] = 1
        
        dic = sorted(dic.items(), key= lambda x : x[1])
        count = [d[1] for d in dic]
        max_freq = count.pop()
        bet = max_freq - 1
        idle = bet * n
        while count and idle > 0:
            idle -= min(bet, count.pop())
        return max(0, idle) + len(tasks)

# 우선 순위 큐 (Counter) 1124ms
class Solution_two:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        counter = collections.Counter(tasks)
        result = 0
        
        while True:
            sub_count = 0
            # n+1을 추출시 n+1개가 전부 나온다면 idle 없음
            for task, _ in counter.most_common(n+1):
                sub_count += 1
                result += 1
                
	    # task에 해당하는 값을 하나씩 제거
                counter.subtract(task)
                # 0 이하인 아이템을 목록에서 완전히 제거
                counter += collections.Counter()
            
            if not counter:
                break
            result += n - sub_count + 1
        
        return result