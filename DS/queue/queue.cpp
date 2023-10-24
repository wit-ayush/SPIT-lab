#include <iostream>
using namespace std;

struct Node {
  int data;
  Node* next;
};

// Initialize the front and rear pointers to nullptr
Node* front = nullptr;
Node* rear = nullptr;

// fucntion to insert element in queue
void enqueue() {
  int new_data;
  cout << "Enter data to enqueue: ";
  cin >> new_data;
  
  Node* new_node = new Node;
  new_node->data = new_data;
  new_node->next = nullptr;

  if (rear == nullptr) {
    front = new_node;
    rear = new_node;
  } 
  else {
    rear->next = new_node;
    rear = new_node;
  }
}

// Function to remove a node from the queue
void dequeue() {
  if (front == nullptr) {
    cout << "Queue is empty. Nothing to dequeue." << endl;
  } else {
    Node* temp = front;
    front = front->next;
    delete temp;
    cout << "Dequeued successfully." << endl;
  }
}

// Function to display the elements of the queue
void display() {
  if (front == nullptr) {
    cout << "Queue is empty." << endl;
  } else {
    Node* current = front;
    cout << "The queue is: ";
    while (current != nullptr) {
      cout << current->data << " ";
      current = current->next;
    }
    cout << endl;
  }
}

int main() {
  int choice;
  do {
    cout << "1. Enqueue a new element" << endl;
    cout << "2. Dequeue an element" << endl;
    cout << "3. Display the queue" << endl;
    cout << "4. Exit" << endl;

    cout << "Enter your choice: ";
    cin >> choice;

    switch (choice) {
      case 1:
        enqueue();
        break;
      case 2:
        dequeue();
        break;
      case 3:
        display();
        break;
      case 4:
        exit(0);
      default:
        cout << "Invalid choice. Please try again." << endl;
    }
  } while (choice != 4);

  return 0;
}

