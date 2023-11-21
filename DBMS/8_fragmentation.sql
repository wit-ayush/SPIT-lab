-- Parent Login
CREATE USER User160 IDENTIFIED BY 'password1';
CREATE USER User260 IDENTIFIED BY 'password2';

-- Create the database
CREATE DATABASE lab_8;
USE lab_8;

-- Create a table in parent login
CREATE TABLE employee_parent (
   empid INT,
   ename VARCHAR(255),
   address VARCHAR(255),
   salary INT,
   department VARCHAR(255)
);

INSERT INTO employee_parent (empid, ename, address, salary, department)
VALUES
   (1, 'Ravi', '123 St.', 35000, 'IT'),
   (2, 'Avi', '456 St.', 24000, 'HR'),
   (3, 'Kavi', '789 St.', 48000, 'Finance'),
   (4, 'Rabi', '101 St.', 18000, 'Marketing'),
   (5, 'dabi', '202 St.', 30000, 'IT');
   
select * from employee_parent;