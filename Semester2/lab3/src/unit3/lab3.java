package unit3;


class GenAB<A, B> {
	 private A objA;
	 private B objB;

	 GenAB(A objA, B objB) {
	     this.objA = objA;
	     this.objB = objB;
	 }
	 
	
	 public A getObjA() {
	     return objA;
	 }
	
	 public B getObjB() {
	     return objB;
	 }
	
	
	 public void setObjA(A objA) {
	     this.objA = objA;
	 }
	
	 public void setObjB(B objB) {
	     this.objB = objB;
	 }
}


public class lab3 {
	 public static void main(String[] args) {
	
	     GenAB<String, Integer> genAB1 = new GenAB<>("Hello", 123);
	
	     System.out.println("objA: " + genAB1.getObjA());
	     System.out.println("objB: " + genAB1.getObjB());
	
	
	     GenAB<Double, Character> genAB2 = new GenAB<>(3.14, 'A');
	
	
	     System.out.println("objA: " + genAB2.getObjA());
	     System.out.println("objB: " + genAB2.getObjB());
	 }
}
