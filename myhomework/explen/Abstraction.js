// Abstract class representing a vehicle
class Vehicle {
    constructor() {
      if (this.constructor === Vehicle) {
        throw new Error("Cannot instantiate abstract class.");
      }
    }
  
    // Abstract method for starting the vehicle
    start() {
      throw new Error("Method 'start()' must be implemented.");
    }
  
    // Abstract method for stopping the vehicle
    stop() {
      throw new Error("Method 'stop()' must be implemented.");
    }
  }
  
  // Concrete class representing a car
  class Car extends Vehicle {
    start() {
      console.log("Car started.");
    }
  
    stop() {
      console.log("Car stopped.");
    }
  }
  
  // Create a car object
  const myCar = new Car();
  
  // Call the abstract methods
  myCar.start(); // Output: Car started.
  myCar.stop(); // Output: Car stopped.