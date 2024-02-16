package lab1_3;

public class student_info {
	int roll_no,total_marks,obt_marks;
	String name;
	
	
	void get_student_deatils(int roll_no, String name) {
		this.roll_no=roll_no;
		this.name=name;
	}
	void display_student_details() {
		System.out.println("Roll no.: "+roll_no);
		System.out.println("Name: "+name);
	}
	
	void get_marks(int obt_marks, int total_marks) {
		this.total_marks=total_marks;
		this.obt_marks=obt_marks;
	}
	void display_marks() {
		System.out.println("Marks: "+obt_marks+" out of "+total_marks);
	}
}