import java.util.*;

public class lab0A {
    public static void main(String args[]) {
      int n = 2;
      int m = 3;
      int p = 5;
      
      int[][] matrix1 = new int[n][m];
      int[][] matrix2 = new int[m][p];
      int[][] ansMatrix = new int[n][p];
      int r = 60;
      int x = 0;
      for(int i = 0; i < n; i++){
        for(int j = 0; j < m; j++)
          matrix1[i][j] = r+(r+1)*(x++);
      }
      for(int i = 0; i < m; i++){
        for(int j = 0; j < p; j++)
          matrix2[i][j] = r+(r+1)*(x++);
      }

      System.out.println("Matrix 1");
      for(int i = 0; i < n; i++){
        for(int j = 0; j < m; j++){
          System.out.print(matrix1[i][j] + "  ");
        }
        System.out.println(" ");
      }
      System.out.println("Matrix 2");
      for(int i = 0; i < m; i++){
        for(int j = 0; j < p; j++){
          System.out.print(matrix2[i][j] + "  ");
        }
        System.out.println(" ");
      }

      for(int i = 0; i < n; i++){
        for(int j = 0; j < p; j++){
          for(int k = 0; k < m; k++){
            ansMatrix[i][j] += matrix1[i][k]*matrix2[k][j];
          }
        }
      }

      System.out.println("Answer Matrix");
      for(int i = 0; i < n; i++){
        for(int j = 0; j < p; j++){
          System.out.print(ansMatrix[i][j] + "  ");
        }
        System.out.println(" ");
      }
    }
}