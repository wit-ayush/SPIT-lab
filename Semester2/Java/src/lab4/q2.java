package lab4;

import java.sql.*;

public class q2 {
    // JDBC URL, username, and password of MySQL server
    private static final String JDBC_URL = "jdbc:mysql://localhost:3306";
    private static final String USER = "root";
    private static final String PASSWORD = "1234";

    public static void main(String[] args) {
        try (Connection connection = DriverManager.getConnection(JDBC_URL, USER, PASSWORD)) {
            Statement statement = connection.createStatement();

            // Creating the database
            String createDatabaseQuery = "CREATE DATABASE IF NOT EXISTS Java_lab4_q2";
            statement.executeUpdate(createDatabaseQuery);
            System.out.println("Database created successfully.");

            // Switching to the created database
            String useDatabaseQuery = "USE Java_lab4_q2";
            statement.executeUpdate(useDatabaseQuery);
            System.out.println("Switched to the Java_lab4_q2 database.");

            // Creating a table
            String createTableQuery = "CREATE TABLE IF NOT EXISTS EmployeeDetails ("
                    + "id INT AUTO_INCREMENT PRIMARY KEY,"
                    + "name VARCHAR(100),"
                    + "age INT,"
                    + "department VARCHAR(100))";
            statement.executeUpdate(createTableQuery);
            System.out.println("Table EmployeeDetails created successfully.");

            // Inserting data into the table
            String insertDataQuery = "INSERT INTO EmployeeDetails (name, age, department) VALUES "
                    + "('John Doe', 30, 'IT'),"
                    + "('Jane Smith', 28, 'HR'),"
                    + "('Bob Johnson', 35, 'Finance')";
            int rowsAffected = statement.executeUpdate(insertDataQuery);
            System.out.println(rowsAffected + " rows inserted.");

            // Fetching data from the table
            String selectDataQuery = "SELECT * FROM EmployeeDetails";
            ResultSet resultSet = statement.executeQuery(selectDataQuery);
            System.out.println("EmployeeDetails table data:");
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String name = resultSet.getString("name");
                int age = resultSet.getInt("age");
                String department = resultSet.getString("department");
                System.out.println("ID: " + id + ", Name: " + name + ", Age: " + age + ", Department: " + department);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
