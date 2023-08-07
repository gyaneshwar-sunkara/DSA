#### If two classes are in the same package, you can access each other without explicit import.

A.java

<pre>
package example;

public class  A {
}
</pre>

B.java

<pre>
package example;

public class B {
    public static void main(String[] args){
        A myA = new A();
    }
}
</pre>
