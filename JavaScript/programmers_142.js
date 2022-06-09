// LV.3 110 옮기기

function solution(s) {
  var answer = [];
  for (let i = 0; i < s.length; i++) {
    let arr = s[i].split("").map(Number);
    let st = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (
        st.length >= 2 &&
        arr[i] === 0 &&
        st[st.length - 1] === 1 &&
        st[st.length - 2] === 1
      ) {
        st.pop();
        st.pop();
        count++;
        continue;
      }
      st.push(arr[i]);
    }

    let str = st.join("");
    if (str.lastIndexOf("0") === -1) {
      str = "110".repeat(count) + str;
    } else {
      str =
        str.slice(0, str.lastIndexOf("0") + 1) +
        "110".repeat(count) +
        str.slice(str.lastIndexOf("0") + 1);
    }
    answer.push(str);
  }
  return answer;
}
