import java.util.*;

public class Nqueens {

    private static int[][] board;
    private static int n;

    public Nqueens(int n) {
        this.n = n;
        this.board = new int[n][n];
    }

    private static boolean isSafe(int row, int col) {
        int i, j;

        for (i = 0; i < col; i++)
            if (board[row][i] == 1)
                return false;

        for (i = row, j = col; i >= 0 && j >= 0; i--, j--)
            if (board[i][j] == 1)
                return false;

        for (i = row, j = col; j >= 0 && i < n; i++, j--)
            if (board[i][j] == 1)
                return false;

        return true;
    }

    public static boolean placeQueen(int col) {
        if (col >= n) {
            return true;
        }

        for (int i = 0; i < n; i++) {
            if (isSafe(i, col)) {
                board[i][col] = 1;

                if (placeQueen(col + 1))
                    return true;

                board[i][col] = 0; // backtrack
            }
        }
        return false;
    }

    public static void printSolution() {
        if (!placeQueen(0)) {
            System.out.println("Solution does not exist");
            return;
        }

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++)
                System.out.print(" " + board[i][j] + " ");
            System.out.println();
        }
    }

    public static void main(String[] args) {
        int n = 4;
        Nqueens queens = new Nqueens(n);
        queens.printSolution();
    }
}
