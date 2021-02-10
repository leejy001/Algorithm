def solution(priorities, location):
    answer = 0
    p_list = [(p, i) for i, p in enumerate(priorities)]
    
    while len(p_list):
        p = p_list.pop(0)
        if p_list and max(p_list)[0] > p[0]:
            p_list.append(p)
        else:
            answer += 1
            if p[1] == location:
                break
        
    return answer

# deque 사용

def solution(priorities, location):
  answer = 0
  from collections import deque

  d = deque([(v,i) for i,v in enumerate(priorities)])

  while len(d):
      item = d.popleft()
      if d and max(d)[0] > item[0]:
          d.append(item)
      else:
          answer += 1
          if item[1] == location:
              break
  return answer

# location값을 빼주고 ans 값을 추가해주는 코드
def solution(p, l):
    ans = 0
    m = max(p)
    while True:
        v = p.pop(0)
        if m == v:
            ans += 1
            if l == 0:
                break
            else:
                l -= 1
            m = max(p)
        else:
            p.append(v)
            if l == 0:
                l = len(p)-1
            else:
                l -= 1
    return ans