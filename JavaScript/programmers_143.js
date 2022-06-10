// LV.3 광고 삽입

function changeSecond(time) {
  let splitTime = time.split(":");
  return Number(splitTime[0] * 3600 + splitTime[1] * 60 + splitTime[2] * 1);
}

function changeTime(time) {
  let hour = Math.floor(time / 3600);
  let minute = Math.floor(time / 60) % 60;
  let second = time % 60;

  return `${hour.toString().padStart(2, 0)}:${minute
    .toString()
    .padStart(2, 0)}:${second.toString().padStart(2, 0)}`;
}

function solution(play_time, adv_time, logs) {
  const playTime = changeSecond(play_time);
  const advTime = changeSecond(adv_time);

  let playLog = new Array(playTime).fill(0);

  logs.forEach((time) => {
    let [t1, t2] = time.split("-");
    const startTime = changeSecond(t1);
    const endTime = changeSecond(t2);

    playLog[startTime] += 1;
    playLog[endTime] -= 1;
  });

  for (let i = 1; i <= playTime; i++) {
    playLog[i] += playLog[i - 1];
  }

  for (let i = 1; i <= playTime; i++) {
    playLog[i] += playLog[i - 1];
  }

  let sum = playLog[advTime - 1];
  let idx = 0;

  for (let i = advTime - 1; i < playTime; i++) {
    let section = playLog[i] - playLog[i - advTime];
    if (sum < section) {
      sum = section;
      idx = i - advTime + 1;
    }
  }

  return changeTime(idx);
}
