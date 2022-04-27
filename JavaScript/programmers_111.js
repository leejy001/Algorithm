// LV.2 주차 요금 계산

function getMinute(time) {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

function solution(fees, records) {
  records = records.map((item) => item.split(" ")).sort((a, b) => a[1] - b[1]);
  const setCars = [...new Set(records.map((item) => item[1]))];

  const result = setCars.map((item) => {
    const arr = [];
    for (let i = 0; i < records.length; i++) {
      if (item === records[i][1]) arr.push(records[i]);
    }
    if (arr.length % 2 === 1) return [...arr, ["23:59", item, "OUT"]];
    else return arr;
  });

  const answer = result.map((item) => {
    let minute = 0;
    for (let i = 0; i < item.length; i += 2) {
      const time = getMinute(item[i + 1][0]) - getMinute(item[i][0]);
      minute += time;
    }
    return minute;
  });

  return answer.map((item) => {
    if (item > fees[0])
      return fees[1] + Math.ceil((item - fees[0]) / fees[2]) * fees[3];
    else return fees[1];
  });
}
