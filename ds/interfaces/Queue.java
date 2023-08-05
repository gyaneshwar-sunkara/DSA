package ds.interfaces;

/**
 * A Queue is a collection of elements.
 * Elements are inserted and removed according to the FIFO principle.
 * 
 * @author Gyaneshwar Sunkara    
 */
public interface Queue<E> {

    /**
     * Returns the number of elements in the queue.
     * Running Time - O(1)
     * 
     * @return Number of elements in the queue
     */
    int size();

    /**
     * Tests whether the queue is empty.
     * Running Time - O(1)
     * 
     * @return `true` if queue is empty, `false` otherwise
     */
    boolean isEmpty();

    /**
     * Inserts an element at the rear of the queue.
     * Running Time - O(1)
     * 
     * @param e The element to be inserted
     */
    void enqueue(E e);

    /**
     * Returns, but does not remove, the first element of the queue.
     * Running Time - O(1)
     * 
     * @return First element or `null`(if empty queue)
     */
    E first();

    /**
     * Removes and returns the first element of the queue.
     * Running Time - O(1)
     * 
     * @return First element or `null`(if empty queue)
     */
    E dequeue();
}