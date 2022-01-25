def calc(op, a, b):
    if op == '-':
        return a - b
    elif op == '+':
        return a + b
    elif op == '*':
        return a * b

def solution(expression):
    answer = 0
    op = [['-', '+', '*'], ['-', '*', '+'], ['+', '-', '*'], ['+', '*', '-'], ['*', '-', '+'], ['*', '+', '-']]
    li_op = []
    li_num = []
    num = ''
    
    for exp in expression:
        if exp.isdigit():
            num += exp
        else:
            li_num.append(int(num))
            li_op.append(exp)
            num = ''
    li_num.append(int(num))

    for i in range(6):
        _num = li_num
        _op = li_op
        
        for j in range(3):
            st_op = []
            st_num = []
            st_num.append(_num[0])
            
            for k in range(len(_op)):
                st_op.append(_op[k])
                st_num.append(_num[k + 1])
                
                if st_op[-1] == op[i][j]:
                    num1 = st_num.pop()
                    num2 = st_num.pop()
                    operand = st_op.pop()
                    st_num.append(calc(operand, num2, num1))
                    
            _num = st_num
            _op = st_op
            
        answer = max(answer, abs(st_num[-1]))
        
    return answer