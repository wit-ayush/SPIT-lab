import java.util.*;

class BellmanFord {
    static class Edge {
        int source, destination, weight;

        public Edge(int source, int destination, int weight) {
            this.source = source;
            this.destination = destination;
            this.weight = weight;
        }
    }

    static int INF = Integer.MAX_VALUE;

    static void bellmanFord(List<Edge> edges, int V, int source) {
        int[] distance = new int[V];
        Arrays.fill(distance, INF);
        distance[source] = 0;

        // Relax all edges V-1 times
        for (int i = 0; i < V - 1; ++i) {
            for (Edge edge : edges) {
                int u = edge.source;
                int v = edge.destination;
                int weight = edge.weight;
                if (distance[u] != INF && distance[u] + weight < distance[v]) {
                    distance[v] = distance[u] + weight;
                }
            }
        }

        // Check for negative weight cycles
        for (Edge edge : edges) {
            int u = edge.source;
            int v = edge.destination;
            int weight = edge.weight;
            if (distance[u] != INF && distance[u] + weight < distance[v]) {
                System.out.println("Graph contains negative weight cycle");
                return;
            }
        }

        // Print the shortest distances from the source
        printSolution(distance);
    }

    static void printSolution(int[] distance) {
        System.out.println("Vertex Distance from Source:");
        for (int i = 0; i < distance.length; ++i)
            System.out.println(i + "\t\t" + distance[i]);
    }

    public static void main(String[] args) {
        int V = 5; // Number of vertices
        int source = 0; // Source vertex
        List<Edge> edges = new ArrayList<>();

        // Add edges to the graph
        edges.add(new Edge(0, 1, -1));
        edges.add(new Edge(0, 2, 4));
        edges.add(new Edge(1, 2, 3));
        edges.add(new Edge(1, 3, 2));
        edges.add(new Edge(1, 4, 2));
        edges.add(new Edge(3, 2, 5));
        edges.add(new Edge(3, 1, 1));
        edges.add(new Edge(4, 3, -3));

        // Run Bellman-Ford algorithm
        bellmanFord(edges, V, source);
    }
}
