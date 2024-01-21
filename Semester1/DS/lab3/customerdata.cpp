//This is working

#include <iostream>
using namespace std;

struct CustomerData {
  int id, age;
  string name, type;
};

struct Node {
  CustomerData data;
  Node* next;
};


Node* front = nullptr;
Node* rear = nullptr;


void enqueue(Node *new_node, int id, string name, int age, string type) {

  new_node->data.id = id;
  new_node->data.name = name;
  new_node->data.age = age;
  new_node->data.type = type;
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


void display() {
  if (front == nullptr) {
    cout << "Queue is empty." << endl;
  } else {
    Node* current = front;
    int count = 1;

    cout << "The queue is: ";
    while (current != nullptr) {
      cout<<"Customer no: "<< count << endl << "Name:" << current->data.name <<endl;
      cout<<"Account type: "<< current -> data.type <<endl;
      cout<<"Age: "<< current -> data.age <<endl;
      cout<<"Customer Id: "<<current->data.id <<endl;

      cout<<endl;
      count++;
      current = current->next;
    }
    cout << endl;
  }
}

int main() {
  int choice;
  int id, age;
  string name, type;

  do {
    cout << "1. Enqueue a new account" << endl;
    cout << "2. Dequeue an element" << endl;
    cout << "3. Display the queue" << endl;
    cout << "4. Exit" << endl;

    cout << "Enter your choice: ";
    cin >> choice;

    switch (choice) {
      case 1:
        {
          cout << "Enter id : " << endl; 
          cin >> id;
          cout << "Enter name : " << endl; 
          cin >> name;
          cout << "Enter age : " << endl; 
          cin >> age;
          cout << "Enter account type : " << endl; 
          cin >> type;
          
          Node* data = new Node;
          
          enqueue(data, id, name, age, type);
          break;
        }
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

