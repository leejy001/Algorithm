def solution(n, arr1, arr2):
    answer = []
    for i in range(n):
        line = str(bin(arr1[i]|arr2[i]))[2:].zfill(n)
        line = line.replace('1','#')
        line = line.replace('0',' ')
        answer.append(line)
    return answer

# 람다식...
solution = lambda n, arr1, arr2: ([''.join(map(lambda x: '#' if x=='1' else ' ', "{0:b}".format(row).zfill(n))) for row in (a|b for a, b in zip(arr1, arr2))])