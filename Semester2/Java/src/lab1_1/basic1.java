package lab1_1;
import java.util.*;

class BasicQuestions {
    public static void multiplicationTable(int n) {
        for(int i=1; i<=10; i++){
            System.out.println(n + " x " + i + " = " + n*i);
        };
    }

    public static void GCD(int n, int m) {
        int a = n > m ? n : m ;
        int b = n < m ? n : m;
        int ans = 1;
        int r = a%b;
        if(r == 0){
            ans = b;        
        } else if(b%r == 0){
            ans = r;
        }
        System.out.println("GCD is "+ans);
    }

    public static void Calculator(int n, int m) {
        int add = n + m;
        int subtract = n - m;
        int multi = n*m;
        double div = n / m;
        
        System.out.println("Addition is "+add);
        System.out.println("subtract is "+subtract);
        System.out.println("multi is "+multi);
        System.out.println("div is "+div);
    }

    public static void Fib(int n) {
        ArrayList<Integer> ans = new ArrayList<Integer>();

        if(n == 1){
            ans.add(0);
        } else if(n == 2){
            ans.add(0);
            ans.add(1);
        } else{
            ans.add(0);
            ans.add(1);
            for(int i=2; i<=n; i++){
                int x = ans.get(i-1) + ans.get(i-2);
                ans.add(x);
            }
        }
        for(int i: ans){
            System.out.println(i);
        }

    }

    public static void ReverseString(String y) {
        StringBuilder x = new StringBuilder(y);
        int i = 0;
        int j = x.length() - 1;
        while(i<j){
            char temp = x.charAt(i);
            x.setCharAt(i, x.charAt(j));
            x.setCharAt(j, temp);
            i++;
            j--;
        }
        System.out.println(x.toString());
    }

    public static void printOneNum() {
        Scanner inp = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = inp.nextInt();
        String nstr = Integer.toString(n);
        for (int i = 0; i < nstr.length(); i++) System.out.println(nstr.charAt(i));
        inp.close();
    }

    public static void PersonalDetails() {
        Scanner inp = new Scanner(System.in);

        System.out.print("Enter your name: ");
        String ur_name = inp.nextLine();

        System.out.print("Enter your gender: ");
        String gender = inp.nextLine();

        System.out.print("Enter your Address: ");
        String address = inp.nextLine();

        System.out.print("Enter your College Name: ");
        String college = inp.nextLine();
        
        System.out.print("Enter your Phone Number: ");
        long phone = inp.nextLong();

        

        System.out.println("Name: " + ur_name);
        System.out.println("Gender: " + gender);
        System.out.println("Address: " + address);
        System.out.println("Phone Number: " + phone);
        System.out.println("College Name: " + college);

        inp.close();
    }

    public static void EvenOdd(int x) {
        if(x % 2 == 0){
            System.out.println("Number is even");
        } else {
            System.out.println("Number is odd");
        }
    }

    public static Integer Palindrome(int x) {
        String xstr = String.valueOf(x);

        int i = 0;
        int j = xstr.length() - 1;
        
        while(i <= j){
            if(xstr.charAt(i) == xstr.charAt(j)){
                i++;
                j--;
            } else {
                System.out.println("Not Palindrome");
                return 0;
            }
        }

        System.out.println("Its a Palindrome");
        return 0;
    }

    public static void AddTenOfSeries(int x) {
        long n = x + 10;
        long totalSum = (n*(n+1))/2;
        long remSum = (x*(x+1))/2;

        long finalSum = totalSum - remSum;
        System.out.println("Sum is " + finalSum);
    }
    
    public static void AgeBasedOnDOB() {
        int birthYear = 2003;
        int currentYear = 2024;
        System.out.println("Your age is: " + (currentYear - birthYear));
    }

