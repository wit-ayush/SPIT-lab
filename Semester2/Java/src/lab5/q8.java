package lab5Package;
import java.io.*;

public class Q8Main {
    public static void main(String[] args) {
        String inputFileName = "D:/eclipse-workspace/Lab5/src/lab5Package/input.txt";
        String outputFileName = "D:/eclipse-workspace/Lab5/src/lab5Package/output.txt";

        try (BufferedInputStream inputStream = 
        		new BufferedInputStream(new FileInputStream(inputFileName));
             BufferedWriter outputStream = 
            		 new BufferedWriter(new FileWriter(outputFileName))) {

            int data;
            while ((data = inputStream.read()) != -1) {
                if (!Character.isDigit((char) data)) {
                    outputStream.write(data);
                }
            }

            System.out.println("Content printed to:  " + outputFileName);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
