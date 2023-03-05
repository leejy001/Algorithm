// LV.1 카드 뭉치

function solution(cards1, cards2, goal) {
  let answer = "";
  for (let word of goal) {
    if (cards1[0] === word) cards1.shift();
    else if (cards2[0] === word) cards2.shift();
    else return "No";
  }
  return "Yes";
}
