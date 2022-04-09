// LV.2 후보키

function getComb(arr, num) {
  let result = [];
  if (num === 1) return arr.map((item) => [item].join(""));
  arr.forEach((fixed, index, arr) => {
    const rest = arr.slice(index + 1);
    const comb = getComb(rest, num - 1);
    const answer = comb.map((item) => [fixed, ...item].join(""));
    result.push(...answer);
  });
  return result;
}

function isUnique(tuple) {
  const tmp = tuple.map((item) => item.join(""));
  const set = new Set(tmp);

  return tmp.length === set.size ? true : false;
}

function solution(relation) {
  var answer = 0;
  let condition = [];
  let column = relation[0].length;
  let arr = [];

  for (let i = 0; i < column; i++) {
    arr.push(i);
  }

  for (let i = 1; i <= column; i++) {
    condition.push(...getComb(arr, i));
  }

  while (condition.length > 0) {
    const columns = condition.shift().split("");
    const tuple = relation.map((row) => columns.map((col) => row[col]));
    if (isUnique(tuple) === true) {
      answer += 1;

      const colComTmp = [];
      for (let i = 0; i < condition.length; i++) {
        columns.map((col) => {
          if (!condition[i].includes(col)) {
            colComTmp.push(condition[i]);
          }
        });
      }
      condition = colComTmp;
    } else {
      continue;
    }
  }

  return answer;
}
