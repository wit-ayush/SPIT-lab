import java.util.*;

public class QuickSort {
  static int partition(int[] a, int low, int high) {
    int pivot = a[high];
    int index = low;
    for (int i = low; i < high; i++) {
      if (a[i] < pivot) {
        int temp = a[i];
        a[i] = a[index];
        a[index] = temp;
        index++;
      }
    }
    int temp = a[high];
    a[high] = a[index];
    a[index] = temp;
    return index;
  }
  static void sort(int[] arr, int p, int q) {
    int pindex;
    if (p < q) {
      pindex = partition(arr, p, q);
      sort(arr, p, pindex - 1);
      sort(arr, pindex + 1, q);
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
    System.out.println("QUICK SORT");
    System.out.println();
    System.out.println("Unsorted Array: ");
    printarray(a1, n);
    System.out.println("Best Case");
    sort(a1, 0, a1.length - 1);
    printarray(a1, n);
    System.out.println();
    System.out.println("Unsorted Array: ");
    printarray(a3, n);
    System.out.println("Average Case");
    sort(a3, 0, a3.length - 1);
    printarray(a3, n);
    System.out.println();
    System.out.println("Unsorted Array: ");
    printarray(a2, n);
    System.out.println("Worst Case");
    sort(a2, 0, a2.length - 1);
    printarray(a2, n);
  }
}