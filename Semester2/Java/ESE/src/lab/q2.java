package lab;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

interface DisplayDetails {
    void displayNameAndAge(String name, int age);
}

class Display implements DisplayDetails {
    public void displayNameAndAge(String name, int age) {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}

public class q2 {
    public static void main(String[] args) throws IOException {
        Display obj = new Display();
        
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        
        System.out.print("Enter your name: ");
        String name = reader.readLine();
        
        System.out.print("Enter your age: ");
        int age = Integer.parseInt(reader.readLine());
        
        obj.displayNameAndAge(name, age);
    }
}
