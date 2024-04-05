package lab6;

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.sql.*;

public class patient_details extends JFrame {
    // Labels
    private JLabel IDLabel, nameLabel, genderLabel, ageLabel, mobileLabel, bloodGroupLabel, heightLabel, weightLabel, addressLabel;
    
    // Text Fields
    private JTextField IDField, nameField, ageField, mobileField, bloodGroupField, heightField, weightField, addressField;
    
    // Combo Box
    private JComboBox<String> genderComboBox;
    
    // Buttons
    private JButton searchButton, updateButton, deleteButton;
    
    // Database Connection
    private Connection connection;
    
    public patient_details() {
        setTitle("Patient Details");
        setSize(400, 300);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLayout(new GridLayout(11, 2));
        
        // Labels
        IDLabel = new JLabel("ID:");
        nameLabel = new JLabel("Name:");
        genderLabel = new JLabel("Gender:");
        ageLabel = new JLabel("Age:");
        mobileLabel = new JLabel("Mobile:");
        bloodGroupLabel = new JLabel("Blood Group:");
        heightLabel = new JLabel("Height:");
        weightLabel = new JLabel("Weight:");
        addressLabel = new JLabel("Address:");
        
        // Text Fields
        IDField = new JTextField();
        nameField = new JTextField();
        ageField = new JTextField();
        mobileField = new JTextField();
        bloodGroupField = new JTextField();
        heightField = new JTextField();
        weightField = new JTextField();
        addressField = new JTextField();
        
        // Combo Box
        String[] genders = {"Male", "Female", "Other"};
        genderComboBox = new JComboBox<>(genders);
        
        // Buttons
        searchButton = new JButton("Search");
        searchButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                searchPatient();
            }
        });
        
        updateButton = new JButton("Update");
        updateButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                updatePatient();
            }
        });
        
        deleteButton = new JButton("Delete");
        deleteButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                deletePatient();
            }
        });
        
        // Adding components to the frame
        add(IDLabel);
        add(IDField);
        add(new JLabel()); // Spacer
        add(searchButton);
        add(nameLabel);
        add(nameField);
        add(genderLabel);
        add(genderComboBox);
        add(ageLabel);
        add(ageField);
        add(mobileLabel);
        add(mobileField);
        add(bloodGroupLabel);
        add(bloodGroupField);
        add(heightLabel);
        add(heightField);
        add(weightLabel);
        add(weightField);
        add(addressLabel);
        add(addressField);
        add(updateButton);
        add(deleteButton);
        
        setVisible(true);
    }
    
    private void searchPatient() {
        String id = IDField.getText();
        
        try {
        	connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/hospital", "root", "1234");

            PreparedStatement statement = connection.prepareStatement("SELECT * FROM Patients WHERE ID = ?");
            statement.setString(1, id);
            ResultSet result = statement.executeQuery();
            if (result.next()) {
                nameField.setText(result.getString("Name"));
                genderComboBox.setSelectedItem(result.getString("Gender"));
                ageField.setText(String.valueOf(result.getInt("Age")));
                mobileField.setText(result.getString("Mobile"));
                bloodGroupField.setText(result.getString("BloodGroup"));
                heightField.setText(String.valueOf(result.getDouble("Height")));
                weightField.setText(String.valueOf(result.getDouble("Weight")));
                addressField.setText(result.getString("Address"));
            } else {
                JOptionPane.showMessageDialog(this, "Patient not found!", "Error", JOptionPane.ERROR_MESSAGE);
                clearFields();
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
            JOptionPane.showMessageDialog(this, "Database error!", "Error", JOptionPane.ERROR_MESSAGE);
        }
    }
    
    private void updatePatient() {
        String id = IDField.getText();
        String name = nameField.getText();
        String gender = (String) genderComboBox.getSelectedItem();
        int age = Integer.parseInt(ageField.getText());
        String mobile = mobileField.getText();
        String bloodGroup = bloodGroupField.getText();
        double height = Double.parseDouble(heightField.getText());
        double weight = Double.parseDouble(weightField.getText());
        String address = addressField.getText();
        
        try {
            PreparedStatement statement = connection.prepareStatement("UPDATE Patients SET Name=?, Gender=?, Age=?, Mobile=?, BloodGroup=?, Height=?, Weight=?, Address=? WHERE ID=?");
            statement.setString(1, name);
            statement.setString(2, gender);
            statement.setInt(3, age);
            statement.setString(4, mobile);
            statement.setString(5, bloodGroup);
            statement.setDouble(6, height);
            statement.setDouble(7, weight);
            statement.setString(8, address);
            statement.setString(9, id);
            int rowsUpdated = statement.executeUpdate();
            if (rowsUpdated > 0) {
                JOptionPane.showMessageDialog(this, "Patient details updated successfully!");
            } else {
                JOptionPane.showMessageDialog(this, "Failed to update patient details!", "Error", JOptionPane.ERROR_MESSAGE);
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
            JOptionPane.showMessageDialog(this, "Database error!", "Error", JOptionPane.ERROR_MESSAGE);
        }
    }
    
    private void deletePatient() {
        String id = IDField.getText();
       
        int option = JOptionPane.showConfirmDialog(this, "Are you sure you want to delete this patient?", "Confirm Delete", JOptionPane.YES_NO_OPTION);
        if (option == JOptionPane.YES_OPTION) {
            try {
                PreparedStatement statement = connection.prepareStatement("DELETE FROM Patients WHERE ID=?");
                statement.setString(1, id);
                int rowsDeleted = statement.executeUpdate();
                if (rowsDeleted > 0) {
                    JOptionPane.showMessageDialog(this, "Patient deleted successfully!");
                    clearFields();
                } else {
                    JOptionPane.showMessageDialog(this, "Failed to delete patient!", "Error", JOptionPane.ERROR_MESSAGE);
                }
            } catch (SQLException ex) {
                ex.printStackTrace();
                JOptionPane.showMessageDialog(this, "Database error!", "Error", JOptionPane.ERROR_MESSAGE);
            }
        }
    }
    
    private void clearFields() {
        IDField.setText("");
        nameField.setText("");
        genderComboBox.setSelectedIndex(0);
        ageField.setText("");
        mobileField.setText("");
        bloodGroupField.setText("");
        heightField.setText("");
        weightField.setText("");
        addressField.setText("");
    }

    public static void main(String[] args) {
        new patient_details();
    }
}