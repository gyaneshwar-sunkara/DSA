"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.breadthFirstSearch = exports.postOrderTraversal = exports.preOrderTraversal = exports.inOrderTraversal = exports.invertTree = exports.maxDepth = void 0;
function maxDepth(node) {
    if (node === null) {
        return 0;
    }
    let lHeight = maxDepth(node.left);
    let rHeight = maxDepth(node.right);
    return Math.max(lHeight, rHeight) + 1;
}
exports.maxDepth = maxDepth;
function invertTree(node) {
    if (node === null) {
        return node;
    }
    let left = invertTree(node.left);
    let right = invertTree(node.right);
    node.left = right;
    node.right = left;
    return node;
}
exports.invertTree = invertTree;
function inOrderTraversal(node, arr) {
    if (node === null) {
        return;
    }
    inOrderTraversal(node.left, arr);
    arr.push(node.value);
    inOrderTraversal(node.right, arr);
}
exports.inOrderTraversal = inOrderTraversal;
function preOrderTraversal(node, arr) {
    if (node === null) {
        return;
    }
    arr.push(node.value);
    preOrderTraversal(node.left, arr);
    preOrderTraversal(node.right, arr);
}
exports.preOrderTraversal = preOrderTraversal;
function postOrderTraversal(node, arr) {
    if (node === null) {
        return;
    }
    postOrderTraversal(node.left, arr);
    postOrderTraversal(node.right, arr);
    arr.push(node.value);
}
exports.postOrderTraversal = postOrderTraversal;
function breadthFirstSearch(node) {
    const arr = [];
    const queue = [];
    queue.push(node);
    while (queue.length > 0) {
        let tempNode = queue.shift();
        arr.push(tempNode.value);
        if (tempNode.left) {
            queue.push(tempNode.left);
        }
        if (tempNode.right) {
            queue.push(tempNode.right);
        }
    }
    return arr;
}
exports.breadthFirstSearch = breadthFirstSearch;
