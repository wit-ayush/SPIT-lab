package lab1_3;

class Animal1 {
	protected int legs=4;
	
	void setlegs() {
		System.out.println("This animal has "+legs+" legs");
	}
}

public class p32 extends Animal1{
	public static void main(String a[]) {
		Animal1 A=new Animal1();
		System.out.print("Before changing no of legs from child class. ");
		A.setlegs();
		
		A.legs = 2;
		System.out.print("After changing no of legs from child class. ");
		A.setlegs();
	}
}
