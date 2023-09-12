export default class BinaryTreeNode<T> {
  [x: string]: any;
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
    return this.left.height;
  }

  get rightHeight(): number {
    if (!this.right) return 0;
    return this.right.height;
  }

  get height(): number {
    return Math.max(this.leftHeight, this.rightHeight) + 1;
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
}
