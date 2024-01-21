// Passing local variables by reference can be useful in some cases to avoid unnecessary duplications of data and improve performance. However, whether you should pass local variables by reference or not depends on the specific requirements and constraints of your code. Here are some considerations:

// Passing by Value: When you pass a local variable by value (without using a reference), a copy of that variable is created for use within the function. This can be appropriate when you don't want the function to modify the original variable and want to work with a local copy.

// cpp
// Copy code
// void myFunction(int value) {
//     // 'value' is a local copy, and changes here won't affect the original variable
//     value = 42;
// }
// Passing by Reference: When you pass a local variable by reference, you work directly with the original variable. This is useful when you want the function to modify the original variable or when the variable is large, and copying it would be inefficient.

// cpp
// Copy code
// void modifyValue(int& value) {
//     // Changes here will affect the original variable outside the function
//     value = 42;
// }
// Passing by Const Reference: If you want to pass a local variable by reference but ensure that it's not modified within the function, you can use a const reference. This is often used when passing objects like strings or complex data structures.

// cpp
// Copy code
// void readValue(const string& text) {
//     // 'text' is a reference, but it can't be modified within the function
//     // This is useful when you want to avoid copying a large string
//     cout << text << endl;
// }
// In summary, the ch between passing by value, by reference, or by const reference depends on the specific needs of your function and the intended behavior. Passing by reference can be efficient and allows for modification of the original variable, but you should be careful when modifying variables from within functions to ensure that it aligns with your program's logic.



#include <iostream>
#include <string>
using namespace std;

struct Node {
    string data;
    Node* next;
};

Node* head = nullptr;

// Function to insert a line of text at the end of the linked list
void insert(const string& line) {
    Node* newNode = new Node;
    newNode->data = line;
    newNode->next = nullptr;

    if (head == nullptr) {
        head = newNode;
    } else {
        Node* traverse = head;
        while (traverse->next != nullptr) {
            traverse = traverse->next;
        }
        traverse->next = newNode;
    }
}

// Function to delete a line of text at a specified position
void deleteLine(int position) {
    if (position < 1) {
        cout << "Invalid position" << endl;
        return;
    }

    if (position == 1) {
        // Special case: deleting the first node
        Node* temp = head;
        head = head->next;
        delete temp;
        cout << "Line deleted successfully." << endl;
        return;
    }

    Node* current = head;
    Node* previous = nullptr;
    int currentPosition = 1;

    while (current != nullptr && currentPosition < position) {
        previous = current;
        current = current->next;
        currentPosition++;
    }

    if (currentPosition == position && current != nullptr) {
        previous->next = current->next;
        delete current;
        cout << "Line deleted successfully." << endl;
    } else {
        cout << "Invalid position. Line deletion failed." << endl;
    }
}

// Function to display all the lines in the linked list
void display() {
    Node* current = head;
    int lineNumber = 1;

    if (head == nullptr) {
        cout << "No lines found." << endl;
    } else {
        while (current != nullptr) {
            cout << lineNumber << ": " << current->data << endl;
            current = current->next;
            lineNumber++;
        }
    }
}

int main() {
    int ch;
    string line;

    do { cout<<"Select the operations you want to perform:"<<endl;
       cout << "1. Append a line" << endl;
        cout << "2. Delete a line" << endl;
        cout << "3. Display all lines" << endl;
        cout << "4. Quit" << endl;
        cout << "Enter your choice: ";
        cin >> ch;
        cin.ignore();

        switch (ch) {
            case 1:
                cout << "Enter a line to append: ";
                getline(cin, line);
                insert(line);
                break;
            case 2:
                int position;
                cout << "Enter the line number to delete: ";
                cin >> position;
                deleteLine(position);
                break;
            case 3:
                display();
                break;
            case 4:
                cout << "Exiting the line editor." << endl;
                break;
            default:
                cout << "Invalid ch. Please try again." << endl;
        }
    } while (ch != 4);

    // Clean up: Free memory by deleting the linked list
    Node* current = head;
    while (current != nullptr) {
        Node* temp = current;
        current = current->next;
        delete temp;
    }

    return 0;
}