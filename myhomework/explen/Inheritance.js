// Parent class
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    // Method shared by all animals
    makeSound() {
      console.log("Animal makes a sound.");
    }
  }
  
  // Child class inheriting from Animal
  class Dog extends Animal {
    constructor(name) {
      super(name);
    }
  
    // Method specific to Dog
    makeSound() {
      console.log("Dog barks.");
    }
  }
  
  // Create a Dog object
  const myDog = new Dog("Buddy");
  
  // Access properties and methods from parent class
  console.log("Name:", myDog.name); // Output: Name: Buddy
  myDog.makeSound(); // Output: Dog barks.