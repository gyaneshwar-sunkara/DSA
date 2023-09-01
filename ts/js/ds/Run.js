"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = __importDefault(require("./linkedlist/LinkedList"));
function runLinkedList() {
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
runLinkedList();
