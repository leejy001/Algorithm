def solution(s):
    answer = 0
    for i in range(len(s)):
        s = s[1:] + s[:1]
        st = []
        for i in s:
            if i in '({[':
                st.append(i)
            elif st:
                if st[-1] == '(' and i == ')':
                    st.pop()
                elif st[-1] == '[' and i == ']':
                    st.pop()
                elif st[-1] == '{' and i == '}':
                    st.pop()
                else:
                    break
            else:
                st.append(i)
                break
                
        if len(st) == 0:
            answer += 1
    return answer
