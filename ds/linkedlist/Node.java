package ds.linkedlist;

/**
 * Nested Node class which represents each block in linked list.
 * 
 * @author Gyaneshwar Sunkara
 */
public class Node<E> {
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
