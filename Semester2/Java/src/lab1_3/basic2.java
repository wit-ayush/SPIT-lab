package lab1_3;
import java.util.*;

class BasicQuestions2 {
	public void helloworld(String s) {
        System.out.println(s);
    }
	
	class cart{
		int product_id,price;
		String product_name, product_category, product_purchase_date;
		
		cart(int product_id,String product_name, String product_category,String product_purchase_date,int price){
			this.product_id = product_id;
			this.product_name = product_name;
			this.product_category = product_category;
			this.product_purchase_date = product_purchase_date;
			this.price = price;
		}
		void display(){
			System.out.println("Product Id: "+product_id);
			System.out.println("Product name: "+product_name);
			System.out.println("Product Category: "+product_category);
			System.out.println("Product date: "+product_purchase_date);
			System.out.println("Price: "+price);
			System.out.println();
		}
		
	}
	
	class shopping_cart{
		double final_value;
		int total_product;
		void addproduct(cart c,double total_price) {
			total_product++;
			final_value += total_price;
		}
		void display() {
			System.out.println("Total no. of product: "+total_product);
			System.out.println("Final Value: "+final_value);
		}
	}

	public void shoppingPlatform(Scanner sc) {
		int i,n,product_id,price;
		String product_name, product_category, product_purchase_date;
		
		System.out.println("Enter number of product to enter: ");
		n = sc.nextInt();
		
		cart p[] = new cart[n];
	
		shopping_cart shop_c = new shopping_cart();
	
		for(i=0;i<n;i++) {
			System.out.println("Enter id:");
			product_id = sc.nextInt();
			
			System.out.println("Enter name: ");
			product_name = sc.next();
			
			System.out.print("Enter category: ");
			product_category = sc.next();
			
			System.out.print("Enter date: ");
			product_purchase_date = sc.next();
			
			System.out.print("Enter price: ");
			price=sc.nextInt();
			
			p[i] = new cart(product_id,product_name,product_category,product_purchase_date,price);
			shop_c.addproduct(p[i],price);
			
		}
		for(i=0;i<n;i++) {
			p[i].display();
		}
		shop_c.display();
		sc.close();
		
	}
	
	public void generatelotterynumber(){
        int randomNumber;
        Random random = new Random();
            randomNumber = random.nextInt(49) + 1;
            System.out.print(randomNumber + " ");
    }
	
	public void randSequeCapLetter() {
		int sequenceLength = 30; 
        int lettersPerLine = 6;
        
        String randomSequence = generateRandomSequence(sequenceLength);
        printSequence(randomSequence,lettersPerLine);
	}
	
	public static String generateRandomSequence(int length) {
		Random random = new Random();
        StringBuilder sb = new StringBuilder();
        
        for (int i = 0; i < length; i++) {
            char randomChar = (char) (random.nextInt(26) + 'A'); 
            sb.append(randomChar);
        }
        return sb.toString();
	}
	
	 public static void printSequence(String sequence, int lettersPerLine) {
		 int endIndex;
		 for (int i = 0; i < sequence.length(); i += lettersPerLine) {
			 endIndex = Math.min(i + lettersPerLine, sequence.length());
			 System.out.println(sequence.substring(i, endIndex));
		 }
	 }

}

class laptop{
	String brand, model;
	int ram_GB,storage_GB;
	
	laptop(String brand,String model, int ram_GB, int storage_GB){
		this.brand=brand;
		this.model=model;
		this.ram_GB=ram_GB;
		this.storage_GB=storage_GB;
	}
	
	void display() {
		System.out.println();
		System.out.println("Brand: "+brand);
		System.out.println("Model: "+model);
		System.out.println("Ram: "+ram_GB);
		System.out.println("Storage: "+storage_GB);
	}
}

