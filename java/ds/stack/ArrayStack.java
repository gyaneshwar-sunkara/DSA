package ds.stack;

import ds.interfaces.Stack;

/**
 * An array based stack implementation.
 * 
 * @author Gyaneshwar Sunkara
 */
public class ArrayStack<E> implements Stack<E> {

    /**
     * Default capacity of the stack.
     */
    public static final int CAPACITY = 1000;
    /**
     * Generic array used for storing elements.
     */
    private E[] stack;
    /**
     * Index of top element in stack.
     */
    private int t = -1;

    /**
     * Constructs stack with default capacity.
     */
    public ArrayStack() {
        this(CAPACITY);
    }

    /**
     * Constructs stack with given capacity.
     * 
     * @param capacity The extent of size stack can grow
     */
    public ArrayStack(int capacity) {
        stack = (E[]) new Object[capacity]; // safe cast
    }

    public void push(E e) throws IllegalStateException {
        if (size() == stack.length)
            throw new IllegalStateException("Stack is full");
        stack[++t] = e; // increment t before storing new element
    }

    public E pop() {
        if (isEmpty())
            return null;

        E top = stack[t];
        stack[t] = null; // dereference to help garbage collection
        t--;

        return top;
    }

    public E peek() {
        if (isEmpty())
            return null;

        return stack[t];
    }

    public int size() {
        return (t + 1);
    }

    public boolean isEmpty() {
        return (t == -1);
    }

}