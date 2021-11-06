// 정규식 이용, match
function solution(s){
    return (s.toLowerCase().match(/p/g) || []).length === (s.toLowerCase().match(/y/g) || []).length
}

// split
function numPY(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}