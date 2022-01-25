def solution(s):
    st = []
    
    if len(s)%2 == 1:
        return 0
    
    for i in s:
        if len(st) > 0 and st[-1] == i:
            st.pop()
            continue
        st.append(i)

    return 1 if len(st) == 0  else 0

