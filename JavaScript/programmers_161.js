// LV.1 햄버거 만들기

function solution(ingredient) {
  let answer = 0;
  let st = [];
  for (let i = 0; i < ingredient.length; i++) {
    st.push(ingredient[i]);
    if (st.length >= 4) {
      if (st.slice(-4).join("") === "1231") {
        st.pop();
        st.pop();
        st.pop();
        st.pop();
        answer++;
      }
    }
  }
  return answer;
}