    public static void PatternPrint( int n) {
        for(int i = 1; i <= n; i++){
        	for(int k = n - 1; k >= i; k--){
                System.out.print(" ");
            }
        	for(int j = 2; j <= i; j++){
                System.out.print("*");
            }
        	for(int l = 1; l <= i; l++){
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void DivisionOfNum(int n, int m) {
        if(m != 0){
            System.out.println("Division of " + m + "/" + n + " number is: "+ (n/m));
        }else{
            System.out.println("Number 2 cannot be zero");
        }
    }

    public static void IntToChar(Scanner Scanner) {
        Scanner s = new Scanner(System.in); 
        System.out.print("Enter a single-digit number: "); 
        int num = s.nextInt(); 
        String[] arr = {"zero", "one", "two", "three", "four", "five", "six", "seven", 
        "eight", "nine"}; 
        if (num >= 0 && num <= 9) { 
        System.out.println(arr[num]); 
        } else { 
        System.out.println("Invalid input. Please enter a single-digit number."); 
        } 
    }

    public static void CheckPrime(int num) {
        for (int i = 2; i <= num / 2; i++) { 
            if (num % i == 0) { 
                System.out.println("The given number is not a prime number"); 
                return;
            }
        } 
        System.out.println("It is a prime number"); 
    }

    public static void CheckLeapYear(int year) {
        if(year%4 == 0 && year%100!=0 || (year%400 == 0)) 
            System.out.println("The year "+year+" is a leap year."); 
        else 
            System.out.println("It is not a leap year."); 
    }

    public static void PosNdNeg(int number) {
        if (number > 0) 
            System.out.println("The number is positive."); 
        else if (number < 0) 
            System.out.println("The number is negative."); 
        else
            System.out.println("The number is zero."); 
    }

    public static void SumOfNatuNum(int num1) {
        int num2 = num1*(num1+1)/2; 
        System.out.println("The Sum of " +num1+ " natural numbers is: " +num2); 
    }

    public static void Factorial(int n) {
        int num = 1;
        for (int i = 1; i <= n; i++) num *= i; 
        System.out.println("The factorial of number " + n + " is: " + num); 
    }
    
    public static void AllPrimeTillN(int num) {
        System.out.print("Prime numbers up to " + num + ": ");
        for (int i = 2; i < num; i++) { 
            boolean isPrime = true; 
            for (int j = 2; j < i; j++) { 
                if (i % j == 0) { 
                    isPrime = false; 
                    break; 
                } 
            } 
            if (isPrime) { 
                System.out.print(i + " "); 
            } 
        } 
        System.out.println();
    }
    
    public static void VowelOrNot(char c) {
        if(c == 'a' || c == 'i' ||c == 'e' || c == 'o' || c == 'u'){ 
            System.out.println(c+" is a vowel."); 
        } 
        else { 
            System.out.println(c+"is not a vowel"); 
        } 
    }

    public static void SimpleInterst() {
        int Principal = 68956;
        int InterestRate = 12;
        int time = 3; 
        int FinalAmount = Principal + (Principal * InterestRate * time)/100; 
        int SimpleInterest = FinalAmount - Principal; 
        System.out.println("The interest amount is: "+SimpleInterest); 
    }

    public static void OctalToDecimal() {
        int decimalNumber = 0; 
        int power = 0; 
        String octalNumber = "1111"; 
        for (int i = octalNumber.length() - 1; i >= 0; i--) { 
            int digit = Character.getNumericValue(octalNumber.charAt(i)); 
            decimalNumber += digit * Math.pow(8, power); 
            power++; 
        } 
        System.out.println("Decimal equivalent: " + decimalNumber); 
    }

}

public class basic1 {
    public static void main(String args[]) {

        Scanner scanner = new Scanner(System.in);
        BasicQuestions obj = new BasicQuestions();
        
        // 1. To Generate Multiplication Table
        // obj.multiplicationTable(5);

        // 2.      To Find GCD of two Numbers
        // obj.GCD(18, 42);

        // 3.      Calculator Program in Java
        // obj.Calculator(5,8);
        
        // 4.      To calculate Fibonacci Series up to n numbers.
        // obj.Fib(5);
        
        // 5.      W.A.P to reverse your First Name using Strings .
        // obj.ReverseString("ayush");

        // 6.      W.A.P to Print one number at a time , input must be from the user
        // obj.printOneNum();

        // 7.      W.A.P to print your Personal details ( Name , Gender, Address , Phone No.,College Name )
        // obj.PersonalDetails();

        // 8.      W.A.P to check whether a number is  Odd or even
        // obj.EvenOdd(10);
        
        // 9.       W.A.P to check whether a number is palindrome or Not. 
        // obj.Palindrome(1233212);

        // 10.     W.A.P to add 10  numbers of one series .(Example :- If the user inputs 3 then its should take  numbers from 3,4,5……..12)
        // obj.AddTenOfSeries(5);

        // 11.  W.A.P to print your Age based on your Birth date
        // obj.AgeBasedOnDOB();

        // 12.  W.A.P to create  the following output :-

        //         1

        //         11

        //         111

        //         1111

        //         11111  
//         obj.PatternPrint(5);

        // 13.  W.A.P to accept any two numbers and perform division on it ( If the number is in decimal value         then convert them into a whole number)
        // obj.DivisionOfNum(6, 3);

        // 14.  W.A.P to convert number in characters (E.g. 123 , Output One Two Three )
         obj.IntToChar(scanner);

        // 15.  To convert Number to word
        // obj.IntToChar(scanner);

        // 16.  Java Program to Check Whether a Number is Prime or Not using different control structure
        // obj.CheckPrime(11);

        // 17. To Check a Leap year
        // obj.CheckLeapYear(2011);
        
        // 18. To check whether a number is positive or negative
        // obj.PosNdNeg(-55);
        
        // 19. To calculate the sum of Natural Numbers
        // obj.SumOfNatuNum(5);
        
        // 20. To Find the factorial of a Number
        // obj.Factorial(5);
        
        // 21.To display all prime numbers from 1 to N.
        // obj.AllPrimeTillN(20);

        // 22.To check whether Input character is Vowel or Not.
        // obj.VowelOrNot('o');

        // 23.To calculate simple Interest
        // obj.SimpleInterst();

        // 24.To convert octal to decimal conversion
        // obj.OctalToDecimal();
        
        // 25. Conclude what is the difference between JAVA and C++
    }
}
