def solution(s):
    length = []
    for i in range(1, (len(s)//2)+2):
        result = ''
        cnt = 1
        temp = s[:i]
        for j in range(i, len(s), i):
            if s[j:j+i] == temp:
                cnt += 1
            else:
                if cnt == 1:
                    cnt = ''
                result += str(cnt) + temp
                temp = s[j:j+i]
                cnt = 1
        if cnt == 1:
            cnt = ''
        result += str(cnt) + temp
        length.append(len(result))
        
    return min(length)