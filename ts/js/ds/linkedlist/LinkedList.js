"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = __importDefault(require("./Node"));
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
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
        return this.head.value;
    }
    last() {
        if (this.isEmpty())
            return null;
        return this.tail.value;
    }
    addFirst(value) {
        this.head = new Node_1.default(value, this.head);
        if (this.isEmpty())
            this.tail = this.head;
        this.s++;
    }
    addLast(value) {
        let newNode = new Node_1.default(value, null);
        if (this.isEmpty())
            this.head = newNode;
        else
            this.tail.next = newNode;
        this.tail = newNode;
        this.s++;
    }
    removeFirst() {
        if (this.isEmpty())
            return null;
        let deletedHeadValue = this.head.value;
        if (this.head.next)
            this.head = this.head.next;
        else {
            this.head = null;
            this.tail = null;
        }
        this.s--;
        return deletedHeadValue;
    }
}
exports.default = LinkedList;
