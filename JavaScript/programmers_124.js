function parent(map, cost, name, amount) {
  if (amount >= 10) {
    cost[name] += amount - Math.floor(amount * 0.1);
    if (map[name] === "-") return;
    parent(map, cost, map[name], Math.floor(amount * 0.1));
  } else {
    cost[name] += amount;
    return;
  }
}

function solution(enroll, referral, seller, amount) {
  let map = {};
  let cost = {};
  for (let i in enroll) {
    map[enroll[i]] = referral[i];
    cost[enroll[i]] = 0;
  }

  for (let i in seller) {
    parent(map, cost, seller[i], amount[i] * 100);
  }

  return Object.values(cost);
}
