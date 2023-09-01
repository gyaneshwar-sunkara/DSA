import LinkedList from "./linkedlist/LinkedList";

function runLinkedList() {
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

runLinkedList();
