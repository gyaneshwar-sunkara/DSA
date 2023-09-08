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
        return this.left.height;
    }
    get rightHeight() {
        if (!this.right)
            return 0;
        return this.right.height;
    }
    get height() {
        return Math.max(this.leftHeight, this.rightHeight) + 1;
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
}
exports.default = BinaryTreeNode;
