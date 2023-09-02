"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = __importDefault(require("../linkedlist/LinkedList"));
class className {
    constructor() {
        this.queue = new LinkedList_1.default();
    }
    isEmpty() {
        return this.queue.isEmpty();
    }
    size() {
        return this.queue.size();
    }
    peek() {
        return this.queue.first();
    }
    enqueue(value) {
        this.queue.addLast(value);
    }
    dequeue() {
        return this.queue.removeFirst();
    }
}
exports.default = className;
