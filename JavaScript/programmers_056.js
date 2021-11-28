function solution_diagonal(w, h) {
    var answer = 0;
    let slop = h / w;
    // 대각선 기준으로 한 방향에 위치한 모든 사각형 제거한 값
    for(let i = 1; i <= w; i++) {
        answer += Math.ceil(slop * i)
    }

    return ((w * h) - answer) * 2;
}

// 최소 공배수
function gcd(minNum, maxNum){
  return (minNum % maxNum) === 0 ? maxNum : gcd(maxNum, minNum % maxNum);
}

function solution_gcd(w, h){
    return w * h - (w + h - gcd(w, h))
}