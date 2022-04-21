// LV.2 [3차] 방금그곡

function change(m) {
  let melody = "";
  let map = {
    "A#": "a",
    "B#": "b",
    "C#": "c",
    "D#": "d",
    "E#": "e",
    "F#": "f",
    "G#": "g",
  };

  for (let i = 0; i < m.length - 1; i++) {
    if (m[i + 1] === "#") {
      melody += map[m.slice(i, i + 2)];
    } else if (m[i] !== "#") {
      melody += m[i];
    }
  }
  if (m[m.length - 1] !== "#") melody += m[m.length - 1];
  return melody;
}

function sec(t) {
  let [hour, minute] = t.split(":");
  return Number(hour) * 60 + Number(minute);
}

function solution(m, musicinfos) {
  var answer = "";
  let sub = change(m);
  let song = {};
  for (let music of musicinfos) {
    let [start, end, title, msub] = music.split(",");
    let time = sec(end) - sec(start);
    let csub = change(msub);
    let n = csub.length;
    let melody = csub.repeat(Math.floor(time / n)) + csub.slice(0, time % n);
    song[title] = melody;
  }

  let k = "",
    v = "";
  for (const [key, value] of Object.entries(song)) {
    if (value.indexOf(sub) !== -1 && v.length < value.length) {
      k = key;
      v = value;
    }
  }

  return k.length !== 0 ? k : "(None)";
}
