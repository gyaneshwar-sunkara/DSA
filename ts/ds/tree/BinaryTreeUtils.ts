import BinaryTreeNode from "./BinaryTreeNode";

export function maxDepth(node: BinaryTreeNode<any> | null): number {
  if (node === null) {
    return 0;
  }

  let lHeight = maxDepth(node.left);
  let rHeight = maxDepth(node.right);

  return Math.max(lHeight, rHeight) + 1;
}

export function invertTree(
  node: BinaryTreeNode<any> | null
): BinaryTreeNode<any> | null {
  if (node === null) {
    return node;
  }

  let left = invertTree(node.left);
  let right = invertTree(node.right);

  node.left = right;
  node.right = left;

  return node;
}

export function inOrderTraversal(
  node: BinaryTreeNode<any> | null,
  arr: Array<any>
) {
  if (node === null) {
    return;
  }
  inOrderTraversal(node.left, arr);
  arr.push(node.value!);
  inOrderTraversal(node.right, arr);
}

export function preOrderTraversal(
  node: BinaryTreeNode<any> | null,
  arr: Array<any>
) {
  if (node === null) {
    return;
  }
  arr.push(node.value!);
  preOrderTraversal(node.left, arr);
  preOrderTraversal(node.right, arr);
}

export function postOrderTraversal(
  node: BinaryTreeNode<any> | null,
  arr: Array<any>
) {
  if (node === null) {
    return;
  }
  postOrderTraversal(node.left, arr);
  postOrderTraversal(node.right, arr);
  arr.push(node.value!);
}

export function breadthFirstSearch(node: BinaryTreeNode<any>): Array<any> {
  const arr: Array<any> = [];
  const queue: BinaryTreeNode<any>[] = [];
  queue.push(node);
  while (queue.length > 0) {
    let tempNode = queue.shift();
    arr.push(tempNode!.value!);

    if (tempNode!.left) {
      queue.push(tempNode!.left);
    }

    if (tempNode!.right) {
      queue.push(tempNode!.right);
    }
  }
  return arr;
}
