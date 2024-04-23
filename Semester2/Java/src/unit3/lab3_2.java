package unit3;

class GenericClass<T> {
    private T value;

    public GenericClass(T value) {
        this.value = value;
    }

    public T getValue() {
        return value;
    }

    public void setValue(T value) {
        this.value = value;
    }
}

public class lab3_2 {
    public static void main(String[] args) {
        // Using Integer
        GenericClass<Integer> integerGenericClass = new GenericClass<>(10);
        System.out.println("Integer value: " + integerGenericClass.getValue());

        // Using Double
        GenericClass<Double> doubleGenericClass = new GenericClass<>(3.14);
        System.out.println("Double value: " + doubleGenericClass.getValue());

        // Using Boolean
        GenericClass<Boolean> booleanGenericClass = new GenericClass<>(true);
        System.out.println("Boolean value: " + booleanGenericClass.getValue());

        // Using Character
        GenericClass<Character> charGenericClass = new GenericClass<>('A');
        System.out.println("Character value: " + charGenericClass.getValue());
    }
}
