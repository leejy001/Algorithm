// LV.1 성격 유형 검사하기

function solution(survey, choices) {
  var answer = "";
  let score = { 1: 3, 2: 2, 3: 1, 4: 0, 5: 1, 6: 2, 7: 3 };
  let character = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  for (let i = 0; i < survey.length; i++) {
    if (choices[i] < 4) {
      character[survey[i][0]] += score[choices[i]];
    } else if (choices[i] > 4) {
      character[survey[i][1]] += score[choices[i]];
    }
  }
  answer += character["R"] >= character["T"] ? "R" : "T";
  answer += character["C"] >= character["F"] ? "C" : "F";
  answer += character["J"] >= character["M"] ? "J" : "M";
  answer += character["A"] >= character["N"] ? "A" : "N";

  return answer;
}
