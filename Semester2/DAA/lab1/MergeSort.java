import java.util.*;

public class MergeSort {
  static void mergesort(int[] a, int start, int end) {
    if (start < end) {
      int mid = (start + end) / 2;
      mergesort(a, start, mid);
      mergesort(a, mid + 1, end);
      merge(a, start, mid, mid + 1, end);
    }
  }
  static void merge(int[] values, int leftFirst, int leftLast, int rightFirst, int rightLast) {
    int[] temparray = new int[10];
    int index = leftFirst;
    int saveFirst = leftFirst;
    while ((leftFirst <= leftLast) && (rightFirst <=
        rightLast)) {
      // compare and select the smallest from two subarrays
      if (values[leftFirst] < values[rightFirst]) {
        temparray[index] = values[leftFirst];
        // smallest assigned to temp
        leftFirst++;
      } else {
        temparray[index] = values[rightFirst];
        rightFirst++;
      }
      index++;
    }
    while (leftFirst <= leftLast) {
      temparray[index] = values[leftFirst];
      leftFirst++;
      index++;
    }
    while (rightFirst <= rightLast) {
      temparray[index] = values[rightFirst];
      rightFirst++;
      index++;
    }
    for (index = saveFirst; index <= rightLast; index++) {
      // copies from temp array to values
      values[index] = temparray[index];
    }
  }
  static void printarray(int[] a, int n) {
    for (int i = 0; i < a.length; i++)
      System.out.print(a[i] + " ");
    System.out.println();
  }
  public static void main(String[] args) {
      int[] a1 = { 31, 63, 95, 127, 159, 191, 223, 255, 287, 319 };
      int[] a2 = { 319, 287, 255, 223, 191, 159, 127, 95, 63, 31 };
      int[] a3 = { 127, 191, 31, 319, 95, 159, 223, 63, 255, 287 };
      int n = a1.length;
      int start = 0;
      int end = n - 1;
      System.out.println("MERGE SORT");
      System.out.println();
      System.out.println("Unsorted Array: ");
      printarray(a1, n);
      System.out.println("Best Case");
      mergesort(a1, start, end);
      printarray(a1, n);
      System.out.println();
      System.out.println("Unsorted Array: ");
      printarray(a3, n);
      System.out.println("Average Case");
      mergesort(a3, start, end);
      printarray(a3, n);
      System.out.println();
      System.out.println("Unsorted Array: ");
      printarray(a2, n);
      System.out.println("Worst Case");
      mergesort(a2, start, end);
      printarray(a2, n);
  }
}