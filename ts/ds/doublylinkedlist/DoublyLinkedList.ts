import Node from "./Node";

export default class DoublyLinkedList<T> {
  // Sentinal Nodes
  header: Node<null>;
  trailer: Node<null>;

  s: number;

  constructor() {
    this.header = new Node(null, null, null);
    this.trailer = new Node(null, this.header, null);
    this.header.next = this.trailer;
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
    return this.header.next!.value;
  }

  last(): T | null {
    if (this.isEmpty()) return null;
    return this.trailer.previous!.value;
  }

  addFirst(value: T): void {
    this.addBetween(value, this.header, this.header.next!);
  }

  addLast(value: T): void {
    this.addBetween(value, this.trailer.previous!, this.trailer);
  }

  addBetween(
    value: T,
    predecessor: Node<T | null>,
    successor: Node<T | null>
  ): void {
    const newNode = new Node(value, predecessor, successor);
    predecessor.next = newNode;
    successor.previous = newNode;
    this.s++;
  }

  removeFirst(): T | null {
    if (this.isEmpty()) return null;
    return this.remove(this.header.next as Node<T>);
  }

  removeLast(): T | null {
    if (this.isEmpty()) return null;
    return this.remove(this.trailer.previous as Node<T>);
  }

  remove(node: Node<T>): T {
    let predecessor = node.previous;
    let successor = node.next;
    predecessor!.next = successor;
    successor!.previous = predecessor;
    this.s--;
    return node.value;
  }
}
