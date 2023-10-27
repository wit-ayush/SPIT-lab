#include <iostream>
#include <queue>
using namespace std;

class node {
    public:
        int data;
        node* left;
        node* right;

    node(int d) {
        this -> data = d;
        this -> left = NULL;
        this -> right = NULL;
    }
};

node* buildFromLevelOrder(node* root) {
    cout << "Enter the data: " << endl;
    int data;
    cin >> data;
    root = new node(data);

    if(data == -1) return NULL;

    cout << "Enter data for inserting in left of " << data << endl;
    root -> left = buildTrees(root -> left);
    cout << "Enter data for inserting in right of " << data << endl;
    root -> right = buildTrees(root -> left);

    return root;
};

void bfsTraversel( node* root){
    queue<node*> q;
    q.push(root);
    cout << "Starting Traversel" << root -> data << endl;
    while(!q.empty()){
        node* temp = q.front();

        cout << temp -> data << " " <<endl;
        if( temp -> left ){
            q.push(temp -> left);
        } 
        if(temp -> right) {
            q.push(temp -> right);
        }
    };
};

void levelOrderTraversal(node* root) {
    queue<node*> q;
    cout << root -> data << "--";

    // q.push(root);
    // q.push(NULL);
    // node* temp = q.front();

    // while(!q.empty()) {
    //     node* temp = q.front();
    //     q.pop();

    //     // if(temp == NULL) { 
    //     //     //purana level complete traverse ho chuka hai
    //     //     cout << endl;
    //     //     if(!q.empty()) { 
    //     //         //queue still has some child ndoes
    //     //         q.push(NULL);
    //     //     }  
    //     // }
    //     // else{
    //         cout << temp -> data << "--";
    //         if(temp ->left) {
    //             q.push(temp ->left);
    //         }

    //         if(temp ->right) {
    //             q.push(temp ->right);
    //         }
    //     // }
    // }
}


int main() {
    node* root = NULL;

// 1 3 5 7 11 17 -1 -1 -1 -1 -1 -1 -1

    // create tree
    buildFromLevelOrder(root);
    //traverse data
    levelOrderTraversal(root);

    return 0;
}
