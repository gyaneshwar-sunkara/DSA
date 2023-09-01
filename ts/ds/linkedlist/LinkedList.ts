import Node from "./Node";

export default class LinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  s: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.s = 0;
  }

  size(): number {
    return this.s;
  }

  isEmpty(): boolean {
    return this.s === 0;
  }

  first(): T | null {
    if (this.isEmpty()) return null;
    return this.head!.value;
  }

  last(): T | null {
    if (this.isEmpty()) return null;
    return this.tail!.value;
  }

  addFirst(value: T): LinkedList<T> {
    this.head = new Node(value, this.head);
    if (this.isEmpty()) this.tail = this.head;
    this.s++;

    return this;
  }

  addLast(value: T): LinkedList<T> {
    let newNode: Node<T> = new Node(value, null);
    if (this.isEmpty()) this.head = newNode;
    else this.tail!.next = newNode;
    this.tail = newNode;
    this.s++;

    return this;
  }

  removeFirst(): T | null {
    if (this.isEmpty()) return null;

    let deletedHeadValue: T = this.head!.value;

    if (this.head!.next) this.head = this.head!.next;
    else {
      this.head = null;
      this.tail = null;
    }

    return deletedHeadValue;
  }
}
