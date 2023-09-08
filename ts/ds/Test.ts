import LinkedList from "./linkedlist/LinkedList";
import Stack from "./stack/Stack";
import Queue from "./queue/Queue";
import DoublyLinkedList from "./doublylinkedlist/DoublyLinkedList";
import BinaryTreeNode from "./tree/BinaryTreeNode";

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

function testDoublyLinkedList() {
  var ll: DoublyLinkedList<number> = new DoublyLinkedList();
  ll.addFirst(3);
  ll.addFirst(5);
  ll.addLast(100);
  ll.addLast(120);
  ll.addLast(120);
  ll.removeFirst();
  ll.removeLast();

  let resValues = [];
  while (ll.header.next !== ll.trailer) {
    resValues.push(ll.header.next!.value);
    ll.header.next = ll.header.next!.next;
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

function testBinaryTree() {
  const root = new BinaryTreeNode<number>(1);
  const left = new BinaryTreeNode<number>(2);
  const right = new BinaryTreeNode<number>(3);
  const grandLeft = new BinaryTreeNode<number>(4);
  const grandRight = new BinaryTreeNode<number>(5);

  root.setLeft(left).setRight(right);
  left.setLeft(grandLeft).setRight(grandRight);

  console.log(root.height);
  console.log(root.left?.left?.value);
  console.log(root.left?.left?.height);

  let inOrderArray: number[] = [];
  root.inOrderTraversal(root, inOrderArray);

  let preOrderArray: number[] = [];
  root.preOrderTraversal(root, preOrderArray);

  let postOrderArray: number[] = [];
  root.postOrderTraversal(root, postOrderArray);

  console.log(inOrderArray);
  console.log(preOrderArray);
  console.log(postOrderArray);
}

// testLinkedList();
// testDoublyLinkedList();
// testStack();
// testQueue();
testBinaryTree();
