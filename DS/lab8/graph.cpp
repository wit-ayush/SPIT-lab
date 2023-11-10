#include <iostream>
#include <iomanip>
#include <vector>
using namespace std;

class GraphCustom {
public:
    void insertGraphMatrix(int n, vector<vector<int>>& graphMatrix) {
        int id, i = 0, v1, v2;

        cout << "Id of the vertices are: " << endl;
        while (i < n) {
            cout << "Vertex id: " << i << endl;
            i++;
        }

        do {
            cout << "Enter -1 to quit: " << endl;
            cout << "Enter sender vertex id v1 and receiver vertex id v2 :";
            cin >> v1 >> v2;

            if (v1 == -1) {
                break;
            }

            if (v1 < n && v2 < n) {
                graphMatrix[v1][v2] = 1;
                graphMatrix[v2][v1] = 1;
            } else {
                cout << "Vertex id is out of array bounding index!!" << endl;
            }
        } while (true);

        return;
    }


    void traverseGraph(int n, vector<vector<int>>& graphMatrix) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                cout << setw(5) << graphMatrix[i][j];
            }
            cout << endl;
        }
        return;
    }

    void neighbourVertex(int n, vector<vector<int>>& graphMatrix) {
        int vid;
        cout << "Enter Vertex you want to know the neighbour Vertices of: ";
        cin >> vid;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if(i == vid && graphMatrix[i][j] == 1){
                    cout << j << endl;
                }
            }
        }
        return;
    }
};

int main() {
    int opt, n, neighbourV;
    GraphCustom gr;

    cout << "Let's first, enter the number of vertices: ";
    cin >> n;

    vector<vector<int>> graphMatrix(n, vector<int>(n, 0));

    cout << "Select the Option: " << endl;
    cout << "1. Create Graph Matrix " << endl;
    cout << "2. Traverse Graph " << endl;
    cout << "3. Neighbour Vertex " << endl;
    cout << "4. To quit program " << endl;

    cin >> opt;
    while (opt != 4) {
        switch (opt) {
            case 1:
                gr.insertGraphMatrix(n, graphMatrix);
                break;
            case 2:
                gr.traverseGraph(n, graphMatrix);
                break;
            case 3:
                gr.neighbourVertex(n, graphMatrix);
                break;
            default:
                cout << "Select available options only" << endl;
        }

        cout << "Select the Option: " << endl;
        cout << "1. Create Graph Matrix " << endl;
        cout << "2. Traverse Graph " << endl;
        cout << "3. Neighbour Vertex " << endl;
        cout << "4. To quit program " << endl;

        cin >> opt;
    }
    return 0;
}

