#include <algorithm>
#include <cstdlib>
#include <ctime>
#include <fstream>
#include <iostream>
#include <vector>
using namespace std;
void generateDataFile(const string& filename, int count, int minValue,
                      int maxValue) {
  ofstream outFile(filename);
  if (!outFile) {
    cerr << "Error: Could not open file for writing." << endl;
    return;
  }
  srand(time(0));
  for (int i = 0; i < count; ++i) {
    int randomNum = rand() % (maxValue - minValue + 1) + minValue;
    outFile << randomNum << " ";
  }
  outFile.close();
}
void bubbleSort(vector<int>& arr) {
  int n = arr.size();
  for (int i = 0; i < n - 1; ++i) {
    for (int j = 0; j < n - i - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        swap(arr[j], arr[j + 1]);
      }
    }
  }
}
void readAndSortData(const string& inputFilename,
                     const string& outputFilename) {
  ifstream inFile(inputFilename);
  ofstream outFile(outputFilename, ios::out | ios::binary);
  if (!inFile || !outFile) {
    cerr << "Error: Could not open files for reading or writing." << endl;
    return;
  }
  vector<int> numbers;
  int num;
  while (inFile >> num) {
    numbers.push_back(num);
  }
  bubbleSort(numbers);
  for (int num : numbers) {
    outFile << num << " ";
  }
  inFile.close();
  outFile.close();
}
int main() {
  const string inputFileName = "random.txt";
  const string outputFileName = "sorted.txt";
  const int numElements = 1000;
  const int minValue = 0;
  const int maxValue = 10000;
  generateDataFile(inputFileName, numElements, minValue, maxValue);
  cout << "A file has been created with random numbers :" << inputFileName
       << endl;
  readAndSortData(inputFileName, outputFileName);
  cout << "The random numbers are sorted in " << outputFileName << endl;
  return 0;
}