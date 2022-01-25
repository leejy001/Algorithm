from bisect import bisect_left
from itertools import combinations

def make_all_cases(separate_info):
    cases = []
    for k in range(5):
        for condition in combinations([0,1,2,3], k):
            case = []
            for idx in range(4):
                if idx not in condition:
                    case.append(separate_info[idx])
                else:
                    case.append('-')
            cases.append(''.join(case))
    return cases

def solution(info, query):
    answer = []
    all_people = {}
    for i in info:
        seperate_info = i.split()
        cases = make_all_cases(seperate_info)
        for case in cases:
            if case not in all_people.keys():
                all_people[case] = [int(seperate_info[4])]
            else:
                all_people[case].append(int(seperate_info[4]))
    for key in all_people.keys():
        all_people[key].sort()
        
    for q in query:
        seperate_q = q.split(' and ')
        seperate_q.extend(seperate_q.pop().split())
        print(seperate_q)
        target = ''
        for sq in seperate_q[:4]:
            target += sq
        if target in all_people.keys():
            answer.append(len(all_people[target]) - bisect_left(all_people[target], int(seperate_q[4]), lo=0, hi=len(all_people[target])))
            print(len(all_people[target]), bisect_left(all_people[target], int(seperate_q[4]), lo=0, hi=len(all_people[target])))
        else:
            answer.append(0)
    return answer