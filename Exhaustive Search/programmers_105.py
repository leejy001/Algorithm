# teat case 부족!!!

# BFS
def compare (a, b):
    cnt = 0
    for i in range(len(a)):
        if a[i] != b[i]:
            cnt += 1
    if cnt == 1:
        return True
    else:
        return False
    
def solution(begin, target, words):
    if target not in words:
        return 0
    
    dist = {begin: 0}
    que = [begin]
    
    while que:
        b_word = que.pop(0)
        for word in words:
            if compare(b_word, word) and word not in dist:
                dist[word] = dist[b_word] + 1
                que.append(word)
                
    
    return dist.get(target, 0)