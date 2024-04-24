import itertools
import sys

def distance(point1, point2):
    """
    Calculate Euclidean distance between two points.
    """
    return ((point1[0] - point2[0])**2 + (point1[1] - point2[1])**2)**0.5

def brute_force_tsp(points):
    """
    Brute force approach for solving the Traveling Salesman Problem.
    """
    min_distance = sys.maxsize
    min_path = None
    for path in itertools.permutations(points):
        total_distance = sum(distance(path[i], path[i + 1]) for i in range(len(points) - 1))
        total_distance += distance(path[-1], path[0])  # Return to starting point
        if total_distance < min_distance:
            min_distance = total_distance
            min_path = path
    return min_path, min_distance

def dynamic_programming_tsp(points):
    """
    Dynamic Programming approach for solving the Traveling Salesman Problem.
    """
    n = len(points)
    dp = [[float('inf')] * n for _ in range(1 << n)]
    dp[1][0] = 0  # Start from the first city

    for mask in range(1 << n):
        for i in range(n):
            if mask & (1 << i):
                for j in range(n):
                    if i != j and mask & (1 << j) == 0:
                        dp[mask | (1 << j)][j] = min(dp[mask | (1 << j)][j], dp[mask][i] + distance(points[i], points[j]))

    # Find the minimum distance of completing the tour
    min_distance = min(dp[-1][j] + distance(points[j], points[0]) for j in range(1, n))
    return min_distance

def greedy_tsp(points):
    """
    Greedy approach for solving the Traveling Salesman Problem.
    """
    n = len(points)
    visited = [False] * n
    path = [0]  # Start from the first city
    total_distance = 0

    for _ in range(n - 1):
        min_dist = float('inf')
        closest_city = None
        current_city = path[-1]
        visited[current_city] = True
        for j in range(n):
            if not visited[j]:
                dist = distance(points[current_city], points[j])
                if dist < min_dist:
                    min_dist = dist
                    closest_city = j
        path.append(closest_city)
        total_distance += min_dist

    total_distance += distance(points[path[-1]], points[0])  # Return to starting point
    path.append(0)  # Return to starting point
    return path, total_distance

# Example usage:
if __name__ == "__main__":
    # Example points representing cities
    points = [(0, 0), (1, 2), (2, 3), (5, 1), (4, 6)]

    # Brute Force Approach
    print("Brute Force Approach:")
    min_path, min_distance = brute_force_tsp(points)
    print("Minimum Distance:", min_distance)
    print("Optimal Path:", min_path)

    # Dynamic Programming Approach
    print("\nDynamic Programming Approach:")
    min_distance = dynamic_programming_tsp(points)
    print("Minimum Distance:", min_distance)

    # Greedy Approach
    print("\nGreedy Approach:")
    min_path, min_distance = greedy_tsp(points)
    print("Minimum Distance:", min_distance)
    print("Optimal Path:", min_path)
