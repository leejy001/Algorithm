let arr = [10, 11, 9, 2, 3, 6, 5, 4];

/*
  // 분할
  pivot: 10
  [9, 2, 3, 6, 5, 4] + [10] + [11]
  pivot: 9
  [2, 3, 6, 5, 4] + [9] + [10] + [11]
  pivot: 2
  [2] + [3, 6, 5, 4] + [9] + [10] + [11]
  pivot: 3
  [2] + [3] + [6, 5, 4] + [9] + [10] + [11]
  pivot: 6
  [2] + [3] + [5, 4] + [6] + [9] + [10] + [11]
  pivot: 5
  [2] + [3] + [4] + [5] + [6] + [9] + [10] + [11]
  // 정복
  // return QuickSort(left: [4]).concat(pivot: 5, QuickSort(right: [ ]));
  [2] + [3] + [4, 5] + [6] + [9] + [10] + [11]
  // return QuickSort(left: [4, 5]).concat(pivot: 6, QuickSort(right: [ ]));
  [2] + [3] + [4, 5, 6] + [9] + [10] + [11]
  // return QuickSort(left: [ ]).concat(pivot: 3, QuickSort(right[4, 5, 6]));
  [2] + [3, 4, 5, 6] + [9] + [10] + [11]
  // return QuickSort(left: [ ]).concat(pivot: 2, QuickSort(right[3, 4, 5, 6]));
  [2, 3, 4, 5, 6] + [9] + [10] + [11]
  // return QuickSort(left: [2, 3, 4, 5, 6]).concat(pivot: 9, QuickSort(right: [ ]));
  [2, 3, 4, 5, 6, 9] + [10] + [11]
  // return QuickSort(left: [2, 3, 4, 5, 6, 9]).concat(pivot: 10, QuickSort(right: [11]));
  [2, 3, 4, 5, 6, 9, 10, 11]
*/

function QuickSort(arr) {
  let len = arr.length;

  if (len <= 1) {
    return arr;
  }

  let pivot = [arr.shift()];
  let left = [];
  let right = [];

  for (let i in arr) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  console.log(`left: ${left}\nright: ${right}\npivot: ${pivot}`);

  return QuickSort(left).concat(pivot, QuickSort(right));
}

console.log(QuickSort(arr));
