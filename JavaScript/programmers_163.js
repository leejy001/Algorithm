// LV.1 대충 만든 자판

function solution(keymap, targets) {
  let answer = [];
  const keyMap = {};
  keymap.forEach((map) => {
    for (let i = 0; i < map.length; i++) {
      if (keyMap[map[i]]) {
        let idx = Math.min(i + 1, keyMap[map[i]]);
        keyMap[map[i]] = idx;
      } else {
        keyMap[map[i]] = i + 1;
      }
    }
  });
  targets.forEach((target) => {
    let cnt = 0;
    for (let i = 0; i < target.length; i++) {
      let temp = keyMap[target[i]];
      if (temp) cnt += temp;
      else {
        cnt = -1;
        break;
      }
    }
    answer.push(cnt);
  });
  return answer;
}
