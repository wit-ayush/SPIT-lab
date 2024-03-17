public class Matrix_multi {
    static int matrixOrder(int p[]) {
        int n = p.length;
        int[][] dp = new int[n][n];

        for (int i = 1; i < n; i++) {
            dp[i][i] = 0;
        }

        for (int len = 2; len < n; len++) {
            for (int i = 1; i < n - len + 1; i++) {
                int j = i + len - 1;
                dp[i][j] = Integer.MAX_VALUE;
                for (int k = i; k < j; k++) {
                    int count = dp[i][k] + dp[k + 1][j] + p[i - 1] * p[k] * p[j];
                    dp[i][j] = Math.min(dp[i][j], count);
                }
            }
        }

        return dp[1][n - 1];
    }

    public static void main(String[] args) {
        int arr[] = {3, 4, 5, 6};
        System.out.println("Minimum number of multiplications is: " + matrixOrder(arr));
    }
}
