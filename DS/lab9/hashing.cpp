#include <iostream>
#include <string>
#include <vector>
using namespace std;

// Student record
class Student {
public:
    string name;
    int age;
    string major;
    
    Student(string name, int age, string major) {
        this->name = name;
        this->age = age;
        this->major = major;
    }
};

// Hash function 1 - Folding method
int hashFunction1(int key) {
    return key % 10; 
}

// Hash function 2 - Mid square method
int hashFunction2(int key) {
    int square = key * key; 
    int mid = square / 100;
    return mid % 10;  
}

int main() {
    // Hash table of size 10 
    vector<Student> hashTable1[10];
    vector<Student> hashTable2[10];
    
    // Create students
    Student s1("Alice", 20, "Computer Science"); 
    Student s2("Bob", 19, "Business");
    
    // Generate hash key
    int key1 = s1.name.length(); 
    int key2 = s2.name.length();
    
    // Insert students using different hash functions
    int index1 = hashFunction1(key1);
    hashTable1[index1].push_back(s1);

    int index2 = hashFunction2(key2);
    hashTable2[index2].push_back(s2);
    
    // Print records
    cout << "Records in Hash Table 1:\n";
    for(int i = 0; i<10; i++) {
        for(Student s : hashTable1[i]) {
            cout << s.name << " " << s.age << " " << s.major << "\n";  
        }
    }

    cout << "Records in Hash Table 2:\n";
    for(int i = 0; i<10; i++) {
        for(Student s : hashTable2[i]) {
            cout << s.name << " " << s.age << " " << s.major << "\n";
        }
    }

    return 0;
}