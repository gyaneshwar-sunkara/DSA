package ds.stack;

import ds.interfaces.Stack;
import ds.linkedlist.SinglyLinkedList;

/**
 * A linked list based stack implementation.
 * Here there is no need to pre assign a capacity to the stack.
 * 
 * @author Gyaneshwar Sunkara
 */
public class LinkedStack<E> implements Stack<E> {

    /**
     * Linked list used for storing elements.
     */
    SinglyLinkedList<E> list = new SinglyLinkedList<>();

    /**
     * Constructs an empty stack
     */
    public LinkedStack() {

    }

    public void push(E e) {
        list.addFirst(e);
    }

    public E pop() {
        return list.removeFirst();
    }

    public E peek() {
        return list.first();
    }

    public int size() {
        return list.size();
    }

    public boolean empty() {
        return list.isEmpty();
    }

}
