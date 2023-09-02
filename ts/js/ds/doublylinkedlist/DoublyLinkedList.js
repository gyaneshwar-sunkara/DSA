"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = __importDefault(require("./Node"));
class DoublyLinkedList {
    constructor() {
        this.header = new Node_1.default(null, null, null);
        this.trailer = new Node_1.default(null, this.header, null);
        this.header.next = this.trailer;
        this.s = 0;
    }
    size() {
        return this.s;
    }
    isEmpty() {
        return this.s === 0;
    }
    first() {
        if (this.isEmpty())
            return null;
        return this.header.next.value;
    }
    last() {
        if (this.isEmpty())
            return null;
        return this.trailer.previous.value;
    }
    addFirst(value) {
        this.addBetween(value, this.header, this.header.next);
    }
    addLast(value) {
        this.addBetween(value, this.trailer.previous, this.trailer);
    }
    addBetween(value, predecessor, successor) {
        const newNode = new Node_1.default(value, predecessor, successor);
        predecessor.next = newNode;
        successor.previous = newNode;
        this.s++;
    }
    removeFirst() {
        if (this.isEmpty())
            return null;
        return this.remove(this.header.next);
    }
    removeLast() {
        if (this.isEmpty())
            return null;
        return this.remove(this.trailer.previous);
    }
    remove(node) {
        let predecessor = node.previous;
        let successor = node.next;
        predecessor.next = successor;
        successor.previous = predecessor;
        this.s--;
        return node.value;
    }
}
exports.default = DoublyLinkedList;
