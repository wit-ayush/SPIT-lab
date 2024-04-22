package lab4;

import java.io.*;
import java.nio.file.*;
import java.nio.file.attribute.*;

public class q1 {
    // a. File Handling using Character Stream classes
    public static void fileHandling(String filename) {
        try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {
            String line;
            System.out.println("Content of the file:");
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.err.println("Error reading file: " + e.getMessage());
        }
    }

    // b. Write content onto file
    public static void writeToFIle(String filename, String content) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(filename))) {
            writer.write(content);
            System.out.println("Content successfully written to the file.");
        } catch (IOException e) {
            System.err.println("Error writing to file: " + e.getMessage());
        }
    }

    // c. Reading Content from Files
    public static void readFromFile(String filename) {
        try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {
            String line;
            System.out.println("Content of the file:");
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.err.println("Error reading file: " + e.getMessage());
        }
    }

    // d. To get current path of file.
    public static void getCurrentPath(String filename) {
        try {
            Path path = Paths.get(filename).toRealPath();
            System.out.println("Current path of the file: " + path);
        } catch (IOException e) {
            System.err.println("Error getting current path: " + e.getMessage());
        }
    }

    // e. file related operations like rename, last modification, specified director
    public static void fileOperations(String filename) {
        try {
            File file = new File(filename);
            
            // Renaming the file
            String newFilename = "new_" + filename;
            File newFile = new File(newFilename);
            if (file.renameTo(newFile)) {
                System.out.println("File renamed to: " + newFilename);
            } else {
                System.err.println("Failed to rename file.");
            }

            // Get last modification time
            BasicFileAttributes attr = Files.readAttributes(newFile.toPath(), BasicFileAttributes.class);
            FileTime modificationTime = attr.lastModifiedTime();
            System.out.println("Last modification time: " + modificationTime);

            // Get specified directory
            Path directory = newFile.toPath().getParent();
            System.out.println("Directory of the file: " + directory);
        } catch (IOException e) {
            System.err.println("Error performing file operations: " + e.getMessage());
        }
    }

    public static void main(String[] args) {
        String filename = "sample.txt";
        String content = "This is a sample file.";

        writeToFIle(filename, content);
        fileHandling(filename);
        getCurrentPath(filename);
        fileOperations(filename);
    }
}
