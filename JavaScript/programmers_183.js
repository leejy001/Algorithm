// LV.2 혼자 놀기의 달인

function solution(cards) {
  const answer = [];
  cards.forEach((v, i) => {
    let idx = i;
    let count = 0;
    while (true) {
      if (cards[idx]) {
        const temp = cards[idx];
        cards[idx] = 0;
        idx = temp - 1;
        count++;
      } else {
        answer.push(count);
        break;
      }
    }
  });

  const sortArr = answer.filter((v) => v != 0).sort((a, b) => b - a);
  return sortArr.length > 1 ? sortArr[0] * sortArr[1] : 0;
}
