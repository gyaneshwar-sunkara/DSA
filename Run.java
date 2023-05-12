import ds.stack.ArrayStack;

public class Run {
    public static void main(String[] args) {
        /**
         * ArrayStack
         */
        ArrayStack<Integer> stack = new ArrayStack<>();

        stack.push(3);
        stack.push(2);
        stack.push(1);
        System.out.println(stack.empty());
        System.out.println(stack.size());
        System.out.println(stack.pop());
        System.out.println(stack.peek());

    }
}
