package lab1_3;

public class p27 {
    public static void main(String[] args) {
        Integer num = new Integer(10);

        System.out.println("Integer : " + num);
        System.out.println("Integer to hash code: " + num.hashCode());
        System.out.println("Integer to binary string: " + Integer.toBinaryString(num));
        System.out.println("Integer to octal string: " + Integer.toOctalString(num));
        System.out.println("Integer to hexadecimal string: " + Integer.toHexString(num));
        System.out.println("Integer max value: " + Integer.MAX_VALUE);
        System.out.println("Integer min value: " + Integer.MIN_VALUE);


        int intValue = num.intValue();
        byte byteValue = num.byteValue();
        short shortValue = num.shortValue();
        long longValue = num.longValue();
        float floatValue = num.floatValue();
        double doubleValue = num.doubleValue();

        System.out.println("\nInteger to int: " + intValue);
        System.out.println("Integer to byte: " + byteValue);
        System.out.println("Integer to short: " + shortValue);
        System.out.println("Integer to long: " + longValue);
        System.out.println("Integer to float: " + floatValue);
        System.out.println("Integer to double: " + doubleValue);

        Integer num2 = new Integer(20);
        System.out.println("Comparing num and num2: " + num.compareTo(num2));
    }
}

