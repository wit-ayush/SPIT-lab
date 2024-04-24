import matplotlib.pyplot as plt

def plot_tsp(points, tour, title):
    """
    Plot the Traveling Salesman Problem and the optimal tour.
    """
    plt.figure(figsize=(8, 6))

    # Plot cities
    plt.scatter([point[0] for point in points], [point[1] for point in points], color='blue', zorder=1)
    for i, point in enumerate(points):
        plt.text(point[0], point[1], str(i), fontsize=12, ha='center', va='center', color='white')

    # Plot tour
    for i in range(len(tour) - 1):
        plt.plot([points[tour[i]][0], points[tour[i + 1]][0]], [points[tour[i]][1], points[tour[i + 1]][1]], color='red', zorder=2)
    plt.plot([points[tour[-1]][0], points[tour[0]][0]], [points[tour[-1]][1], points[tour[0]][1]], color='red', zorder=2)

    plt.title(title)
    plt.xlabel('X')
    plt.ylabel('Y')
    plt.grid(True)
    plt.show()

# Example usage:
if __name__ == "__main__":
    # Example points representing cities
    points = [(0, 0), (1, 2), (2, 3), (5, 1), (4, 6)]

    # Dynamic Programming Approach
    min_distance = dynamic_programming_tsp(points)
    print("Minimum Distance (Dynamic Programming):", min_distance)
    plot_tsp(points, min_path, "Optimal Tour (Dynamic Programming)")
