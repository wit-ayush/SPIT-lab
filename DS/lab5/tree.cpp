#include <iostream>
using namespace std;

class TreeNode {
public:
    int data;
    TreeNode* left;
    TreeNode* right;

    TreeNode(int val) : data(val), left(nullptr), right(nullptr) {}
};

class BinaryTree {
private:
    TreeNode* root;

    void destroyTree(TreeNode* node) {
        if (node == nullptr) return;
        destroyTree(node->left);
        destroyTree(node->right);
        delete node;
    }

public:
    BinaryTree() : root(nullptr) {}

    ~BinaryTree() {
        destroyTree(root);
    }

    void insert(int val) {
        TreeNode* newNode = new TreeNode(val);

        if (root == nullptr) {
            root = newNode;
            return;
        }

        TreeNode* current = root;
        while (true) {
            if (val < current->data) {
                if (current->left == nullptr) {
                    current->left = newNode;
                    return;
                }
                current = current->left;
            } else {
                if (current->right == nullptr) {
                    current->right = newNode;
                    return;
                }
                current = current->right;
            }
        }
    }

    void inorderTraversal(TreeNode* node) {
        if (node == nullptr) return;
        inorderTraversal(node->left);
        cout << node->data << " ";
        inorderTraversal(node->right);
    }

    void inorder() {
        inorderTraversal(root);
        cout << endl;
    }
};

int main() {
    BinaryTree tree;

    tree.insert(50);
    tree.insert(30);
    tree.insert(70);
    tree.insert(20);
    tree.insert(40);
    tree.insert(60);
    tree.insert(80);

    tree.inorder();

    return 0;
}
