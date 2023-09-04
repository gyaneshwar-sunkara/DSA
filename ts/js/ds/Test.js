"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = __importDefault(require("./linkedlist/LinkedList"));
const Stack_1 = __importDefault(require("./stack/Stack"));
const Queue_1 = __importDefault(require("./queue/Queue"));
const DoublyLinkedList_1 = __importDefault(require("./doublylinkedlist/DoublyLinkedList"));
const BinaryTreeNode_1 = __importDefault(require("./tree/BinaryTreeNode"));
function testLinkedList() {
    var ll = new LinkedList_1.default();
    ll.addFirst(3);
    ll.addFirst(5);
    ll.addLast(100);
    let resValues = [];
    while (ll.head) {
        resValues.push(ll.head.value);
        ll.head = ll.head.next;
    }
    console.log(resValues);
}
function testDoublyLinkedList() {
    var ll = new DoublyLinkedList_1.default();
    ll.addFirst(3);
    ll.addFirst(5);
    ll.addLast(100);
    ll.addLast(120);
    ll.addLast(120);
    ll.removeFirst();
    ll.removeLast();
    let resValues = [];
    while (ll.header.next !== ll.trailer) {
        resValues.push(ll.header.next.value);
        ll.header.next = ll.header.next.next;
    }
    console.log(resValues);
}
function testStack() {
    var stack = new Stack_1.default();
    stack.push("hello");
    stack.push("world");
    console.log(stack.peek());
    console.log(stack.pop());
    console.log(stack.peek());
    console.log(stack.size());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.isEmpty());
}
function testQueue() {
    var queue = new Queue_1.default();
    queue.enqueue("hello");
    queue.enqueue("world");
    console.log(queue.peek());
    console.log(queue.dequeue());
    console.log(queue.peek());
    console.log(queue.size());
    console.log(queue.dequeue());
    console.log(queue.dequeue());
    console.log(queue.isEmpty());
}
function testBinaryTree() {
    var _a, _b, _c, _d;
    const root = new BinaryTreeNode_1.default(50);
    const left = new BinaryTreeNode_1.default(3);
    const right = new BinaryTreeNode_1.default(2);
    const grandLeft = new BinaryTreeNode_1.default(5);
    const grandRight = new BinaryTreeNode_1.default(6);
    const grandGrandLeft = new BinaryTreeNode_1.default(7);
    root.setLeft(left).setRight(right);
    left.setLeft(grandLeft).setRight(grandRight);
    grandLeft.setLeft(grandGrandLeft);
    console.log(root.height);
    console.log((_b = (_a = root.left) === null || _a === void 0 ? void 0 : _a.left) === null || _b === void 0 ? void 0 : _b.value);
    console.log((_d = (_c = root.left) === null || _c === void 0 ? void 0 : _c.left) === null || _d === void 0 ? void 0 : _d.height);
}
// testLinkedList();
// testDoublyLinkedList();
// testStack();
// testQueue();
testBinaryTree();
