// LV.3 가장 긴 팰린드롬

function isPalindrome(word) {
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function solution(s) {
  let len = s.length;
  for (let i = len; i >= 1; i--) {
    for (let j = 0; j <= len - i; j++) {
      if (isPalindrome(s.slice(j, i + j))) {
        return i;
      }
    }
  }
  return 1;
}
