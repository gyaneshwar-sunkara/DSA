import LinkedList from "./linkedlist/LinkedList";
import Stack from "./stack/Stack";

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

// testLinkedList();
testStack();
