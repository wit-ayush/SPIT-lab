package lab1_3;

abstract class bank{
	abstract void getbalance(int amt);
}

class bank1 extends bank{
	int balance;
	
	void getbalance(int amt) {
		balance = amt;
	}
	void setbalance() {
		System.out.println("The balance of bank1 is $"+balance);
	}
}

class bank2 extends bank{
	int balance;
	
	void getbalance(int amt) {
		balance = amt;
	}
	void setbalance() {
		System.out.println("The balance of bank2 is $"+balance);
	}
}

class bank3 extends bank{
	int balance;
	
	void getbalance(int amt) {
		balance = amt;
	}
	void setbalance() {
		System.out.println("The balance of bank3 is $"+balance);
	}
}
public class p31 {
	public static void main(String a[]) {
		bank1 b1=new bank1();
		bank2 b2=new bank2();
		bank3 b3=new bank3();
		
		b1.getbalance(100);
		b2.getbalance(150);
		b3.getbalance(200);
		
		b1.setbalance();
		b2.setbalance();
		b3.setbalance();
	}
}
