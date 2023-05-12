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
public class SinglyLinkedList<E> {

    /**
     * Nested Node class which represents each block in linked list.
     */
    private static class Node<E> {
        /**
         * The element stored at this node.
         */
        private E element;
        /**
         * Reference to the subsequent node in the list.
         */
        private Node<E> next;

        /**
         * Constructs node with given element and next node as ull.
         */
        public Node(E e) {
            this(e, null);
        }

        /**
         * Constructs node with given element and next node.
         */
        public Node(E e, Node<E> n) {
            element = e;
            next = n;
        }

        /**
         * Returns element in the current node.
         * 
         * @return Current element
         */
        public E getElement() {
            return element;
        }

        /**
         * Returns reference of next node connected.
         * 
         * @return Reference of next node connected
         */
        public Node<E> getNext() {
            return next;
        }

        /**
         * Adds reference of next node to current node.
         * 
         * @param n Reference of next node to be connected
         */
        public void setNext(Node<E> n) {
            next = n;
        }
    }

    /**
     * Head(first) node of the linked list.
     */
    private Node<E> head = null;
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
    public SinglyLinkedList() {

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
     * Check if the list is empty
     * Running Time - O(1)
     * 
     * @return `true` if list is empty, `false` otherwise
     */
    public boolean isEmpty() {
        return (size == 0);
    }

    /**
     * Return the first element
     * Running Time - O(1)
     * 
     * @return First element in the list
     */
    public E first() {
        if (isEmpty())
            return null;

        return head.getElement();
    }

    /**
     * Return the last element
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
     * Adds element e to the front of the list.
     * Running Time - O(1)
     * 
     * @param e Element to be added to the list
     */
    public void addFirst(E e) {
        head = new Node<>(e, head); // create new node linked to head
        if (isEmpty())
            tail = head; // special case: new node becomes tail
        size++;
    }

    /**
     * Adds element e to the end of the list.
     * Running Time - O(1)
     * 
     * @param e Element to be added to the list
     */
    public void addLast(E e) {
        Node<E> newNode = new Node<>(e); // new node will eventually be tail
        if (isEmpty())
            head = newNode; // special case: previously empty list
        else
            tail.setNext(newNode); // new node after existing tail
        tail = newNode; // new node becomes the tail
        size++;
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

        E e = head.getElement();
        head = head.getNext(); // will become null if list had only one node
        size--;
        if (isEmpty())
            tail = null; // special case: list is now empty
        return e;
    }
}