package lab2;
import MCA.Student;

public class p1 {
	
    public static void main(String[] args) {
        Student student = new Student("Ayush", 101, 85, 90, 75);
        student.display();
        int totalMarks = student.getMarks1() + student.getMarks2() + student.getMarks3();
        double percentage = (double) totalMarks / 3;
        System.out.println("Total Marks: " + totalMarks);
        System.out.println("Percentage: " + percentage + "%");
    }
}
