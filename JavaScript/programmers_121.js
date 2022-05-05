// LV.3 디스크 컨트롤러

function solution(jobs) {
  let answer = 0;
  let len = jobs.length;
  let jobsArr = jobs.sort((a, b) => a[0] - b[0]);
  let queue = [];
  let time = 0;
  let j = 0;

  while (jobsArr.length > j || queue.length !== 0) {
    if (jobsArr.length > j && time >= jobsArr[j][0]) {
      queue.push(jobsArr[j++]);
      queue.sort((a, b) => a[1] - b[1]);
    } else if (queue.length !== 0) {
      time += queue[0][1];
      answer += time - queue[0][0];
      queue.splice(0, 1);
    } else {
      time = jobsArr[j][0];
    }
  }
  return Math.floor(answer / len);
}
