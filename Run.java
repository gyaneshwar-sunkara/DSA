import ds.linkedlist.SinglyLinkedList;
import ds.stack.ArrayStack;
import ds.stack.LinkedStack;

public class Run {
    public static void main(String[] args) {
        /**
         * ArrayStack & LinkedStack
         */
        // ArrayStack<Integer> stack = new ArrayStack<>();
        LinkedStack<Integer> stack = new LinkedStack<>();

        stack.push(3);
        stack.push(2);
        stack.push(1);
        System.out.println(stack.empty());
        System.out.println(stack.size());
        System.out.println(stack.pop());
        System.out.println(stack.peek());

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
    }
}
