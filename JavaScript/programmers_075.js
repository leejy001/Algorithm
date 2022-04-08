// LV.2 순위 검색

function combination(infoMap, arr, score, start) {
  const key = arr.join("");
  const value = infoMap[key];

  if (value) {
    infoMap[key].push(score);
  } else {
    infoMap[key] = [score];
  }

  for (let i = start; i < arr.length; i++) {
    const temp = [...arr];
    temp[i] = "-";
    combination(infoMap, temp, score, i + 1);
  }
}

function binarySearch(array, score) {
  let start = 0;
  let end = array.length;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] >= score) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return array.length - start;
}

function solution(info, query) {
  var answer = [];
  const infoMap = {};

  for (let infomation of info) {
    let splited = infomation.split(" ");
    let score = Number(splited.pop());
    combination(infoMap, splited, score, 0);
  }

  for (let key in infoMap) {
    infoMap[key] = infoMap[key].sort((a, b) => a - b);
  }

  for (let condition of query) {
    let splited = condition.replace(/ and /g, " ").split(" ");
    let score = Number(splited.pop());
    let key = splited.join("");
    let array = infoMap[key];

    if (array) {
      let result = binarySearch(array, score);
      answer.push(result);
    } else {
      answer.push(0);
    }
  }
  return answer;
}
