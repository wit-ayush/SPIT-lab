#include <iostream>
#include <iomanip>

using namespace std;

int main(){
  int n , postive = 1 , negative = -1;
  cout << "Enter +ve n for matrix's row and column:" << endl;
  cin >> n;
  int arr[n][n];
  // insert Value
  for( int i = 0 ; i < n ; i++) {
    for( int j = 0 ; j < n ; j++){
      if ( i == j ){
        arr[i][j] = 0;
      } else if (j > i){
        arr[i][j] = postive;
        postive++;
      } else{
        arr[i][j] = negative;
        negative--;
      }
    };
  };
  // display value
  for( int i = 0 ; i < n ; i++) {
    for( int j = 0 ; j < n ; j++){
      cout << setw(5) << arr[i][j];
    };
    cout <<  endl;
  };
  return 0;
}