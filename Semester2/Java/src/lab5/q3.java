package lab5Package;
import java.io.*;

public class Q3Main extends ArithmeticException{
	public static void main(String[] args) {
		try {
			int res = 10 / 0;
		}
		catch(ArithmeticException e) {
			System.out.println("Error: " + e);
		}
	}
}

