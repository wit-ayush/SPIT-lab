package lab5Package;

class Super1 {
    void display() {
        System.out.println("In class Super1");
    }
}

class Child1 extends Super1 {
    void display() {
    	System.out.println("\nIn class Child1");
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("ArithmeticException caught in Child1 class");
        }
    }
}

public class Q2Main {
    public static void main(String[] args) {
        Super1 superObj = new Super1();
        Child1 childObj = new Child1();
        superObj.display();
        childObj.display();
    }
}

