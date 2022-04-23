// LV.2 [3차] 파일명 정렬

function solution(files) {
  let answer = files.sort((a, b) => {
    let aHead = a.match(/^\D+/)[0].toLowerCase();
    let bHead = b.match(/^\D+/)[0].toLowerCase();
    if (aHead < bHead) return -1;
    if (bHead < aHead) return 1;

    return (
      a.match(/\d+/)[0].replace(/^0+/, "") -
      b.match(/\d+/)[0].replace(/^0+/, "")
    );
  });
  return answer;
}
