package lab1_3;
interface BankAccount{
	void deposit(int acc_no,double amt);
	void withdraw(int acc_no,double amt);
}

class Account1 implements BankAccount{
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
public class p17 {
	public static void main(String a[]) {
		Account1 ac=new Account1();
		ac.deposit(1, 100);
		ac.check_balance();
		ac.withdraw(1, 10);
		ac.check_balance();
	}
}
