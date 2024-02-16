package MCA;

public class Students {
	int roll_no,PA,Java,MP,total;
	public Students(int roll_no, int PA, int Java, int MP){
		this.roll_no=roll_no;
		this.PA=PA;
		this.Java=Java;
		this.MP=MP;
	}
	public void display(){
		System.out.println("\nRoll no.: "+roll_no);
		System.out.println("PA: "+PA);
		System.out.println("Java: "+Java);
		System.out.println("MP: "+MP);
	}
	public void total_marks() {
		total=PA+Java+MP;
		System.out.println("\nTotal Marks: "+total);
	}
	public void perncentage() {
		 float per=(total*100)/300;
		 System.out.println("Percentage: "+per);
	}
}	
