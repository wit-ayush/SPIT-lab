#include<iostream>
using namespace std;

struct node {
  int data;
  struct node* next;
};

struct node* head = nullptr;

void insert() {
    int item;
    struct node* new_node = new struct node; 
    cout<<"enter the item to be inserted"<<endl;
    cin>>item;
    new_node->data = item; 
    new_node->next = nullptr;
    if (head == nullptr) {
        head = new_node;
    } else {
        struct node* traverse = head;  
        while (traverse->next != nullptr) {
          traverse = traverse->next;
        } // Traverse to the last node
        traverse->next = new_node; // Insert the new node at the end
    }
}
void deleteNode() {
  if (head == nullptr) {
    cout << "The list is empty. Nothing to delete." << endl;
  }
  else if (head->next == nullptr) {
    delete head;
    head = nullptr;
  } 
  else {
    struct node* current = head;
    struct node* prev = nullptr;
    while (current->next != nullptr) {
      prev = current;
      current = current->next;
    }

    // Update 'prev->next' to nullptr to remove the last node.
    prev->next = nullptr;

    // Delete the last node.
    delete current;
    cout<<"\ndeleted successfully";
  }
}

// Display the list
void display() {
    struct node* current = head;
    if (head == nullptr) {
      cout << "No element found" << endl;
    } else {
      while (current != nullptr) {
          cout << current->data << " "; 
          current = current->next;
      }
      cout << endl;
    }
}

int main() {
  int ch;
  do{
    cout<<"1. Enter a new node in the link list"<<endl;
    cout<<"2. Deleting a node from the list"<<endl;
    cout<<"3. Displaying the list"<<endl;
    cout<<"Enter Choice"<<endl;
    cin>>ch;
    
    switch (ch){
      case 1:
      insert();
      break;

      case 2:
      deleteNode ();
      break;

      case 3:
      display();
      break;

      default: 
      cout<<"invalid choice";
    }
  } while(ch!=3);
  return 0;
}
