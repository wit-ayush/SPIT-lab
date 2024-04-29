package lab5Package;

public class Q7Thread extends Thread {
    private int privateValue;

    public Q7Thread(String name, int privateValue) {
        super(name);
        this.privateValue = privateValue;
    }

    @Override
    public void run() {
        while (privateValue > 0) {
            System.out.println(Thread.currentThread().getName() + ": Private Value = " + privateValue);
            privateValue--;
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        System.out.println(Thread.currentThread().getName() + ": Thread terminated.");
    }

    public static void main(String[] args) {
        Q7Thread thread1 = new Q7Thread("Thread1", 5);
        Q7Thread thread2 = new Q7Thread("Thread2", 8);
        thread1.start();
        thread2.start();
    }
}

