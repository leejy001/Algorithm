// LV.2 구명보트

function solution(people, limit) {
  let answer = people.length;
  people.sort((a, b) => b - a);
  let start = 0;
  let end = people.length - 1;
  while (start < end) {
    if (people[start] + people[end] <= limit) {
      end -= 1;
      answer -= 1;
    }
    start += 1;
  }
  return answer;
}
