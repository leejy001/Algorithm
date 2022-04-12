// LV.2 다리를 지나는 트럭

function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let queue = new Array(bridge_length).fill(0);
  let total = 0;
  while (truck_weights.length > 0) {
    if (weight >= total + truck_weights[0] - queue[0]) {
      let amount = truck_weights.shift();
      total += amount - queue.splice(0, 1);
      queue.push(amount);
    } else {
      queue.push(0);
      total -= queue.splice(0, 1);
    }
    answer++;
  }
  return answer + bridge_length;
}