class subject{
	String java;
	subject(String java){
		this.java=java;
	}
	void display(){
		int i;
		char[] charArray = java.toCharArray();
		System.out.println ("J.V. using conversion to char[]: ");
		for(i=0; i<charArray.length; i++) {
			System.out.println("charArray["+i+"]: "+charArray[i]+" ");
		}
		System.out.println ("\nJ.V. using conversion using charat():");
		for(i=0; i<charArray.length; i++) {
			System.out.println("charAt("+i+"): "+java.charAt(i)+" ");
		}
		
	}
}

class Employee{
	private int emp_id;
	private String emp_name;
	Employee(int emp_id,String emp_name){
		this.emp_id=emp_id;
		this.emp_name=emp_name;
	}
	void display() {
		System.out.println("\nEmployee Detail:");
		System.out.println("ID: "+emp_id);
		System.out.println("Name: "+emp_name);
	}
}

class Programmer extends Employee{
	String language;
	Programmer(int emp_id,String emp_name,String language){
		super(emp_id,emp_name);
		this.language=language;
	}
	void display(){
		super.display();
		System.out.print("Language: "+language);
	}
}

class animal{
	String breed;
	void setbreed(String breed){
		this.breed=breed;
	}
	void display(){
		System.out.println("Breed: "+breed);
	}
}

class dog{
	String dog_name;
	animal a=new animal();
	dog(String name,String breed){
		dog_name=name;
		a.setbreed(breed);
	}
	void display() {
		System.out.println("\nDog Details....");
		a.display();
		System.out.println("Name: "+dog_name);
	}
}

abstract class shape{
	abstract double area();
}

class square extends shape{
	int side;
	void get_data(int side){
		this.side=side;
	}
	double area() {
		return side*side;
	}
}

class rectangle extends shape{
	int l,b;
	Scanner sc = new Scanner(System.in);
	
	void get_data(int l,int b){
		this.l=l;
		this.b=b;
	}
	double area() {
		return l*b;
	}
}

class animals{
	String species;
	animals(String species){
		this.species=species;
	}
	void display(){
		System.out.println("Species: " + species);
	}
}

class lion extends animals{
	String color;
	lion(String color,String species){
		super(species);
		this.color=color;
	}
	
	void display(){
		super.display();
		System.out.println("Color: "+color);
	}
}

class Account {
	String Name; int acno; double balance; double checkbal()
	{
		return balance;
	}
}

class AccountEx extends Account
{
	AccountEx (String Name,int a,double b)
	{
		this.Name=Name; acno=a; balance=b;
	}
	
	void withdraw(double amt)
	{
		balance=balance-amt;
		if(balance < 500){
			System.out.println("Can't Withdraw minimum balance should be greater than 500");
			balance=balance+amt;
		}
		else{
			 
			System.out.println("Withdrawal succesfull of "+amt);
		}
	}
	
	void deposit(double amt)
	{
		balance=balance+amt;
	}
	
	void transfer(Account b, double k)
	{
		balance=balance-k;
		if(balance<500.00){
			System.out.println("You don't have sufficient balance to transfer\n");
			balance=balance+k;
		}
		else {
			b.balance=b.balance+k; 
			System.out.println("acno:"+acno+" "+"balance is"+"\n"+balance);
			System.out.println("acno:"+b.acno+" "+"balance is"+"\n"+b.balance);
		}
	}
}

class findError{
	public void findErrorfunc(){
		AccountEx s = new AccountEx("Pradnya",1,55000.00); 
		System.out.println("The balance is:"+s.checkbal());
		System.out.println("Enter the withdrawing amt"); 
		Scanner sc = new Scanner(System.in); 
		double i = sc.nextDouble(); 
		s.withdraw(i);
		
		System.out.println("The balance is:"+s.checkbal());
		System.out.println("Enter the Deposit amt"); 
		Scanner sc1 = new Scanner(System.in); 
		double j = sc1.nextDouble();
		s.deposit(j);
		
		System.out.println("The balance is:"+s.checkbal()); 
		AccountEx b = new AccountEx("Nameeta",2,65000.00);
		System.out.println("Enter amt to transfer:"); 
		Scanner sc2 = new Scanner(System.in); 
		double k = sc2.nextDouble();
		s.transfer(b,k);
		
		sc.close();
		sc1.close();
		sc2.close();
	}
}

