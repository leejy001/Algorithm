// LV.3 단속 카메라

function solution(routes) {
  routes.sort((a, b) => {
    return a[1] - b[1];
  });
  let answer = 0;
  let camera = -30001;

  for (let route of routes) {
    if (camera < route[0]) {
      answer += 1;
      camera = route[1];
    }
  }
  return answer;
}
