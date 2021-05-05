# 내가 푼 방식 164ms
class MyHashMap_one:

    def __init__(self):
        self.dic = {}

    def put(self, key: int, value: int) -> None:
        self.dic[key] = value
        
    def get(self, key: int) -> int:
        num = self.dic.get(key)
        if num != None:
            return self.dic[key]
        else:
            return -1       

    def remove(self, key: int) -> None:
        if self.dic.get(key):
            del self.dic[key]
        else:
            return

# 리스트 이용 1596ms
class MyHashMap_two:

    def __init__(self):
        self.keys = []
        self.values = []
    
    def _get_key_index(self, key):
        if key in self.keys:
            i = 0
            while i < len(self.keys):
                if key == self.keys[i]:
                    break
                i += 1
        else:
            i = -1
        return i

    def put(self, key: int, value: int) -> None:
        i = self._get_key_index(key)
        if i != -1:
            self.values[i] = value
        else:
            self.keys.append(key)
            self.values.append(value)
            
    def get(self, key: int) -> int:
        i = self._get_key_index(key)
        value = -1
        if i != -1:
            value = self.values[i]
        return value
    
    def remove(self, key: int) -> None:
        i = self._get_key_index(key)
        value = None
        if i != -1:
            del self.keys[i]
            del self.values[i]


# 연결 리스트 이용 개별 체이닝 방식 224ms
# Definition for singly-linked list.
class ListNode:
    def __init__(self, key=None, value=None):
        self.key = key
        self.value = value
        self.next = None

class MyHashMap_three:
    # 초기화
    def __init__(self):
        self.size = 1000
        self.table = collections.defaultdict(ListNode)

    # 삽입
    def put(self, key: int, value: int) -> None:
        index = key % self.size
        # 인덱스에 노드가 없다면 삽입 후 종료
        if self.table[index].value is None:
            self.table[index] = ListNode(key, value)
            return

        # 인덱스에 노드가 존재하는 경우 연결 리스트 처리
        p = self.table[index]
        while p:
            # 조건1 : key가 같다면 value 업데이트
            if p.key == key:
                p.value = value
                return
            # 조건2 : p.next가 없다면 루프를 빠져나감
            if p.next is None:
                break
            p = p.next
            
        # p.next에 새 노드가 생성되며 연결
        p.next = ListNode(key, value)

    # 조회
    def get(self, key: int) -> int:
        index = key % self.size
        # 해당 index에 아무것도 없다면
        if self.table[index].value is None:
            return -1

        # 노드가 존재할때 일치하는 키 탐색
        p = self.table[index]
        while p:
            if p.key == key:
                return p.value
            p = p.next
        return -1

    # 삭제
    def remove(self, key: int) -> None:
        index = key % self.size
        # 해당 index에 아무것도 없다면
        if self.table[index].value is None:
            return

        # 인덱스의 첫 번째 노드일때 삭제 처리
        p = self.table[index]
        # 유일 노드라면 빈 노드 할당 아니라면 p.next로 넘겨줌
        if p.key == key:
            self.table[index] = ListNode() if p.next is None else p.next
            return

        # 연결 리스트 노드 삭제
        prev = p
        while p:
            if p.key == key:
                # 이전 노드 next를 p.next에 연결
                prev.next = p.next
                return
            prev, p = p, p.next

# Your MyHashMap object will be instantiated and called as such:
# obj = MyHashMap()
# obj.put(key,value)
# param_2 = obj.get(key)
# obj.remove(key)