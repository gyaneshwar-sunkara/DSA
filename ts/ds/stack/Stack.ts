import LinkedList from "../linkedlist/LinkedList";

export default class Stack<T> {
  stack: LinkedList<T>;

  constructor() {
    this.stack = new LinkedList();
  }

  isEmpty(): boolean {
    return this.stack.isEmpty();
  }

  size(): number {
    return this.stack.size();
  }

  peek(): T | null {
    return this.stack.first();
  }

  push(value: T): void {
    this.stack.addFirst(value);
  }

  pop(): T | null {
    return this.stack.removeFirst();
  }
}
