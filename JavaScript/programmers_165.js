// LV.1 개인정보 수집 유효기간

function checkValid(cur, date, peroid) {
  let [cy, cm, cd] = cur.split(".").map(Number);
  let [dy, dm, dd] = date.split(".").map(Number);

  return ((cy - dy) * 12 + (cm - dm)) * 28 + (cd - dd) >= peroid * 28;
}

function solution(today, terms, privacies) {
  const answer = [];
  const valid = {};
  for (let term of terms) {
    let [kind, peroid] = term.split(" ");
    valid[kind] = peroid;
  }

  privacies.forEach((val, idx) => {
    let [date, kind] = val.split(" ");
    if (checkValid(today, date, valid[kind])) answer.push(idx + 1);
  });
  return answer;
}
