class Car {
    constructor(topSpeed) {
        this.topSpeed = topSpeed;
        this.location = 0;
    }

    printTopSpeed() {
        console.log(`The car's top speed is ${this.topSpeed} mph`);
    }

    drive() {
        this.location += 10;
        console.log(`Drove 10 miles. Current location: ${this.location} miles`);
    }

    stop() {
        console.log(`Final location: ${this.location} miles`);
    }
}

// Create a car object
const myCar = new Car(120);

// Print the top speed
myCar.printTopSpeed();

// Drive the car
myCar.drive();
myCar.drive();

// Stop and show final location
myCar.stop();
