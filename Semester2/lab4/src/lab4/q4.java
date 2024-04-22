package lab4;

import java.io.*;

public class q4 {
    public static void main(String[] args) {
        try {
            BufferedReader reader = new BufferedReader(new FileReader("even.txt"));
            String line;
            while ((line = reader.readLine()) != null) {
                try {
                    int number = Integer.parseInt(line.trim());
                    if (number % 2 == 0) {
                        int square = number * number;
                        System.out.println("Square of " + number + " is: " + square);
                    } else {
                        System.out.println(number + " is not an even number.");
                    }
                } catch (NumberFormatException e) {
                    System.err.println("Error: " + line + " is not a valid number.");
                }
            }
            reader.close();
        } catch (FileNotFoundException e) {
            System.err.println("Error: File 'even.txt' not found.");
        } catch (IOException e) {
            System.err.println("Error reading file: " + e.getMessage());
        }
    }
}
