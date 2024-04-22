// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(this.name + ' is eating.');
  }
}

// Child class inheriting from the parent class
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Calling the parent class constructor
    this.breed = breed;
  }

  bark() {
    console.log('Woof!');
  }
}

// Create an instance of the child class
const myDog = new Dog('Buddy', 'Labrador');

// Access methods from the parent class
myDog.eat(); // Output: Buddy is eating.

// Access methods specific to the child class
myDog.bark(); // Output: Woof!