def solution(genres, plays):
    answer = []
    g = {}
    s = {}
    for i in range(len(genres)):
        if genres[i] not in g.keys():
            g[genres[i]] = [(plays[i], i)]
            s[genres[i]] = plays[i]
        else:
            g[genres[i]].append((plays[i], i))
            s[genres[i]] += plays[i]

    for key in g.keys():
        g[key] = sorted(g[key], key=lambda x: (x[0], -x[1]))

    s = sorted(s.items(), key=lambda x: x[1], reverse=True)

    for key, val in s:
        if len(g[key]) >= 2:
            answer.append(g[key].pop())
            answer.append(g[key].pop())
        else:
            answer.append(g[key].pop())

    return [b for a, b in answer]