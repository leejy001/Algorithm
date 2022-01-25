def solution(str1, str2):
    num = 65536
    s1 = []
    s2 = []
    for i in range(0, len(str1)-1):
        if str1[i:i+2].isalpha():
            s1.append(str1[i:i+2].lower())
        
    for i in range(0, len(str2)-1):
        if str2[i:i+2].isalpha():
            s2.append(str2[i:i+2].lower())
    
    _union = set(s1) | set(s2)
    _intersection = set(s1) & set(s2)
    
    if len(_union) == 0:
        return num
    
    union_cnt = sum(max(s1.count(ch), s2.count(ch)) for ch in _union)
    intersection_cnt = sum(min(s1.count(ch), s2.count(ch)) for ch in _intersection)
    
    return int((intersection_cnt / union_cnt) * num)