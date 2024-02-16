// Execute the code and Demonstrate the significance of how Super Keyword is used in the 
// Program. class Parent
package lab1_3;

class Parent {
	int a;
	public Parent(int val) {
		a = val;
	}
}

public class p16 extends Parent {
	int b=9,c; 
	public p16() {
		super(5);
	}

	public void add() {
		c = a+b;
	}

	public void show(){
		System.out.println("Addition is: "+c);
	}
	
	public static void main(String args[]){
		p16 ch = new p16(); 
		ch.add();
		ch.show();
	}
}