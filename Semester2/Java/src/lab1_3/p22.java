package lab1_3;

class Vehicle {
    protected String make;
    protected String model;
    protected int year;
    protected double price;

    public Vehicle(String make, String model, int year, double price) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price;
    }

    public void displayInfo() {
        System.out.println("Make: " + make);
        System.out.println("Model: " + model);
        System.out.println("Year: " + year);
        System.out.println("Price: $" + price);
    }
}

class Car extends Vehicle {
    protected int numDoors;
    protected String fuelType;

    public Car(String make, String model, int year, double price, int numDoors, String fuelType) {
        super(make, model, year, price);
        this.numDoors = numDoors;
        this.fuelType = fuelType;
    }

    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Number of Doors: " + numDoors);
        System.out.println("Fuel Type: " + fuelType);
    }
}

class ElectricCar extends Car {
    protected int batteryCapacity;
    protected int chargingTime;

    public ElectricCar(String make, String model, int year, double price, int numDoors, String fuelType,
                       int batteryCapacity, int chargingTime) {
        super(make, model, year, price, numDoors, fuelType);
        this.batteryCapacity = batteryCapacity;
        this.chargingTime = chargingTime;
    }

    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Battery Capacity: " + batteryCapacity + " kWh");
        System.out.println("Charging Time: " + chargingTime + " hours");
    }
}

class Truck extends Vehicle {
    protected double loadCapacity;

    public Truck(String make, String model, int year, double price, double loadCapacity) {
        super(make, model, year, price);
        this.loadCapacity = loadCapacity;
    }

    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Load Capacity: " + loadCapacity + " tons");
    }
}

public class p22 {
    public static void main(String[] args) {
        Car car = new Car("Toyota", "Camry", 2022, 25000, 4, "Gasoline");
        ElectricCar electricCar = new ElectricCar("Tesla", "Model S", 2023, 80000, 4, "Electric", 100, 8);
        Truck truck = new Truck("Ford", "F-150", 2021, 35000, 2.5);

        System.out.println("Car Information:");
        car.displayInfo();
        System.out.println();

        System.out.println("Electric Car Information:");
        electricCar.displayInfo();
        System.out.println();

        System.out.println("Truck Information:");
        truck.displayInfo();
    }
}