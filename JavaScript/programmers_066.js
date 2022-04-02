//LV.2 뉴스 클러스터링

function getSub(str) {
  let result = [];
  for (let i = 0; i < str.length - 1; i++) {
    let node = str[i] + str[i + 1];
    if (node.match(/[A-Za-z]{2}/)) result.push(node);
  }
  return result;
}

function solution(str1, str2) {
  let s1Comb = getSub(str1.toLowerCase());
  let s2Comb = getSub(str2.toLowerCase());
  let sets = Array.from(new Set([...s1Comb, ...s2Comb]));
  let union = 0;
  let interesction = 0;
  for (let set of sets) {
    const s1Set = s1Comb.filter((item) => item === set).length;
    const s2Set = s2Comb.filter((item) => item === set).length;
    union += Math.max(s1Set, s2Set);
    interesction += Math.min(s1Set, s2Set);
  }

  return union === 0 ? 65536 : Math.floor((65536 * interesction) / union);
}
