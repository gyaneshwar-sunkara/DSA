export default class BinaryTreeNode<T> {
  left: BinaryTreeNode<T> | null;
  right: BinaryTreeNode<T> | null;
  parent: BinaryTreeNode<T> | null;
  value: T | null;

  constructor(value: T | null = null) {
    this.left = null;
    this.right = null;
    this.parent = null;
    this.value = value;
  }

  get leftHeight(): number {
    if (!this.left) return 0;
    return this.left.height + 1;
  }

  get rightHeight(): number {
    if (!this.right) return 0;
    return this.right.height + 1;
  }

  get height(): number {
    return Math.max(this.leftHeight, this.rightHeight);
  }

  setLeft(node: BinaryTreeNode<T>): BinaryTreeNode<T> {
    if (this.left) {
      this.left.parent = null;
    }

    this.left = node;

    if (this.left) {
      this.left.parent = this;
    }

    return this;
  }

  setRight(node: BinaryTreeNode<T>): BinaryTreeNode<T> {
    if (this.right) {
      this.right.parent = null;
    }

    this.right = node;

    if (this.right) {
      this.right.parent = this;
    }

    return this;
  }

  removeChild(node: BinaryTreeNode<T>): boolean {
    if (this.left && this.left === node) {
      this.left = null;
      return true;
    }

    if (this.right && this.right === node) {
      this.right = null;
      return true;
    }

    return false;
  }

  inOrderTraversal(node: BinaryTreeNode<T>, arr: Array<T>) {
    if (node === null) {
      return;
    }
    this.inOrderTraversal(node.left!, arr);
    arr.push(node.value!);
    this.inOrderTraversal(node.right!, arr);
  }

  preOrderTraversal(node: BinaryTreeNode<T>, arr: Array<T>) {
    if (node === null) {
      return;
    }
    arr.push(node.value!);
    this.preOrderTraversal(node.left!, arr);
    this.preOrderTraversal(node.right!, arr);
  }

  postOrderTraversal(node: BinaryTreeNode<T>, arr: Array<T>) {
    if (node === null) {
      return;
    }
    this.postOrderTraversal(node.left!, arr);
    this.postOrderTraversal(node.right!, arr);
    arr.push(node.value!);
  }

  breadthFirstSearch(node: BinaryTreeNode<T>): Array<T> {
    const arr: Array<T> = [];
    const queue: BinaryTreeNode<T>[] = [];
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
}
