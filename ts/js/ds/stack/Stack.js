"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = __importDefault(require("../linkedlist/LinkedList"));
class Stack {
    constructor() {
        this.stack = new LinkedList_1.default();
    }
    isEmpty() {
        return this.stack.isEmpty();
    }
    size() {
        return this.stack.size();
    }
    peek() {
        return this.stack.first();
    }
    push(value) {
        this.stack.addFirst(value);
    }
    pop() {
        return this.stack.removeFirst();
    }
}
exports.default = Stack;
