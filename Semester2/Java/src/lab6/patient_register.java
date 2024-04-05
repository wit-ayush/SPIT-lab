package lab6;

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.sql.*;

class patient_register extends JFrame implements ActionListener {
	
	private JLabel IDLabel, nameLabel, genderLabel, ageLabel, mobileLabel, bloodGroupLabel, heightLabel, weightLabel, addressLabel;
	private JTextField IDField, nameField, ageField, mobileField, heightField, weightField, addressField;
	private JComboBox<String> genderComboBox, bloodGroupComboBox;
	private JButton registerButton;
	
	private Connection connection;
    private Statement statement;
	
	patient_register(){
		setTitle("Patient Registration");
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
        
        //text Fields
        IDField = new JTextField();
        nameField = new JTextField();
        ageField = new JTextField();
        mobileField = new JTextField();
        heightField = new JTextField();
        weightField = new JTextField();
        addressField = new JTextField();
        
        // Combo Box
        String[] genders = {"Male", "Female", "Other"};
        genderComboBox = new JComboBox<>(genders);
        
        String[] bloodGroups = {"A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"};
        bloodGroupComboBox = new JComboBox<>(bloodGroups);
        
     // Button
        registerButton = new JButton("Register");
        registerButton.addActionListener(this);
        
     // Adding components to the frame
        add(IDLabel);
        add(IDField);
        add(nameLabel);
        add(nameField);
        add(genderLabel);
        add(genderComboBox);
        add(ageLabel);
        add(ageField);
        add(mobileLabel);
        add(mobileField);
        add(bloodGroupLabel);
        add(bloodGroupComboBox);
        add(heightLabel);
        add(heightField);
        add(weightLabel);
        add(weightField);
        add(addressLabel);
        add(addressField);
        add(new JLabel());
        add(registerButton);
        
        try {
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/hospital", "root", "root");
            statement = connection.createStatement();
            // Fetch last ID from the database
            ResultSet resultSet = statement.executeQuery("SELECT MAX(ID) AS lastID FROM Patients");
            if (resultSet.next()) {
                int lastID = resultSet.getInt("lastID");
                IDField.setText(String.valueOf(lastID + 1)); // Set next ID
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        IDField.setEditable(false);
        setVisible(true);
	}
	
	private void registerPatient() {
		String name = nameField.getText();
        String gender = (String) genderComboBox.getSelectedItem();
        int age = Integer.parseInt(ageField.getText());
        long mobile = Long.parseLong(mobileField.getText());
        String bloodGroup = (String) bloodGroupComboBox.getSelectedItem();
        double height = Double.parseDouble(heightField.getText());
        double weight = Double.parseDouble(weightField.getText());
        String address = addressField.getText();

        // Insert patient details into the database
        String insertQuery = "INSERT INTO Patients (Name, Gender, Age, Mobile, BloodGroup, Height, Weight, Address) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        try {
            PreparedStatement preparedStatement = connection.prepareStatement(insertQuery);
            preparedStatement.setString(1, name);
            preparedStatement.setString(2, gender);
            preparedStatement.setInt(3, age);
            preparedStatement.setLong(4, mobile);
            preparedStatement.setString(5, bloodGroup);
            preparedStatement.setDouble(6, height);
            preparedStatement.setDouble(7, weight);
            preparedStatement.setString(8, address);
            preparedStatement.executeUpdate();
            System.out.println("Patient Registered:\nName: " + name + "\nGender: " + gender + "\nAge: " + age + "\nMobile: " + mobile + "\nBlood Group: " + bloodGroup + "\nHeight: " + height + "\nWeight: " + weight + "\nAddress: " + address);
            clearFields();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
	
	private void clearFields() {
        nameField.setText("");
        genderComboBox.setSelectedIndex(0);
        ageField.setText("");
        mobileField.setText("");
        bloodGroupComboBox.setSelectedIndex(0);
        heightField.setText("");
        weightField.setText("");
        addressField.setText("");
    }

    public void actionPerformed(ActionEvent e) {
    	if (e.getSource() == registerButton) {
            registerPatient();
        }
    }

    public static void main(String[] args) {
        new patient_register();
    }
}