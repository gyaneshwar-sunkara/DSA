"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = __importDefault(require("./linkedlist/LinkedList"));
const Stack_1 = __importDefault(require("./stack/Stack"));
const Queue_1 = __importDefault(require("./queue/Queue"));
const DoublyLinkedList_1 = __importDefault(require("./doublylinkedlist/DoublyLinkedList"));
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
// testLinkedList();
testDoublyLinkedList();
// testStack();
// testQueue();
