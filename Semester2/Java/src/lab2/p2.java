package lab2;
import MCA.First;


public class p2 {
    public static void main(String[] args) {
        try {
            Class.forName("MCA.First");
            System.out.println("Class found MCA.First");
            Class.forName("MCA.First2");
            System.out.println("Class found MCA.First2");
        } catch (ClassNotFoundException e) {
            System.out.println("ClassNotFoundException caught");
            System.out.println("This block is executed");
        }
    }
}
