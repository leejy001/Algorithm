def solution(people, limit):
    answer = len(people)
    _people = sorted(people, reverse=True)
    start, end = 0, len(people)-1
    while start < end:
        if _people[start]+_people[end] <= limit:
            end -= 1
            answer -= 1
        start += 1

    return answer