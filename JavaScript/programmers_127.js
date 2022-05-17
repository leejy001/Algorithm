// LV.3 표 편집

const Node = function (idx, prevNode) {
  this.idx = idx;
  this.prevNode = prevNode;
  this.nextNode;
};

function solution(n, k, cmd) {
  let answer = new Array(n);

  for (let i = 0; i < n; i++) {
    answer[i] = "O";
  }

  let root = new Node(0);
  let curNode = root;
  let prevNode = root;

  for (let i = 0; i < n; i++) {
    const newNode = new Node(i, prevNode);
    prevNode.nextNode = newNode;
    prevNode = newNode;

    if (i === k) curNode = newNode;
  }

  const remove = [];

  cmd.map((commandLine) => {
    const [command, idx] = commandLine.split(" ");
    let i = 0;
    switch (command) {
      case "U":
        while (i < idx && curNode.prevNode) {
          curNode = curNode.prevNode;
          i++;
        }
        break;
      case "D":
        while (i < idx && curNode.nextNode) {
          curNode = curNode.nextNode;
          i++;
        }
        break;
      case "C":
        remove.push(curNode);
        const prev = curNode.prevNode;
        const next = curNode.nextNode;
        if (prev && next) {
          prev.nextNode = next;
          next.prevNode = prev;
          curNode = next;
        } else if (prev) {
          prev.nextNode = null;
          curNode = prev;
        } else if (next) {
          next.prevNode = null;
          curNode = next;
        }
        break;
      case "Z":
        const node = remove.pop();
        const prevNode = node.prevNode;
        const nextNode = node.nextNode;
        if (prevNode) prevNode.nextNode = node;
        if (nextNode) nextNode.prevNode = node;
        break;
    }
  });

  remove.map((node) => {
    answer[node.idx] = "X";
  });

  return answer.join("");
}
