let arr = [10, 11, 9, 2, 3, 6, 5, 4];
let bubbleSortArr = [];
let selectionSortArr = [];
let insertionSortArr = [];
let len = arr.length;

// 버블 정렬
for (let i = 0; i < len; i++) {
  bubbleSortArr.unshift(Math.max.apply(null, arr));
  arr.splice(arr.indexOf(Math.max.apply(null, arr)), 1);
}

// 선택 정렬
for (let i = 0; i < len; i++) {
  selectionSortArr.push(Math.min.apply(null, arr));
  arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1);
}

// 삽입 정렬
function searchIdx(sortArr, curValue) {
  for (let i in sortArr) {
    if (curValue < sortArr[i]) return i;
  }
  return sortArr.length;
}

for (let i = 0; i < len; i++) {
  let curValue = arr.shift();
  let idx = searchIdx(insertionSortArr, curValue);
  insertionSortArr.splice(idx, 0, curValue);
}

console.log(bubbleSortArr);
console.log(selectionSortArr);
console.log(insertionSortArr);
