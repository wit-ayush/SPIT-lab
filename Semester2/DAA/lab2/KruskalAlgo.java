import java.util.*;

public class KruskalAlgo {
    public static void main(String[] args) {
        Edge[] edges = {
                new Edge('a', 'b', 3),
                new Edge('a', 'e', 1),
                new Edge('b', 'c', 5),
                new Edge('b', 'e', 4),
                new Edge('c', 'd', 2),
                new Edge('e', 'd', 7),
                new Edge('e', 'c', 6)
        };

        Arrays.sort(edges); // Sort the edges by weight

        DisjointSet disjointSet = new DisjointSet();
        // Make a set for each vertex
        for (char c = 'a'; c <= 'h'; c++) {
            disjointSet.makeSet(c);
        }

        List<Edge> minimumSpanningTree = new ArrayList<>();
        for (Edge edge : edges) {
            // Check if including the edge forms a cycle
            if (disjointSet.find(edge.src) != disjointSet.find(edge.dest)) {
                minimumSpanningTree.add(edge); // Include the edge in the minimum spanning tree
                disjointSet.union(edge.src, edge.dest); // Union the sets of src and dest vertices
            }
        }

        // Print the minimum spanning tree edges
        for (Edge edge : minimumSpanningTree) {
            System.out.println(edge.src + " - " + edge.dest + ": " + edge.weight);
        }
    }
}

class Edge implements Comparable<Edge> {
    char src, dest;
    int weight;

    Edge(char src, char dest, int weight) {
        this.src = src;
        this.dest = dest;
        this.weight = weight;
    }

    // Comparing edges based on their weights
    public int compareTo(Edge other) {
        return this.weight - other.weight;
    }
}

class DisjointSet {
    Map<Character, Character> parent;

    DisjointSet() {
        parent = new HashMap<>();
    }

    void makeSet(char vertex) {
        parent.put(vertex, vertex);
    }

    char find(char vertex) {
        // Find the representative (root) of the set containing the vertex
        return parent.get(vertex) == vertex ? vertex : find(parent.get(vertex));
    }

    void union(char vertex1, char vertex2) {
        // Union operation to merge two sets represented by vertex1 and vertex2
        parent.put(find(vertex1), find(vertex2));
    }
}


