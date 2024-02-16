package lab1_3;

class Abs {
	private int size=8;
	public int getSize() {
		return size;
	}
	
	public void setSize(int newSize) {
		size = newSize;
	}

} 

public class p19 {

	public static void main(String args[])
	{
		Abs a = new Abs();
		a.setSize(67);
		System.out.println("Size value is: "+a.getSize()); 
		Abs a1 = new Abs();
		System.out.println("Size value is : "+a1.getSize());

}

}
