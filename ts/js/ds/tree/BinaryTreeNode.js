"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BinaryTreeNode {
    constructor(value = null) {
        this.left = null;
        this.right = null;
        this.parent = null;
        this.value = value;
    }
    get leftHeight() {
        if (!this.left)
            return 0;
        return this.left.height + 1;
    }
    get rightHeight() {
        if (!this.right)
            return 0;
        return this.right.height + 1;
    }
    get height() {
        return Math.max(this.leftHeight, this.rightHeight);
    }
    setLeft(node) {
        if (this.left) {
            this.left.parent = null;
        }
        this.left = node;
        if (this.left) {
            this.left.parent = this;
        }
        return this;
    }
    setRight(node) {
        if (this.right) {
            this.right.parent = null;
        }
        this.right = node;
        if (this.right) {
            this.right.parent = this;
        }
        return this;
    }
    removeChild(node) {
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
    inOrderTraversal(node, arr) {
        if (node === null) {
            return arr;
        }
        this.inOrderTraversal(node.left, arr);
        arr.push(node.value);
        this.inOrderTraversal(node.right, arr);
    }
    preOrderTraversal(node, arr) {
        if (node === null) {
            return arr;
        }
        arr.push(node.value);
        this.preOrderTraversal(node.left, arr);
        this.preOrderTraversal(node.right, arr);
    }
    postOrderTraversal(node, arr) {
        if (node === null) {
            return arr;
        }
        this.postOrderTraversal(node.left, arr);
        this.postOrderTraversal(node.right, arr);
        arr.push(node.value);
    }
}
exports.default = BinaryTreeNode;
