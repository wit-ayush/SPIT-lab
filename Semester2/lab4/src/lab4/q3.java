package lab4;

import java.io.*;

public class q3 {
    public static void main(String[] args) {
        try {
            // Open the file "try.txt" using FileInputStream and display its content
            FileInputStream fis = new FileInputStream("new_sample.txt");
            System.out.println("Content of try.txt:");
            int content;
            while ((content = fis.read()) != -1) {
                System.out.print((char) content);
            }
            fis.close();

            // Copy the content of "first.txt" to "second.txt" using BufferedReader and BufferedWriter
            BufferedReader reader = new BufferedReader(new FileReader("new_sample.txt"));
            BufferedWriter writer = new BufferedWriter(new FileWriter("second.txt"));
            String line;
            System.out.println("\nCopying content of first.txt to second.txt...");
            while ((line = reader.readLine()) != null) {
                writer.write(line);
                writer.newLine(); // Add newline character for each line
            }
            reader.close();
            writer.close();
            System.out.println("Content copied successfully from first.txt to second.txt.");
        } catch (FileNotFoundException e) {
            System.err.println("File not found: " + e.getMessage());
        } catch (IOException e) {
            System.err.println("Error reading/writing file: " + e.getMessage());
        }
    }
}
