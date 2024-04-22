// Parent class
class Shape {
    constructor() {
      this.name = "Shape";
    }
  
    // Method to calculate the area
    calculateArea() {
      return 0;
    }
  }
  
  // Child class Circle
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.name = "Circle";
      this.radius = radius;
    }
  
    // Override the calculateArea method
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  // Child class Rectangle
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.name = "Rectangle";
      this.width = width;
      this.height = height;
    }
  
    // Override the calculateArea method
    calculateArea() {
      return this.width * this.height;
    }
  }
  
  // Create objects
  const circle = new Circle(5);
  const rectangle = new Rectangle(3, 4);
  
  // Call the calculateArea method on different objects
  console.log(circle.name + " area: " + circle.calculateArea()); // Output: Circle area: 78.53981633974483
  console.log(rectangle.name + " area: " + rectangle.calculateArea()); // Output: Rectangle area: 12