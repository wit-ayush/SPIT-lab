# Stock Broking Management System

Welcome to the Stock Broking Management System project! This project is a mini stock trading application with features such as authentication, viewing stocks, updating user profiles, and account deletion. It is implemented using MySQL, Express, React, and Node.js.

## Table of Contents
- [Overview](#overview)
- [Setup](#setup)
- [Commands](#commands)
- [Project Structure](#project-structure)
- [Features](#features)
- [Contributing](#contributing)

## Overview
The Stock Broking Management System is designed to provide essential functionalities for stock trading activities, focusing on user authentication, stock viewing, profile updates, and account deletion.

## Setup
Clone the repository to your local machine:

<!-- bash --> 
git clone https://github.com/wit-ayush/SPIT-lab.git

## Commands
cd DBMS/stockBroking/web
npm install

<!-- frontend -->

npm start
This will launch the React development server, and you can access the application in your browser at http://localhost:3000.

<!-- backend -->

cd server
nodemon index.js
The backend server will be accessible at http://localhost:3001.

## project-structure

The project is organized with a focus on clarity and separation of concerns:

## `web` Directory
- The `web` directory serves as the root folder for the React application, providing a comprehensive view of the entire project.

## `web/server` Directory
- The `web/server` directory is the root folder for the Express application. Here, you can find the backend logic and SQL queries associated with the project.

## `finWizards.sql` File
- The `finWizards.sql` file contains a collection of SQL commands that are integral to the functionality of the project. It serves as a reference for database operations and structure.

This structure is designed to enhance readability and streamline development by segregating the frontend and backend components, making it easier to navigate and maintain the project.

## features

1. Authentication
    Secure user authentication for a personalized experience.
2. View Stocks
    Browse and explore available stocks.
3. Update Profile
    Modify user profile information to keep it up to date.
4. Delete Account
    Permanently delete your account if needed.

## contributing

If you'd like to contribute, follow these steps:

1. Fork the repository
2. Create a new branch (git checkout -b feature/new-feature)
3. Make your changes
4. Commit your changes (git commit -m 'Add new feature')
5. Push to the branch (git push origin feature/new-feature)
6. Create a pull request
