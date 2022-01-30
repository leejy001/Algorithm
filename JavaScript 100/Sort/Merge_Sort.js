let arr = [10, 11, 9, 2, 3, 6, 5, 4];

/*
  분할 과정
  [10, 11, 9, 2, 3, 6, 5, 4]
  [10, 11, 9, 2], [3, 6, 5, 4]
  [10, 11], [9, 2], [3, 6], [5, 4]
  [10], [11], [9], [2], [3], [6], [5], [4]
  정복 과정
  [10, 11], [2, 9], [3, 6], [4, 5]
  [2, 9, 10, 11], [3, 4, 5, 6]
  [2, 3, 4, 5, 6, 9, 10, 11]
*/

function MergeSort(arr) {
  let len = arr.length;
  let result = [];
  if (len <= 1) {
    return arr;
  }

  let mid = Number(len / 2);
  let left = MergeSort(arr.slice(0, mid));
  let right = MergeSort(arr.slice(mid));

  while (left.length !== 0 && right.length !== 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length !== 0) {
    result.push(left.shift());
  }

  while (right.length !== 0) {
    result.push(right.shift());
  }

  return result;
}

console.log(MergeSort(arr));
