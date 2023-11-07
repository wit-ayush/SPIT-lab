#include <iostream>
using namespace std;

struct bookdata {
  string name, author;
  int pages, year;
};

class TreeNode {
  public:
    bookdata data;
    TreeNode *left;
    TreeNode *right;
    TreeNode(bookdata val) : data(val), left(nullptr), right(nullptr) {}
    bookdata getData() {
        return data;
    }
};

class BinaryTree{
  public:
    TreeNode *root;
    BinaryTree() : root(nullptr) {}

    void bstTree(bookdata val, TreeNode* newNode, TreeNode* currNode) {
      if(currNode -> data.name > val.name){
        if( currNode -> left == nullptr){
          cout << "4 " << endl;
          currNode -> left = newNode;
        } else{
          cout << "5 " << endl;
          currNode = currNode -> left;
          bstTree(val, newNode, currNode);
        }
      } else{
        if( currNode -> right == nullptr){
          cout << "6 " << endl;          
          currNode -> right = newNode;
        } else{
          cout << "7 " << endl;
          currNode = currNode -> right;
          bstTree(val, newNode, currNode);
        }
      }
    }
    

    void insert(bookdata val) {
      TreeNode* newNode = new TreeNode(val);
      if(root == nullptr){
        root = newNode;
      } else{
        TreeNode* currNode = root;
        bstTree(val, newNode, currNode);
      }
    }

    void traverse(TreeNode* temp) {
      if (temp) {
        cout << "Book Details >> " << endl;
        cout << "Book name: " << temp -> data.name << endl;
        cout << "Book author: " << temp -> data.author << endl;
        cout << "Total pages: " << temp -> data.pages << endl;
        cout << "Release year: " << temp -> data.year << endl;
        cout << "-------------------" << endl;
        traverse(temp -> left);
        traverse(temp -> right);
      }
    }

    void displayBooks() {
      if (!root) {
        cout << "Tree is empty!" << endl;
        return;
      }
      traverse(root);
    }

};

bookdata getInput() {
  bookdata val;
  cin.ignore();
  cout << "Enter Book Name: ";
  getline(cin, val.name);
  
  cout << "Enter Author Name: ";
  getline(cin, val.author);

  cout << "Enter No. of pages: ";
  cin >> val.pages;

  cout << "Enter Release Year: ";
  cin >> val.year;

  cin.ignore();

  return val;
};


int main () {

  BinaryTree bt;

  cout << "Enter your choice: " << endl;
  cout << "1. Add data" << endl;
  cout << "2. Display data" << endl;
  cout << "3. Exit" << endl;
  
  int choice;
  cin >> choice;
  
  while (choice != 3)
  {
    switch (choice)
    {
      case 1:
      {
        cout << "Enter data " << endl;
        bookdata val = getInput();
        bt.insert(val);
        break;
      }
      case 2:
      {
        bt.displayBooks();
        break;
      }
      default:
      {
          cout << "Invalid choice." << endl;
          break;
      }
    }
    cout << "Enter new choice" << endl;
    cin >> choice;
  }
  return 0;
};
