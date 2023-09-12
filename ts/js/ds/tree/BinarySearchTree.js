"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryTreeNode_1 = __importDefault(require("./BinaryTreeNode"));
class BinarySearchTree extends BinaryTreeNode_1.default {
    constructor(value = null) {
        super(value);
    }
    insert(value) {
        if (!this.value) {
            this.value = value;
            return this;
        }
        if (value < this.value) {
            if (this.left) {
                return this.left.insert(this.value);
            }
            const newNode = new BinarySearchTree(value);
            this.setLeft(newNode);
            return newNode;
        }
        if (value > this.value) {
            if (this.right) {
                return this.right.insert(this.value);
            }
            const newNode = new BinarySearchTree(value);
            this.setRight(newNode);
            return newNode;
        }
    }
}
exports.default = BinarySearchTree;
;
