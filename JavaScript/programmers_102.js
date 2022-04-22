// LV.2 [3차] 압축

function solution(msg) {
  var answer = [];
  let char = new Map();
  let len = 26;
  for (let i = 1; i <= 26; i++) {
    char.set(String.fromCharCode(i + 64), i);
  }

  let w = 0,
    c = 0;
  while (c < msg.length) {
    c += 1;
    if (!char.get(msg.slice(w, c + 1))) {
      char.set(msg.slice(w, c + 1), (len += 1));
      answer.push(char.get(msg.slice(w, c)));
      w = c;
    }
  }
  answer.push(char.get(msg.slice(w, c)));
  return answer;
}
