package lab5Package;

public class Q5Thread implements Runnable {
    private int start;
    private int end;

    public Q5Thread(int start, int end) {
        this.start = start;
        this.end = end;
    }

    @Override
    public void run() {
        try {
            for (int i = start; i <= end; i+= 2) {
                System.out.println(Thread.currentThread().getName() + ": " + i);
                Thread.sleep(1000);
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        Thread[] threads = new Thread[5];
        for (int i = 0; i < 5; i++) {
            threads[i] = new Thread(new Q5Thread(2, 12));
            threads[i].start();
        }
        for (int i = 0; i < 5; i++) {
            if (i == 1) {
                try {
                    threads[i].join();
                    System.out.println("Thread " + threads[i].getName() + " has finished printing even numbers.");
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            } else {
                while (threads[i].isAlive()) {
                    System.out.println("Thread " + threads[i].getName() + " is still alive.");
                    try {
                        Thread.sleep(1000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
    }
}

