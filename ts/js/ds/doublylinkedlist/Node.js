"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(value, previous = null, next = null) {
        this.value = value;
        this.previous = previous;
        this.next = next;
    }
}
exports.default = Node;
