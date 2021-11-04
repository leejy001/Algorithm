function one_solution(s){
  var result = false;
  if((s.length == 4 || s.length == 6) && /^[0-9]+$/.test(s)) {
    result = true;
  }
  return result;
}

function two_solution(s) {
    var regex = /^\d{4}$|^\d{6}$/
    return regex.test(s)
}