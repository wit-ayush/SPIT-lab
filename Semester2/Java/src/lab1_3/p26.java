package lab1_3;

class parent1{
	String name;
	public parent1(String name) {
		this.name=name;
	}
	void showdata() {
		System.out.println("\nParent name: "+name);
	}
}

class child1 extends parent1{
	String name;
	public child1(String child1,String parent){
		super(parent);
		name=child1;
	}
	void showdata() {
		super.showdata();
		System.out.println("Chlid1 name: "+name);
	}
}

class child2 extends child1{
	String name;
	public child2(String child2,String child1,String parent){
		super(child1,parent);
		name=child2;
	}
	void showdata() {
		super.showdata();
		System.out.println("Chlid2 name: "+name);
	}
}

public class p26 {
	public static void main (String a[]) {
		child2 c2=new child2("Luffy","Dragon","Grap");		
		c2.showdata();
	}
}
