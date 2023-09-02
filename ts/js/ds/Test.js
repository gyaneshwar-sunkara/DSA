"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = __importDefault(require("./linkedlist/LinkedList"));
const Stack_1 = __importDefault(require("./stack/Stack"));
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
// testLinkedList();
testStack();
