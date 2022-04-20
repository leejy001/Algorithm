// LV.2 스킬트리

function solution(skill, skill_trees) {
  var answer = 0;
  for (let skill_tree of skill_trees) {
    let arr = [...skill_tree];
    let sk = [...skill];
    let flag = true;
    for (let i = 0; i < arr.length; i++) {
      if (sk.includes(arr[i])) {
        let sArr = sk.shift();
        if (sArr !== arr[i]) {
          flag = false;
          break;
        }
      }
    }
    if (flag) answer++;
  }
  return answer;
}
