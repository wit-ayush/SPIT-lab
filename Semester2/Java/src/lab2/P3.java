package lab2;
public class P3 {
	public static void main(String[] args) {
        MyCalculator myCalculator = new MyCalculator();
        int n = 6;
        int sum = myCalculator.divisor_sum(n);
        System.out.println("Sum of divisors of " + n + " is: " + sum);
    }
}
