package lab1_3;
abstract class BankAccount1{
	abstract void deposit(int acc_no,double amt);
	abstract void withdraw(int acc_no,double amt);
}

class Account2 extends BankAccount1{
	int acc_no;
	double amt=0;
	public void deposit(int acc_no, double amt) {
		this.acc_no=acc_no;
		this.amt=this.amt+amt;
	}
	public void withdraw(int acc_no, double amt) {
		this.acc_no=acc_no;
		this.amt=this.amt-amt;
	}
	void check_balance() {
		System.out.print("Acc no: "+acc_no);
		System.out.println("\nBalance: "+amt);
	}
}
public class p18 {
	public static void main(String a[]) {
		Account1 ac=new Account1();
		ac.deposit(1, 100);
		ac.check_balance();
		ac.withdraw(1, 10);
		ac.check_balance();
	}
}
