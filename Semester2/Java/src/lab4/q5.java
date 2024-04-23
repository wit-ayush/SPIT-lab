package lab4;

import java.io.*;

public class q5 {
    public static void main(String[] args) {
        try {
            BufferedReader reader = new BufferedReader(new FileReader("new_sample.txt"));
            String line;
            System.out.println("Content of the file (without vowels):");
            while ((line = reader.readLine()) != null) {
                for (char ch : line.toCharArray()) {
                    if (!isVowel(ch)) {
                        System.out.print(ch);
                    }
                }
                System.out.println(); // Print newline after each line
            }
            reader.close();
        } catch (FileNotFoundException e) {
            System.err.println("Error: File 'first.txt' not found.");
        } catch (IOException e) {
            System.err.println("Error reading file: " + e.getMessage());
        }
    }

    // Function to check if a character is a vowel
    private static boolean isVowel(char ch) {
        ch = Character.toLowerCase(ch);
        return ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u';
    }
}