class CurrencyConverter{
	
	double converttoruppee(int amt){
		return amt;
	}
	
	double converttoUSD(int amt) {
		return amt/83.035;
	}
	
	double converttoEUR(int amt) {
		return amt/89.52;
	}
	
	double converttoJPY(int amt) {
		return amt*1.7881;
	}
}

public class basic2 {

	public static void main(String[] args) {
//		Scanner scanner = new Scanner(System.in);
		BasicQuestions2 obj2 = new BasicQuestions2();
		
		// 1. W.A.P on to print " Hello World ".
		
		// obj2.helloworld("Hello World");
		
		// 2. Create a class cart in a shopping store. The class should have Product Name, Product Id , 
		// Product purchase date ,Product Category ( Apply respective data structure).Implement a method to 
		// add Total Products purchased and Final values of Each day purchase. Use appropriate Objects and 
		// Constructors wherever needed.
		
		// obj2.shoppingPlatform(scanner);
		
		// 3. Create a class Laptop with specifications and assign suitable data types to its feature Make 
		// use of suitable methods and Constructors and display the output.
		
		// laptop l = new laptop("Lenevo", "Legion5", 16, 512);
		// System.out.println();
		// System.out.print("Laptop Details");
		// l.display();
		
		// 4. Define a class subject . Take input string as name "Java " Show the o/p as J.V. using 
		// conversion to char[]. Then using CharAt() show the o/p.
		
		// subject subject = new subject("Java");
		// subject.display();
		
		// 5. W.A.P based on Is- A relationship in a context of Organisation which have Employee & 
		// Programmer "Is-A" relationship.
		
		// Programmer p = new Programmer(1,"Ayush","Java");
		// p.display();
		
		// 6. W.A.P and explain the "Has-A" relationship.
		// dog d = new dog("Tom","BullDog");
		// d.display();
		
		// 7. W.A.P based on the concept of Inheritance using Shape class of various geometrical 
		// figures.Calculate Area for different shapes
		
		// square s = new square();
		// rectangle r = new rectangle();
		
		// s.get_data(4);
		// r.get_data(3,7);
		
		// double s_area = s.area();
		// double r_area = r.area();
		
		// System.out.print("\nArea of square: "+s_area);
		// System.out.print("\nEnter rectangle: "+r_area);
		
		// 8. W.A.P to define a Class "Animal" and a subclass "Lion" 
		// lion lion=new lion("White", "African");
		// lion.display();
		
		// 9. Find the error
		// findError findErrorfunc = new findError();
		// findErrorfunc.findErrorfunc();
		
		// 10. W.A.P to print command line arguments using for loop
		// for(int i = 0; i<args.length; i++) System.out.print("Agrument value of a["+i+"] = "+args[i]);
		
		// 11. W.A.P to create a Class"Currency Convertor" to convert Rupees into Different Currencies
		// CurrencyConverter CurrencyConverter = new CurrencyConverter();
		// int amt = 100;
		// System.out.println("Considering Input value are in ruppees");
		// System.out.println("Coversion result:");
		// System.out.println("Rupees: "+CurrencyConverter.converttoruppee(amt));
		// System.out.println("USD: "+CurrencyConverter.converttoUSD(amt));
		// System.out.println("EUR: "+CurrencyConverter.converttoEUR(amt));
		// System.out.println("JPY: "+CurrencyConverter.converttoJPY(amt));
		
		// 12. W.A.P to generate Lottery Numbers (1 to 49)
		// obj2.generatelotterynumber();
		
		// 13. W.A.P to generate a random sequence of capital letters such that in one line only 6 letters 		// can be seen.
		// obj2.randSequeCapLetter();
		
	}

}
