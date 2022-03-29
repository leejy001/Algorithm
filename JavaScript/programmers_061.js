// LV.1 신고 결과 받기

function solution(id_list, report, k) {
  let answer = new Array(id_list.length).fill(0);
  let list = {};

  id_list.map((user) => {
    list[user] = [];
  });

  report.map((user) => {
    const [user_id, report_id] = user.split(" ");
    if (!list[report_id].includes(user_id)) {
      list[report_id].push(user_id);
    }
  });

  for (let key in list) {
    if (list[key].length >= k) {
      list[key].map((user) => {
        answer[id_list.indexOf(user)] += 1;
      });
    }
  }
  return answer;
}

// Set, Map 사용
function solution(id_list, report, k) {
  let reports = [...new Set(report)].map((user) => {
    return user.split(" ");
  });
  let counts = new Map();
  for (const report of reports) {
    counts.set(report[1], counts.get(report[1]) + 1 || 1);
  }

  let reporter = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      reporter.set(report[0], reporter.get(report[0]) + 1 || 1);
    }
  }

  let answer = id_list.map((user) => reporter.get(user) || 0);
  return answer;
}
