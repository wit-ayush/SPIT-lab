package lab;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

class Lab {
    private boolean labAvailable = true;

    synchronized void attendLab(String className) {
        while (!labAvailable) {
            try {
                wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        labAvailable = false;
        System.out.println(className + " is in session.");
    }

    synchronized void labSessionOver() {
        labAvailable = true;
        notify();
    }
}

class ClassRoom extends Thread {
    private int classNumber;
    private Lab lab;

    public ClassRoom(int classNumber, Lab lab) {
        this.classNumber = classNumber;
        this.lab = lab;
    }

    public void run() {
        String className = "Class " + classNumber;
        
        lab.attendLab(className);
        
        try {
            sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        
        lab.labSessionOver();
        System.out.println(className + " has finished.");
    }
}

public class q1 {
    public static void main(String[] args) {
        Lab lab = new Lab();

        System.out.print("Enter the number of classes: ");
        int numClasses = 0;
        try {
            numClasses = Integer.parseInt(new BufferedReader(new InputStreamReader(System.in)).readLine());
        } catch (NumberFormatException | IOException e) {
            e.printStackTrace();
        }

        for (int i = 1; i <= numClasses; i++) {
            ClassRoom classRoom = new ClassRoom(i, lab);
            classRoom.start();
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
