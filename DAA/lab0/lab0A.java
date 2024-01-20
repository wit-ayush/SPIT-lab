import java.util.*;

public class lab0A {
    public static void main(String args[]) {
      int[][] matrix1 = new int[3][3];
      int[][] matrix2 = new int[3][3];
      int[][] ansMatrix = new int[3][3];
      int r = 60;
      int n = 3;
      int x = 0;
      for(int i = 0; i < 3; i++){
        for(int j = 0; j < 3; j++)
          matrix1[i][j] = r+(r+1)*(x++);
      }
      for(int i = 0; i < 3; i++){
        for(int j = 0; j < 3; j++)
          matrix2[i][j] = r+(r+1)*(x++);
      }

      System.out.println("Matrix 1");
      for(int i = 0; i < 3; i++){
        for(int j = 0; j < 3; j++){
          System.out.print(matrix1[i][j] + "  ");
        }
        System.out.println(" ");
      }
      System.out.println("Matrix 2");
      for(int i = 0; i < 3; i++){
        for(int j = 0; j < 3; j++){
          System.out.print(matrix2[i][j] + "  ");
        }
        System.out.println(" ");
      }

      for(int i = 0; i < 3; i++){
        for(int j = 0; j < 3; j++){
          for(int k = 0; k < 3; k++){
            // System.out.println("k: " + k + " j: " + j);
            ansMatrix[i][j] += matrix1[i][k]*matrix2[k][j];
          }
        }
      }

      for(int i = 0; i < 3; i++){
        for(int j = 0; j < 3; j++){
          System.out.print(ansMatrix[i][j] + "  ");
        }
        System.out.println(" ");
      }
    }
}