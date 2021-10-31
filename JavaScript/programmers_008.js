// 삼항 연산자, 재귀 함수 이용
function solution(num, count = 0) {
    return num == 1 ? (count <= 500 ? count : -1) : solution(num % 2 == 0 ? num / 2 : num * 3 + 1, ++count)
}

// 반복문
function solution(num) {
    var answer = 0;
    while(num !=1 && answer !=500){
        num%2==0 ? num = num/2 : num = num*3 +1;
    answer++;
  }
    return num == 1 ? answer : -1;
}