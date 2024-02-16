package lab1_3_20_3;

import java.util.Scanner;

public class Rectangle {
	public void RectArea()
	{
		Scanner sc = new Scanner(System.in);

		System.out.println("\nEnter Length of the Rectangle :"); 
		int l=sc.nextInt();
		
		System.out.println("Enter Breadth of the Rectangle :"); 
		int b=sc.nextInt();
		
		int area=l*b;
		System.out.println("\nArea of Rectangle is = " +area);
	}
}
