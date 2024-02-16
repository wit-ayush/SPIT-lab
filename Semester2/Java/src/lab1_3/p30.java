package lab1_3;
import java.util.*;

public class p30 {
	public static void main(String a[]) {
		Scanner sc=new Scanner(System.in);
		student_info MCA = new student_info();
		student_info Comp_eng = new student_info();
		
		int roll_no,total_marks,obt_marks;
		String name;
		
		System.out.println("MCA");
		System.out.print("Enter roll no: ");
		roll_no=sc.nextInt();
		sc.nextLine();
		System.out.print("Enter name: ");
		name=sc.nextLine();
		System.out.println("Exam detail");
		System.out.print("Enter marks obtained: ");
		total_marks=sc.nextInt();
		System.out.print("Out of: ");
		obt_marks=sc.nextInt();
		
		MCA.get_student_deatils(roll_no,name);
		MCA.get_marks(total_marks, obt_marks);
		
		System.out.println("Comp Engg");
		System.out.print("Enter roll no: ");
		roll_no=sc.nextInt();
		sc.nextLine();
		System.out.print("Enter name: ");
		name=sc.nextLine();
		System.out.println("Exam detail");
		System.out.print("Enter marks obtained: ");
		total_marks=sc.nextInt();
		System.out.print("Out of: ");
		obt_marks=sc.nextInt();
		Comp_eng.get_student_deatils(roll_no, name);
		Comp_eng.get_marks(total_marks, obt_marks);
		
		System.out.println("\nMCA detail..");
		MCA.display_student_details();
		MCA.display_marks();
		
		System.out.println("\nComp Engg detail...");
		Comp_eng.display_student_details();
		Comp_eng.display_marks();
		sc.close();
	}
}