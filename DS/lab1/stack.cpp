#include <iostream>
using namespace std;

struct stacknode {
  int data = 0;
  stacknode *next = nullptr;
};

struct stacknode *head = nullptr;
stacknode *temp;

void insert(int v) {
  stacknode *newNode = new stacknode;
  newNode->data = v;
  newNode->next = head;
  head = newNode;   
};

void pop() {
  if(head == nullptr){ 
    cout << "Stack underflow!!";
  } else {
    temp = head;
    head = head->next;
    delete temp;
  }
};

void top() {
  if(head == nullptr){ 
    cout << "Stack is empty!!" << endl;
  } else {
    cout << head -> data << endl;
  }
};

void display() {
  do {
    top();
    pop();
  } while( head -> next != nullptr);
};

int main(){

  int opt, value;
  cout << "Choose an option:"<< endl;
  do { 
    cout << "1 : insert in stack" << endl;
    cout << "2 : pop from stack" << endl;
    cout << "3 : top of stack" << endl;
    cout << "4 : display stack, This will flush the stack too" << endl;
    cout << "5 : exit the stack" << endl;
    cin >> opt;

    switch (opt) {
      case 1 :
        cout << "Enter value to insert" << endl;
        cin >> value;
        insert(value);
        break;
      case 2 :
        cout << "Deleting last entered value which is ";
        top(); 
        pop();
        break;
      case 3 :
        cout << "Last entered value is" << endl;
        top();
        break;
      case 4 :
        display();
        break;
      default: 
        cout << "Enter Proper option";
        break;
    }
  } while(opt != 5);

  return 0;
}