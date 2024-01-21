#include <iostream>
#include <queue>


using namespace std;


struct Job
{
    int id;
    int burst_time;
};


class CircularQueue
{

public:
    int front, rear, capacity;
    Job *queue;
    CircularQueue(int size)
    {
        front = rear = -1;
        capacity = size;
        queue = new Job[size];
    }


    CircularQueue()
    {
        delete[] queue;
    }


    bool isFull()
    {
        return (front == 0 && rear == capacity - 1) || (rear == (front - 1) % (capacity - 1));
    }


    bool isEmpty()
    {
        return front == -1;
    }


    void enqueue(Job process)
    {
        if (isFull())
        {
            cout << "Queue is full. Job " << process.id << " not enqueued." << endl;
            return;
        }
        if (isEmpty())
            front = rear = 0;
        else
            rear = (rear + 1) % capacity;
        queue[rear] = process;
    }


    Job dequeue()
    {
        if (isEmpty())
        {
            cout << "Queue is empty." << endl;
            Job empty_job = {-1, -1};
            return empty_job;
        }
        Job item = queue[front];
        if (front == rear)
            front = rear = -1;
        else
            front = (front + 1) % capacity;
        return item;
    }
};


void roundRobin(CircularQueue &readyQueue, int quantum)
{
    while (!readyQueue.isEmpty())
    {
        Job current_job = readyQueue.dequeue();
        if (current_job.burst_time <= quantum)
        {
            cout << "Executing Job " << current_job.id << " for " << current_job.burst_time << " units." << endl;
        }
        else
        {
            cout << "Executing Job " << current_job.id << " for " << quantum << " units." << endl;
            current_job.burst_time -= quantum;
            readyQueue.enqueue(current_job);
        }
    }
}


int main()
{
    int n, quantum;
    cout << "Enter the number of jobs: ";
    cin >> n;
    cout << "Enter the time quantum for Round Robin: ";
    cin >> quantum;


    CircularQueue readyQueue(n);


    for (int i = 0; i < n; i++)
    {
        Job process;
        process.id = i + 1;
        cout << "Enter burst time for Job " << process.id << ": ";
        cin >> process.burst_time;
        readyQueue.enqueue(process);
    }
    cout<<endl;
    roundRobin(readyQueue, quantum);


    return 0;
}
