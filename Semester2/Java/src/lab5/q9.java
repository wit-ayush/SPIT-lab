package lab5Package;

import java.io.*;

public class Q9Main {
    public static void main(String[] args) {
        String binaryDataString = "0100110101101111011011100110101101100101011110010010000001000100001000000100110001110101011001100110011001111001";
        String outputFileName = "D:/eclipse-workspace/Lab5/src/lab5Package/Q9Output.txt";

        try (BufferedOutputStream outputStream = new BufferedOutputStream(new FileOutputStream(outputFileName))) {
            byte[] binaryDataBytes = binaryStringToByteArray(binaryDataString);
            outputStream.write(binaryDataBytes);

            System.out.println("Content written to: " + outputFileName);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static byte[] binaryStringToByteArray(String binaryString) {
        int length = binaryString.length();
        byte[] byteArray = new byte[length / 8];
        for (int i = 0; i < length; i += 8) {
            String byteString = binaryString.substring(i, i + 8);
            byteArray[i / 8] = (byte) Integer.parseInt(byteString, 2);
        }
        return byteArray;
    }
}
