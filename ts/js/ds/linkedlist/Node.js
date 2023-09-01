"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
exports.default = Node;
