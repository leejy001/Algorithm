// LV.2 모음사전

function solution(word) {
  let arr = ["A", "E", "I", "O", "U"];
  let result = [];
  function getPermu(cur, idx) {
    if (idx === 6) return;
    result.push(cur);
    for (const next of arr) {
      getPermu(cur + next, idx + 1);
    }
  }

  arr.forEach((word) => {
    getPermu(word, 1);
  });

  return result.indexOf(word) + 1;
}
