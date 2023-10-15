// Step 1: Create an interface for the type of object you want to create
class Car {
    constructor(model) {
        this.model = model;
    }

    drive() {
        console.log(`Driving a ${this.model}`);
    }
}

// Step 2: Create concrete classes that implement this interface
class Tesla extends Car {
    constructor() {
        super('Tesla');
    }
}

class Ford extends Car {
    constructor() {
        super('Ford');
    }
}

// Step 3: Create the Factory that returns instances of the classes based on given information
class CarFactory {
    createCar(type) {
        switch(type) {
            case 'Tesla':
                return new Tesla();
            case 'Ford':
                return new Ford();
            default:
                throw new Error("Car type not supported");
        }
    }
}

// Usage
const factory = new CarFactory();

const myTesla = factory.createCar('Tesla');
myTesla.drive(); // Outputs: Driving a Tesla

const myFord = factory.createCar('Ford');
myFord.drive(); // Outputs: Driving a Ford
