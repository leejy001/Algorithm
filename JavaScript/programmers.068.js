// LV.2 수식 최대화

function calc(op, a, b) {
  if (op === "-") return a - b;
  else if (op === "+") return a + b;
  else if (op === "*") return a * b;
}

function solution(expression) {
  var ops = [
    ["*", "+", "-"],
    ["*", "-", "+"],
    ["+", "*", "-"],
    ["+", "-", "*"],
    ["-", "*", "+"],
    ["-", "+", "*"],
  ];

  let max = -Infinity;
  let operand = expression.split(/([+\-*/])/);

  for (let op of ops) {
    let _operand = [...operand];
    for (let i of op) {
      for (let j = 0; j < _operand.length; j++) {
        if (_operand[j] === i) {
          const [n1, ex, n2] = _operand.splice(j - 1, 3);
          _operand.splice(j - 1, 0, calc(ex, Number(n1), Number(n2)));
          j--;
        }
      }
    }
    if (max < Math.abs(_operand[0])) max = Math.abs(_operand[0]);
  }
  return max;
}
