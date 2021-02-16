def solution(skill, skill_trees):
    answer = 0
    for skill_tree in skill_trees:
        res = []
        right = True
        for _skill in skill_tree:
            if _skill in skill:
                res.append(_skill)
        for i in range(len(res)):
            if res[i] != skill[i]:
                right = False
                break
        if right == True:
            answer += 1
    return answer

# for-else
def solution(skill, skill_trees):
    answer = 0

    for skill_tree in skill_trees:
        skill_list = list(skill)
        for s in skill_tree:
            if s in skill:
                if s != skill_list.pop(0):
                    break
        else:
            answer += 1

    return answer