import BinaryTreeNode from "./BinaryTreeNode";

export default class BinarySearchTreeNode<T> extends BinaryTreeNode<T> {
  left!: BinarySearchTreeNode<T> | null;
  right!: BinarySearchTreeNode<T> | null;
  parent!: BinarySearchTreeNode<T> | null;

  constructor(value: T | null = null) {
    super(value);
  }

  insert(value: T): BinarySearchTreeNode<T> {
    if (!this.value) {
      this.value = value;
      return this;
    }

    if (value < this.value) {
      if (this.left) {
        return this.left.insert(value);
      }

      const newNode = new BinarySearchTreeNode(value);
      this.setLeft(newNode);

      return newNode;
    }

    if (value > this.value) {
      if (this.right) {
        return this.right.insert(value);
      }

      const newNode = new BinarySearchTreeNode(value);
      this.setRight(newNode);

      return newNode;
    }

    return this;
  }
}
