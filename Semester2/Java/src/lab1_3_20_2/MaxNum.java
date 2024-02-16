package lab1_3_20_2;

import java.util.Scanner;

public class MaxNum {
	public void MaxNum() {
		System.out.println("\n1st number : "); 
		Scanner sc = new Scanner(System.in);
		int mn1=sc.nextInt();
		System.out.println("2nd number : "); 
		int mn2=sc.nextInt();
		
		if(mn1>mn2) {	
			System.out.println("\nMax Num is 1st Number");
		}
		else {
			System.out.println("\nMax Num is 2nd Number");
		}
	}
}
