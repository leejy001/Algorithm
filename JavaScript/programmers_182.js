// LV.2 호텔 대실

function solution(book_time) {
  let endTime = [];
  const arr = book_time.sort();
  arr.forEach((t) => {
    const tmp = t[0].split(":");
    const startTime = Number(tmp[0]) * 60 + Number(tmp[1]);
    const idx = endTime.findIndex((e) => e <= startTime);
    if (idx === -1) endTime.push(getNextTime(t[1]));
    else endTime[idx] = getNextTime(t[1]);
  });
  return endTime.length;
}

function getNextTime(endTime) {
  const next = endTime.split(":");
  return Number(next[0]) * 60 + Number(next[1]) + 10;
}
