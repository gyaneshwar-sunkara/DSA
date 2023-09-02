import LinkedList from "./linkedlist/LinkedList";
import Stack from "./stack/Stack";
import Queue from "./queue/Queue";

function testLinkedList() {
  var ll: LinkedList<number> = new LinkedList();
  ll.addFirst(3);
  ll.addFirst(5);
  ll.addLast(100);

  let resValues = [];
  while (ll.head) {
    resValues.push(ll.head.value);
    ll.head = ll.head.next;
  }

  console.log(resValues);
}

function testStack() {
  var stack: Stack<string> = new Stack();
  stack.push("hello");
  stack.push("world");
  console.log(stack.peek());
  console.log(stack.pop());
  console.log(stack.peek());
  console.log(stack.size());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.isEmpty());
}

function testQueue() {
  var queue: Queue<string> = new Queue();
  queue.enqueue("hello");
  queue.enqueue("world");
  console.log(queue.peek());
  console.log(queue.dequeue());
  console.log(queue.peek());
  console.log(queue.size());
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  console.log(queue.isEmpty());
}

// testLinkedList();
// testStack();
testQueue();
