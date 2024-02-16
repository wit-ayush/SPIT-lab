package lab1_3;

final class Dept{
	final String classname="SYMCA";
	
	void display() {
		System.out.println("Class name: "+classname);
	}
}

public class p25 {
	public static void main(String a[]) {
		Dept d = new Dept();
		
//		d.classname="FYMCA";
		
		d.display();
	}
}
