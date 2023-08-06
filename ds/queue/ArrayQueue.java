package ds.queue;

import ds.interfaces.Queue;

/**
 * An array based queue implementation.
 * 
 * @author Gyaneshwar Sunkara
 */
public class ArrayQueue<E> implements Queue<E> {

    /**
     * Default capacity of the queue.
     */
    public static final int CAPACITY = 1000;
    /**
     * Generic array used for storing elements.
     */
    private E[] queue;
    /**
     * Index of front element in queue.
     */
    private int f = 0;
    /**
     * Number of elements in queue.
     */
    private int sz = 0;

    /**
     * Constructs queue with default capacity.
     */
    public ArrayQueue() {
        this(CAPACITY);
    }

    /**
     * Constructs queue with given capacity.
     * 
     * @param capacity The extent of size queue can grow
     */
    public ArrayQueue(int capacity) {
        queue = (E[]) new Object[capacity]; // safe cast
    }

    public void enqueue(E e) throws IllegalStateException {
        if (sz == queue.length)
            throw new IllegalStateException("Queue is full");
        int avail = (f + sz) % queue.length; // use modular arithmetic
        queue[avail] = e;
        sz++;
    }

    public E dequeue() {
        if (isEmpty())
            return null;

        E front = queue[f];
        queue[f] = null; // dereference to help garbage collection

        f = (f + 1) % queue.length; // use modular arithmetic
        sz--;

        return front;
    }

    public E first() {
        if (isEmpty())
            return null;

        return queue[f];
    }

    public int size() {
        return sz;
    }

    public boolean isEmpty() {
        return (sz == 0);
    }
}
