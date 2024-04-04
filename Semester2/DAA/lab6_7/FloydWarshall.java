import java.util.Arrays;

public class FloydWarshall {
    static final int INF = Integer.MAX_VALUE;

    public static void floydWarshall(int[][] graph) {
        int V = graph.length;
        int[][] dist = new int[V][V];

        // Initialize the distance array
        for (int i = 0; i < V; i++) {
            dist[i] = Arrays.copyOf(graph[i], V);
        }

        // Floyd Warshall algorithm
        for (int k = 0; k < V; k++) {
            System.out.println("Intermediate dist array after pass " + (k + 1) + ":");
            printSolution(dist);
            System.out.println();

            for (int i = 0; i < V; i++) {
                for (int j = 0; j < V; j++) {
                    // Check if vertex k is an intermediate vertex that reduces the distance
                    if (dist[i][k] != INF && dist[k][j] != INF && dist[i][k] + dist[k][j] < dist[i][j]) {
                        dist[i][j] = dist[i][k] + dist[k][j];
                    }
                }
            }
        }

        // Print final shortest distances between every pair of vertices
        System.out.println("Final shortest distances between every pair of vertices:");
        printSolution(dist);
    }

    // Utility function to print the solution
    public static void printSolution(int[][] dist) {
        int V = dist.length;
        for (int i = 0; i < V; ++i) {
            for (int j = 0; j < V; ++j) {
                if (dist[i][j] == INF) {
                    System.out.print("INF\t");
                } else {
                    System.out.print(dist[i][j] + "\t");
                }
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        int[][] graph = {
            {0, 3, INF, 7},
            {8, 0, 2, INF},
            {5, INF, 0, 1},
            {2, INF, INF, 0}
        };

        // Call the Floyd Warshall method
        floydWarshall(graph);
    }
}
