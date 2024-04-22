// Class representing a car
class Car {
    constructor(make, model) {
      this._make = make; // Encapsulated property
      this._model = model; // Encapsulated property
    }
  
    // Encapsulated method to get car make
    getMake() {
      return this._make;
    }
  
    // Encapsulated method to get car model
    getModel() {
      return this._model;
    }
  
    // Encapsulated method to set car make
    setMake(make) {
      this._make = make;
    }
  
    // Encapsulated method to set car model
    setModel(model) {
      this._model = model;
    }
  }
  
  // Create a car object
  const myCar = new Car("Toyota", "Camry");
  
  // Access encapsulated properties using methods
  console.log("Make:", myCar.getMake()); // Output: Make: Toyota
  console.log("Model:", myCar.getModel()); // Output: Model: Camry
  
  // Modify encapsulated properties using methods
  myCar.setMake("Honda");
  myCar.setModel("Accord");
  
  // Access modified encapsulated properties
  console.log("Make:", myCar.getMake()); // Output: Make: Honda
  console.log("Model:", myCar.getModel()); // Output: Model: Accord