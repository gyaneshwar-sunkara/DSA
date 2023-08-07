package ds.linkedlist;

/**
 * A linkedlist is a collection of nodes that collectively form a sequence.
 * 
 * In a singly linked list, each node stores
 * An element of the sequence.
 * And a reference to the next node of the list.
 * 
 * @author Gyaneshwar Sunkara
 */
public class CircularlyLinkedList<E> {

    // Instance Variables

    /**
     * Tail(last) node of the linked list.
     */
    private Node<E> tail = null;
    /**
     * Number of nodes in the linked list.
     */
    private int size = 0;

    /**
     * Constructs an empty linked list.
     */
    public CircularlyLinkedList() {
    }

    // Access Methods

    /**
     * Returns the number of elements in the list.
     * Running Time - O(1)
     * 
     * @return Number of elements in the list
     */
    public int size() {
        return size;
    }

    /**
     * Check if the list is empty.
     * Running Time - O(1)
     * 
     * @return `true` if list is empty, `false` otherwise
     */
    public boolean isEmpty() {
        return (size == 0);
    }

    /**
     * Return the first element.
     * Running Time - O(1)
     * 
     * @return First element in the list
     */
    public E first() {
        if (isEmpty())
            return null;
        return tail.getNext().getElement();
    }

    /**
     * Return the last element.
     * Running Time - O(1)
     * 
     * @return Last element in the list
     */
    public E last() {
        if (isEmpty())
            return null;
        return tail.getElement();
    }

    // Update Methods

    /**
     * Rotate the first element to the back of the list.
     */
    public void rotate() {
        if(tail != null) // if empty do nothing
            tail = tail.getNext(); // the old head becomes the new tail
    }

    /**
     * Adds element e to the front of the list.
     * Running Time - O(1)
     * 
     * @param e Element to be added to the list
     */
    public void addFirst(E e) {
        if(size == 0) {
            tail = new Node<>(e, null);
            tail.setNext(tail); // link to itself circularly
        } else {
            Node<E> newest = new Node<>(e, tail.getNext());
            tail.setNext(newest);
        }
        size++;
    }

    /**
     * Adds element e to the end of the list.
     * Running Time - O(1)
     * 
     * @param e Element to be added to the list
     */
    public void addLast(E e) {
        addFirst(e); // insert new element at the front of the list
        tail = tail.getNext(); // now new element becomes the tail
    }

    /**
     * Removes and returns the first element.
     * Running Time - O(1)
     * 
     * @return First element that is removed from the list
     */
    public E removeFirst() {
        if (isEmpty())
            return null; // nothing to remove

        Node<E> head = tail.getNext();
        if(head == tail) 
            tail = null; // must be only node left
        else
            tail.setNext(head.getNext()); // removes head from the list
        size--;
        
        return head.getElement();
    }
}
