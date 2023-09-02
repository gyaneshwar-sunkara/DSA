export default class Node<T> {
  value: T;
  previous: Node<T> | null;
  next: Node<T> | null;

  constructor(
    value: T,
    previous: Node<T> | null = null,
    next: Node<T> | null = null
  ) {
    this.value = value;
    this.previous = previous;
    this.next = next;
  }
}
