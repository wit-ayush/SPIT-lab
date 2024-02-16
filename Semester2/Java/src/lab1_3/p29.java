package lab1_3;
import java.util.*;

 interface subject1{
	 void getmarks(int s1,int s2);
	 void displaymarks();
 }
 
 class practical implements subject1{
	 int DBMS, SE;
	 public void getmarks(int DBMS,int SE) {
		 this.DBMS=DBMS;
		 this.SE=SE;
	 }
	 public void displaymarks() {
		 System.out.println("\nPractical Marks");
		 System.out.println("DBMS: "+DBMS);
		 System.out.println("SE: "+SE);
	 }
 }
 
 class theory implements subject1{
	 int PA, Java;
	 public void getmarks(int PA,int Java) {
		 this.PA=PA;
		 this.Java=Java;
	 }
	 public void displaymarks() {
		 System.out.println("\nTheory Marks");
		 System.out.println("PA: "+PA);
		 System.out.println("Java: "+Java);
	 }
 }
public class p29 {
	public static void main(String a[]) {
		Scanner sc=new Scanner(System.in);
		int DBMS, SE, PA, JAVA;
		practical p=new practical();
		theory t=new theory();
		
		System.out.println("Enter Practical Marks");
		System.out.print("DBMS: ");
		DBMS=sc.nextInt();
		System.out.print("SE: ");
		SE=sc.nextInt();
		
		System.out.println("Enter Theory Marks");
		System.out.print("PA: ");
		PA=sc.nextInt();
		System.out.print("Java: ");
		JAVA=sc.nextInt();
		
		p.getmarks(DBMS, SE);
		t.getmarks(PA, JAVA);
		
		p.displaymarks();
		t.displaymarks();
		sc.close();
	}
}