package lab1_3_20_1;

import java.util.Scanner;

public class Factorial {
	public void Factorial() {
		System.out.println("Enter Number To Find Factorial: "); 
		Scanner sc = new Scanner(System.in);
		int n=sc.nextInt(); 
		int f=1;
		for(int i=n;i<0;i--) {
			f=f*i; 
			}

		System.out.println("\nFactorial of "+ n +" is: "+f);
	}
}
