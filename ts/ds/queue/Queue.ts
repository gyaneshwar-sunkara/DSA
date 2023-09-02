import LinkedList from "../linkedlist/LinkedList";

export default class className<T> {
  queue: LinkedList<T>;

  constructor() {
    this.queue = new LinkedList();
  }

  isEmpty(): boolean {
    return this.queue.isEmpty();
  }

  size(): number {
    return this.queue.size();
  }

  peek(): T | null {
    return this.queue.first();
  }

  enqueue(value: T): void {
    this.queue.addLast(value);
  }

  dequeue(): T | null {
    return this.queue.removeFirst();
  }
}
