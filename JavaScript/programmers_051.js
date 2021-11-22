function getDistance (cur, next) {
  const keyPad = {
    1: [0, 0], 2: [0, 1], 3: [0, 2],
    4: [1, 0], 5: [1, 1], 6: [1, 2],
    7: [2, 0], 8: [2, 1], 9: [2, 2],
    '*': [3, 0], 0: [3, 1], '#': [3, 2],
  }

  const curPos = keyPad[cur];
  const nextPos = keyPad[next];

  return Math.abs(curPos[0] - nextPos[0]) + Math.abs(curPos[1] - nextPos[1]);
};

function solution(numbers, hand) {
    var answer = '';
    var left = '*'
    var right = '#'
    var user_hand = ''

    var only_left = [1,4,7]
    var only_right = [3,6,9]
    var mid = [2,5,8,0]

    for(let i = 0; i < numbers.length; i++) {
        if(only_left.includes(numbers[i])) {
            answer += 'L'
            left = numbers[i]
        } else if(only_right.includes(numbers[i])) {
            answer += 'R'
            right = numbers[i]
        } else if(mid.includes(numbers[i])) {
            var l_dis = getDistance(left, numbers[i])
            var r_dis = getDistance(right, numbers[i])
            if (l_dis > r_dis) {
                answer += 'R'
                right = numbers[i]
            } else if (l_dis < r_dis) {
                answer += 'L'
                left = numbers[i]
            } else {
                if (hand === 'right') {
                    answer += 'R'
                    right = numbers[i]
                } else if (hand === 'left') {
                    answer += 'L'
                    left = numbers[i]
                }
            }
        }
    }
    return answer;
}