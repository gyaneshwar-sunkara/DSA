package ds.interfaces;

/**
 * A Stack is a collection of elements.
 * Elements are inserted and removed according to the LIFO principle.
 * 
 * @author Gyaneshwar Sunkara
 */
public interface Stack<E> {

    /**
     * Inserts an element at the top of the stack.
     * Running Time - O(1)
     * 
     * @param e The element to be inserted
     */
    void push(E e);

    /**
     * Removes and returns the top element from the stack.
     * Running Time - O(1)
     * 
     * @return Top element or `null`(if empty stack)
     */
    E pop();

    /**
     * Returns, but does not remove, the element at the top of the stack.
     * Running Time - O(1)
     * 
     * @return Top element or `null`(if empty stack)
     */
    E peek();

    /**
     * Returns the number of elements in the stack.
     * Running Time - O(1)
     * 
     * @return Number of elements in the stack
     */
    int size();

    /**
     * Tests whether the stack is empty.
     * Running Time - O(1)
     * 
     * @return `true` if stack is empty, `false` otherwise
     */
    boolean empty();

}