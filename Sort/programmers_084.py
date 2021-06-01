def solution(citations):
    answer = 0
    num = len(citations)

    for mount in range(num + 1):
        cnt = 0
        for citation in citations:
            if citation - mount >= 0:
                cnt += 1
        if cnt >= mount and answer < mount:
            answer = mount

    return answer


# 역발상
def solution(citations):
    citations = sorted(citations)
    l = len(citations)
    for i in range(l):
        if citations[i] >= l-i:
            return l-i
    return 0