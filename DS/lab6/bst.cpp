//bst based on ID of book records

#include <iostream>
using namespace std;

struct bookdata {
  string name, author;
  int pages, year, id;
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
      if(currNode -> data.id > val.id){
        if( currNode -> left == nullptr){
          currNode -> left = newNode;
        } else{
          currNode = currNode -> left;
          bstTree(val, newNode, currNode);
        }
      } else{
        if( currNode -> right == nullptr){
          currNode -> right = newNode;
        } else{
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

    // This is preOrderTraverse
    void traverse(TreeNode* temp) {
      if (temp) {
        cout << "Book Details >> " << endl;
        cout << "Book Id: " << temp -> data.id << endl;
        cout << "Book name: " << temp -> data.name << endl;
        cout << "Book author: " << temp -> data.author << endl;
        cout << "Total pages: " << temp -> data.pages << endl;
        cout << "Release year: " << temp -> data.year << endl;
        cout << "++++++++++++++++++++++++++++++++++++++++++++++" << endl;
        traverse(temp -> left);
        traverse(temp -> right);
      }
    }

    void search(TreeNode* temp, int &id){
      if( temp -> data.id == id ){
        cout << "Book Id: " << temp -> data.id << endl;
        cout << "Book name: " << temp -> data.name << endl;
        cout << "Book author: " << temp -> data.author << endl;
        cout << "Total pages: " << temp -> data.pages << endl;
        cout << "Release year: " << temp -> data.year << endl;
        cout << "++++++++++++++++++++++++++++++++++++++++++++++" << endl;
      } 
      else if(temp -> data.id > id){
        if( temp -> left == nullptr){
          cout << "There is No book with id : " << id << endl;
        } else{
          temp = temp -> left;
          search(temp, id);
        }
      } else{
        if( temp -> right == nullptr){
          cout << "There is No book with id : " << id << endl;
        } else{
          temp = temp -> right;
          search(temp, id);
        }
      }

      return;
    }

    void findById(int &id) {
      if (!root) {
        cout << "Tree is empty!" << endl;
        return;
      }
      search(root, id);
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

  cout << "Enter Id for book: ";
  cin >> val.id;

  cin.ignore();

  return val;
};


int main () {

  BinaryTree bt;

  cout << "Enter your choice: " << endl;
  cout << "1. Add data" << endl;
  cout << "2. Display data" << endl;
  cout << "3. Search using Id" << endl;
  cout << "4. Exit" << endl;
  
  int choice;
  cin >> choice;
  
  while (choice != 4)
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
      case 3:
      {
        int id;
        cout<<"Enter Id number: ";
        cin >> id;
        bt.findById(id);
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
