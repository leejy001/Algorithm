// LV.2 롤케이크 자르기

function solution(topping) {
  let answer = 0;
  const allTopping = new Map();
  const brother = new Map();

  topping.forEach((n) => {
    allTopping.set(n, (allTopping.get(n) || 0) + 1);
  });

  for (let t of topping) {
    allTopping.set(t, allTopping.get(t) - 1);

    brother.set(t, true);

    if (!allTopping.get(t)) allTopping.delete(t);
    if (allTopping.size === brother.size) answer++;

    if (allTopping.size < brother.size) break;
  }

  return answer;
}
