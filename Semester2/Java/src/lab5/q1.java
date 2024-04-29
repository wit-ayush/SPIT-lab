package lab5Package;
import java.util.Scanner;

public class Q1Main {
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		System.out.print("Enter an integer: ");

		try {
			String input = in.nextLine();
			int number = Integer.parseInt(input);
			if (number % 2 == 0) {
				throw new Exception("Number should not be divisible by 2!");
			}
			System.out.println("The entered number is: " + number);
		} catch (NumberFormatException e) {
			System.out.println("Invalid number: Cannot contain characters!");
		} catch (Exception e) {
			System.out.println(e.getMessage());
		} finally {
			in.close();
		}
	}
}

