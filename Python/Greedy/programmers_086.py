def solution(name):
    answer = 0
    name = list(name)
    str = ['A']*len(name)
    idx = 0
    while True:
        ridx = 1
        lidx = 1
        if name[idx] != 'A':
            if ord(name[idx])-ord('A')>13:
                answer+=26-(ord(name[idx])-ord('A'))
            else:
                answer+=ord(name[idx])-ord('A')
            name[idx]='A'
        if name == str:
            break
        else:
            for i in range(1, len(name)):
                if name[idx+i]=='A':
                    ridx+=1
                else:
                    break
                if name[idx-i]=='A':
                    lidx+=1
                else:
                    break
            if ridx>lidx:
                answer+=lidx
                idx-=lidx
            else:
                answer+=ridx
                idx+=ridx

    return answer