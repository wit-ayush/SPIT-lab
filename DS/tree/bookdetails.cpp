#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* left;
    Node* right;
    Node(int value) : data(value), left(NULL), right(NULL) {}
};

void inOrderTraversal(Node* node) {
    if (node == NULL) return;
    inOrderTraversal(node->left);
    cout << node->data << " ";
    inOrderTraversal(node->right);
}

void preOrderTraversal(Node* node) {
    if (node == NULL) return;
    cout << node->data << " ";
    preOrderTraversal(node->left);
    preOrderTraversal(node->right);
}

void postOrderTraversal(Node* node) {
    if (node == NULL) return;
    postOrderTraversal(node->left);
    postOrderTraversal(node->right);
    cout << node->data << " ";
}

void insertNode(Node* root, int value) {
    if (value < root->data) {
        if (root->left == NULL) {
            root->left = new Node(value);
        } else {
            insertNode(root->left, value);
        }
    } else {
        if (root->right == NULL) {
            root->right = new Node(value);
        } else {
            insertNode(root->right, value);
        }
    }
}

int main() {
    Node* root = new Node(1);
    root->left = new Node(2);
    root->right = new Node(3);
    root->left->left = new Node(4);
    root->left->right = new Node(5);
    root->right->left = new Node(6);
    root->right->right = new Node(7);

    cout << "In-order traversal: ";
    inOrderTraversal(root);
    cout << endl;

    cout << "Pre-order traversal: ";
    preOrderTraversal(root);
    cout << endl;

    cout << "Post-order traversal: ";
    postOrderTraversal(root);
    cout << endl;

    insertNode(root, 8);

    cout << "In-order traversal after insertion: ";
    inOrderTraversal(root);
    cout << endl;

    return 0;
}
