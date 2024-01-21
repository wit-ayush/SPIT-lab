#include <iostream>

#include <string>

using namespace std;
class Book {
  public: int id;
  string title;
  string author;
  int page_count;
  Book(int id, string title, string author, int page_count): id(id),
  title(title),
  author(author),
  page_count(page_count),
  left(nullptr),
  right(nullptr) {}
  Book * left;
  Book * right;
};

class LLTree {
  public: Book * root;
  LLTree(): root(nullptr) {}

  void insertBook(int i, string ttl, string ath, int pg_count) {
    Book * newBook = new Book(i, ttl, ath, pg_count);
    if (!root) {
      root = newBook;
      cout << "Book added as root" << endl;
    } else {
      insertBookRecursive(root, newBook);
    }
  }

  void insertBookRecursive(Book * current, Book * newBook) {
    if (current -> left && current -> right) {
      insertBookRecursive(current -> left, newBook);
    } else if (!current -> left) {
      current -> left = newBook;
      cout << "Book added to the left" << endl;
    } else {
      current -> right = newBook;
      cout << "Book added to the right" << endl;
    }
  }

  void deleteBook() {
    if (!root) {
      cout << "Tree is empty" << endl;
      return;
    }
    if (!root -> left && !root -> right) {
      delete root;
      root = nullptr;
      cout << "Deleted tree" << endl;
      return;
    }
    Book * temp = root;
    Book * prev = nullptr;
    int flag = 0;
    while (temp -> left || temp -> right) {
      prev = temp;

      if (temp -> left && temp -> right) {
        temp = temp -> right;
        flag = 0;
      } else {
        temp = temp -> left;
        flag = 1;
      }
    }
    if (flag == 1) {
      prev -> left = nullptr;
    } else {
      prev -> right = nullptr;
    }
    cout << "Deleted book: " << temp -> id << endl;
    delete temp;
  }

  void displayBooks() {
    if (!root) {
      cout << "Tree is empty!" << endl;
      return;
    }
    display(root);
  }
  
  void display(Book * temp) {
    if (temp) {
      cout << "Book Details: " << endl;
      cout << "Book id: " << temp -> id << endl;
      cout << "Book name: " << temp -> title << endl;
      cout << "Book author: " << temp -> author << endl;
      cout << "Total pages: " << temp -> page_count << endl;
      cout << "-------------------" << endl;
      display(temp -> left);
      display(temp -> right);

    }
  }
};
int main() {
  LLTree Books;
  int id, page_count, choice;
  string title, author;
  do {
    cout << "1. Insert book" << endl;
    cout << "2. Delete book" << endl;
    cout << "3. Display books" << endl;
    cout << "4. Exit" << endl;
    cout << "Enter your choice: ";
    cin >> choice;
    switch (choice) {
    case 1: {
      cout << "Insert details" << endl;
      cout << "Id: ";
      cin >> id;
      cin.ignore();
      cout << "Title: ";
      getline(cin, title);
      cout << "Author: ";
      getline(cin, author);
      cout << "Pages: ";
      cin >> page_count;
      Books.insertBook(id, title, author, page_count);
      break;
    }
    case 2:
      Books.deleteBook();
      break;
    case 3:
      Books.displayBooks();
      break;
    case 4:
      break;
    default:
      cout << "Enter a valid choice" << endl;
      break;
    }

  } while (choice != 4);
  return 0;
}