// 문자열 뒤집기

// 반복문
let result = "";
let x = "JavaScript";
while (true) {
  if (x.length === 1) {
    result += x;
    break;
  }
  let s = x.split("");
  result += String(s.pop());
  x = s.join("");
}

console.log(result);

// 재귀
/*
reverse("JavaScript") 't' + reverse("JavaScrip") => tpircSavaJ
reverse("JavaScrip")  'p' + reverse("JavaScri") => pircSavaJ
reverse("JavaScri")   'i' + reverse("JavaScr") => ircSavaJ
reverse("JavaScr")    'r' + reverse("JavaSc") => rcSavaJ
reverse("JavaSc")     'c' + reverse("JavaS") => cSavaJ
reverse("JavaS")      'S' + reverse("Java") => SavaJ
reverse("Java")       'a' + reverse("Jav") => avaJ
reverse("Jav")        'v' + reverse("Ja") => vaJ
reverse("Ja")         'a' + reverse("J") => aJ
reverse("J")          'J'
 */
function reverse(str) {
  if (str.length === 1) {
    return str;
  }
  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
}

console.log(reverse("JavaScript"));
