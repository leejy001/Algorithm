// LV.3 불량 사용자

function Permu(arr, num) {
  let result = [];
  if (num === 1) return arr.map((item) => [item]);
  arr.forEach((fixed, index, arr) => {
    let rest = [...arr.slice(0, index), ...arr.slice(index + 1)];
    let permu = Permu(rest, num - 1);
    let answer = permu.map((item) => [fixed, ...item]);
    result.push(...answer);
  });
  return result;
}

function IsBan(userIds, banIds) {
  for (let i = 0; i < banIds.length; i++) {
    if (userIds[i].length === banIds[i].length) {
      for (let j = 0; j < banIds[i].length; j++) {
        if (banIds[i][j] !== "*" && userIds[i][j] !== banIds[i][j]) {
          return false;
        }
      }
    } else {
      return false;
    }
  }
  return true;
}

function solution(user_id, banned_id) {
  let userPermu = Permu(user_id, banned_id.length);
  let banArr = [];
  for (let user of userPermu) {
    if (IsBan(user, banned_id)) {
      banArr.push(user.sort());
    }
  }

  return new Set(banArr.join("|").split("|")).size;
}
