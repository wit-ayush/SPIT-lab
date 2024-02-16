// 15. Identify the error in the give program class Circle

package lab1_3;


class Circle{
	private double radius;
	String color;
	
	public Circle(double r , String c)
	{
		radius = r; 
		color = c;
	}
	
	public double getRadius()
	{
		return radius;
		}
	
	public double findArea()
	{
		return radius*radius*Math.PI;
		}
} 

public class p15 {
	public static void main(String args[]){
		Circle myc = new Circle(5.0,"blue");
		printCircle(myc); 
		colorCircle(myc,"black"); 
		printCircle(myc);
	}
	public static void colorCircle(Circle c , String color)
	{
		c.color = color;
	}
	public static void printCircle(Circle c)
	{
		System.out.println("The Area of the Circle of the radius: "+c.getRadius()+" is "+c.findArea()); 
		System.out.println("The Color of the circle is: "+c.color);
	}

}
