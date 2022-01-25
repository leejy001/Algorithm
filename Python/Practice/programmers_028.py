def get_distance(hand, num):
    location = {'1':(0,0), '2':(0,1), '3':(0,2),
                '4':(1,0), '5':(1,1), '6':(1,2),
                '7':(2,0), '8':(2,1), '9':(2,2),
                '*':(3,0), '0':(3,1), '#':(3,2)}
    num = str(num)
    x_hand, y_hand = location[hand]
    x_num, y_num = location[num]
    return abs(x_hand - x_num) + abs(y_hand - y_num)
    
def solution(numbers, hand):
    answer = ''
    left, right = '*', '#'
    only_left = [1,4,7]
    only_right = [3,6,9]
    hand = 'R' if hand == 'right' else 'L'
    for num in numbers:
        if num in only_left:
            answer += 'L'
            left = str(num)
            continue
        if num in only_right:
            answer += 'R'
            right = str(num)
            continue
        if num in [2,5,8,0]:
            l_dis = get_distance(left, num)
            r_dis = get_distance(right, num)
            if l_dis > r_dis:
                answer += 'R'
                right = str(num)
            elif l_dis < r_dis:
                answer += 'L'
                left = str(num)
            else:
                answer += hand
                if hand == 'R':
                    right = str(num)
                else:
                    left = str(num)

    return answer