// LV.3 길 찾기 게임

class BinarySearchTree {
  constructor(value, xpos) {
    this.value = value;
    this.xpos = xpos;
    this.left = null;
    this.right = null;
  }

  insert(value, xpos) {
    this.xpos >= xpos
      ? this.insertLeft(value, xpos)
      : this.insertRight(value, xpos);
  }

  insertLeft(value, xpos) {
    this.left
      ? this.left.insert(value, xpos)
      : (this.left = new BinarySearchTree(value, xpos));
  }

  insertRight(value, xpos) {
    this.right
      ? this.right.insert(value, xpos)
      : (this.right = new BinarySearchTree(value, xpos));
  }
}

const preOrder = (bTree, arr) => {
  if (bTree !== null) {
    arr.push(bTree.value);
    preOrder(bTree.left, arr);
    preOrder(bTree.right, arr);
  }
};

const postOrder = (bTree, arr) => {
  if (bTree !== null) {
    postOrder(bTree.left, arr);
    postOrder(bTree.right, arr);
    arr.push(bTree.value);
  }
};

function solution(nodeinfo) {
  const preOrderArr = [];
  const postOrderArr = [];
  const nodes = nodeinfo
    .map((node, idx) => [idx + 1, node[0], node[1]])
    .sort((a, b) => {
      return b[2] - a[2];
    });
  const bTree = new BinarySearchTree(nodes[0][0], nodes[0][1]);

  for (let i = 1; i < nodes.length; i++) {
    bTree.insert(nodes[i][0], nodes[i][1]);
  }

  preOrder(bTree, preOrderArr);
  postOrder(bTree, postOrderArr);

  return [preOrderArr, postOrderArr];
}
