/**
 * Liskov Subtitutions Principle
 * ----------------------------------------------------------------
 */

class Vehicle {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
}

class VehicleWithoutEngine extends Vehicle {
    startMoving() { }
}

class VehicleWithEngine extends Vehicle {
    startEngine() { }
}

class Car extends VehicleWithEngine {
    constructor(name, speed, engine) {
        super(name, speed);
        this.engine = engine;
    }

    startEngine() {
        console.log(`Car with ${this.engine} engine starting\n`)
    }

    toString() {
        console.log(`Name: ${this.name}`)
        console.log(`Speed: ${this.speed}`)
        console.log(`Engine: ${this.engine}`)
    }
}

class Bicycle extends VehicleWithoutEngine {
    constructor(name, speed) {
        super(name, speed);
    }

    startMoving() {
        console.log("Bicycle is start moving\n")
    }

    toString() {
        console.log(`Name: ${this.name}`)
        console.log(`Speed: ${this.speed}`)
    }
}

const porcheCar = new Car("Porche 911", "280km/h", "V8")
porcheCar.toString()
porcheCar.startEngine()

const polygonBike = new Bicycle("Polygon S12", "50km/h")
polygonBike.toString()
polygonBike.startMoving()
