package MCA;

import MCA_temp.Temp;

public class Student {
	
	Temp temp = new Temp("Ayush", 101, 85, 90, 75);
	
	
    private String name;
    private int rollNumber;
    private int marks1;
    private int marks2;
    private int marks3;

    public int getMarks1() {
        return marks1;
    }

    public int getMarks2() {
        return marks2;
    }

    public int getMarks3() {
        return marks3;
    }
    
    public Student(String name, int rollNumber, int marks1, int marks2, int marks3) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.marks1 = marks1;
        this.marks2 = marks2;
        this.marks3 = marks3;
    }

    public void display() {
    	temp.tempdisplay();
        System.out.println("Name: " + name);
        System.out.println("Roll Number: " + rollNumber);
        System.out.println("Marks 1: " + marks1);
        System.out.println("Marks 2: " + marks2);
        System.out.println("Marks 3: " + marks3);
    }
}
