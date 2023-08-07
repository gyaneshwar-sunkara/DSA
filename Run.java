import ds.linkedlist.CircularlyLinkedList;
import ds.linkedlist.SinglyLinkedList;
import ds.queue.ArrayQueue;
import ds.queue.LinkedQueue;
import ds.stack.ArrayStack;
import ds.stack.LinkedStack;

public class Run {
    public static void main(String[] args) {
        /**
         * ArrayStack & LinkedStack
         */
        // ArrayStack<Integer> stack = new ArrayStack<>();
        // LinkedStack<Integer> stack = new LinkedStack<>();

        // stack.push(3);
        // stack.push(2);
        // stack.push(1);
        // System.out.println(stack.isEmpty());
        // System.out.println(stack.size());
        // System.out.println(stack.pop());
        // System.out.println(stack.peek());

        /**
         * SinglyLinkedList
         */
        // SinglyLinkedList<Character> list = new SinglyLinkedList<>();

        // list.addFirst('A');
        // list.addFirst('B');
        // list.addLast('C');
        // System.out.println(list.isEmpty());
        // System.out.println(list.size());
        // System.out.println(list.first());
        // System.out.println(list.last());
        // System.out.println(list.removeFirst());
        // System.out.println(list.first());

        /**
         * ArrayQueue & LinkedQueue
         */
        // ArrayQueue<Integer> queue = new ArrayQueue<>(2);
        // LinkedQueue<Integer> queue = new LinkedQueue<>();

        // queue.enqueue(3);
        // queue.dequeue();
        // queue.enqueue(88);
        // System.out.println(queue.first());
        // System.out.println(queue.size());
        // System.out.println(queue.isEmpty());

        /**
         * CircularlyLinkedList
         */
        CircularlyLinkedList<Character> list = new CircularlyLinkedList<>();

        list.addFirst('A');
        list.addFirst('B');
        list.addLast('C');
        list.rotate();
        System.out.println(list.isEmpty());
        System.out.println(list.size());
        System.out.println(list.first());
        System.out.println(list.last());
        System.out.println(list.removeFirst());
        System.out.println(list.first());
    }
}
