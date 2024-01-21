#include <iostream>
using namespace std;

#define SIZE 5

class CircularQueue {

  public:
    int front, rear;
    int arr[SIZE];
    CircularQueue() : front(-1), rear(-1) {}

    bool isFull() {
        return (front == 0 && rear == SIZE - 1) || (front == rear + 1);
    }

    bool isEmpty() {
        return front == -1;
    }

    void enqueue(int item) {
        if (isFull()) {
            cout << "Queue is full. Cannot enqueue." << endl;
            return;
        }

        if (front == -1)
            front = rear = 0;
        else if (rear == SIZE - 1)
            rear = 0;
        else
            rear++;

        arr[rear] = item;
    }

    int dequeue() {
        if (isEmpty()) {
            cout << "Queue is empty. Cannot dequeue." << endl;
            return -1;
        }

        int item = arr[front];

        if (front == rear)
            front = rear = -1;
        else if (front == SIZE - 1)
            front = 0;
        else
            front++;

        return item;
    }

    int peek() {
        if (isEmpty()) {
            cout << "Queue is empty. No element to peek." << endl;
            return -1;
        }

        return arr[front];
    }
};

int main() {
    CircularQueue cq;

    cout << "Enter your choice: " << endl;
    cout << "1. Enqueue" << endl;
    cout << "2. Dequeue" << endl;
    cout << "3. Display last element" << endl;
    cout << "4. Exit" << endl;
    
    int choice;
    cin >> choice;

    while (choice != 4)
    {
        switch (choice)
        {
        case 1:
        {
            int data;
            cout << "Enter data: " << endl;
            cin >> data;
            cq.enqueue(data);
            break;
        }
        case 2:
        {
            cout << cq.dequeue() << endl;
            break;
        }
        case 3:
        {
            cout << cq.peek() << endl;
            break;
        }
        default:
        {
            cout << "Invalid choice." << endl;
            break;
        }
        }
        cout << "Enter your choice: " << endl;
        cout << "1. Enqueue" << endl;
        cout << "2. Dequeue" << endl;
        cout << "3. Display last element" << endl;
        cout << "4. Exit" << endl;
        cin >> choice;
    }
    return 0;
}
