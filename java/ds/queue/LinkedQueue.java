package ds.queue;

import ds.interfaces.Queue;
import ds.linkedlist.SinglyLinkedList;

/**
 * A linked list based queue implementation.
 * Here there is no need to pre assign a capacity to the queue.
 * 
 * @author Gyaneshwar Sunkara
 */
public class LinkedQueue<E> implements Queue<E> {

    /**
     * Linked list used for storing elements.
     */
    SinglyLinkedList<E> list = new SinglyLinkedList<>();

    /**
     * Constructs an empty stack
     */
    public LinkedQueue() {

    }

    public void enqueue(E e) {
        list.addLast(e);
    }

    public E dequeue() {
        return list.removeFirst();
    }

    public E first() {
        return list.first();
    }

    public int size() {
        return list.size();
    }

    public boolean isEmpty() {
        return list.isEmpty();
    }
}
