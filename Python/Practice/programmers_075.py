def solution(record):
    answer = []
    dic = {}
    IO = []
    for rec in record:
        if rec[:5] == "Enter":
            cmd, name, nickName = rec.split()
            dic[name] = nickName
            IO.append([name, "E"]) 
        elif rec[:5] == "Leave":
            cmd, name = rec.split()
            IO.append([name, "L"])
        elif rec[:6] == "Change":
            cmd, name, nickName = rec.split()
            dic[name] = nickName
    
    for io in IO:
        if io[1] == "E":
            answer.append(f"{dic[io[0]]}님이 들어왔습니다.")
        else:
            answer.append(f"{dic[io[0]]}님이 나갔습니다.")
            
    return answer


# 간소화
def solution(record):
    answer = []
    namespace = {}
    printer = {'Enter':'님이 들어왔습니다.', 'Leave':'님이 나갔습니다.'}
    for r in record:
        rr = r.split(' ')
        if rr[0] in ['Enter', 'Change']:
            namespace[rr[1]] = rr[2]

    for r in record:
        if r.split(' ')[0] != 'Change':
            answer.append(namespace[r.split(' ')[1]] + printer[r.split(' ')[0]])

    return answer