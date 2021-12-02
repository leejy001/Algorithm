// 조합
const getComb_one = (arr, number) => {
	const result = []
	if (number === 1) return arr.map((item) => [item]);
	arr.forEach((fixed, index, arr) => {
		const rest = arr.slice(index + 1);
		const comb = getComb(rest, number - 1);
		const answer = comb.map((item) => [fixed, ...item]);
		result.push(...answer);
	});
	return result
}

console.log(getComb([1,2,3,4,5], 3))

// 조합2
const list = [1,2,3,4,5];
const result = [];

const getComb_two = (items, index, num) => {
  if(items.length === num) {
    result.push(items);
    return;
  }
  for (let i = index; i < list.length; i++) {
    getComb (`${items}${list[i]}`, i + 1, num);
  }
}

getComb ('', 0, 3);
console.log(result);

// 순열
const getPermu_one = (arr, number) => {
	const result = []
	if (number === 1) return arr.map((item) => [item]);
	arr.forEach((fixed, index, arr) => {
		const rest = [...arr.slice(0, index), ...arr.slice(index+1)]
		const permu = getPermu(rest, number - 1);
		const answer = permu.map((item) => [fixed, ...item]);
		result.push(...answer);
	});
	return result
}

console.log(getPermu([1,2,3,4,5], 3))

// 순열2
const result = [];

const getPermu_two = (items, listCopy, num) => {
  if(items.length === num) {
    result.push(items);
    return;
  }
  for (let i = 0; i < listCopy.length; i ++) {
    getPermu(`${items}${listCopy[i]}`, listCopy.filter((v, j) => j !== i), num);
  }
}

getPermu('', [1,2,3,4,5], 3);
console.log(result);