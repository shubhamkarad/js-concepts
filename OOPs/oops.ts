// Object-Oriented Programming (OOP) is a programming paradigm centered around the concept of objects, which encapsulate both data and behavior. Let's break down the key OOP concepts with simple examples and their uses in TypeScript and frontend development:

// 1. Encapsulation
// Encapsulation means bundling data (properties) and methods (functions) within a class and restricting direct access to them.

// Example in TypeScript:

class User {
  private password: string;

  constructor(public username: string, password: string) {
    this.password = password;
  }

  validatePassword(input: string): boolean {
    return this.password === input;
  }
}

const user = new User('JohnDoe', 'securePass');
console.log(user.username); // Accessible
// console.log(user.password); // Error: Property 'password' is private
console.log(user.validatePassword('securePass')); // true

// Uses in Frontend: Encapsulation ensures sensitive data, like user credentials or API tokens, is not directly exposed in the UI. For instance, forms in Angular or React can use encapsulation to manage component state privately.

// 2. Inheritance
// Inheritance allows a class to derive properties and methods from another class, enabling code reuse.

// Example in TypeScript:

class Animal {
  constructor(public name: string) {}

  makeSound() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  makeSound() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Buddy');
dog.makeSound(); // Buddy barks.

// Uses in Frontend: Inheritance is useful in component libraries. For example, a Button component might inherit styles or behaviors from a base UIComponent class.

// 3. Polymorphism
// Polymorphism allows methods to behave differently based on the object calling them.

// Example in TypeScript:

class Shape {
  calculateArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const shapes: Shape[] = [new Shape(), new Circle(5)];
shapes.forEach(shape => console.log(shape.calculateArea()));
// Output: 0, 78.54

// Uses in Frontend: Polymorphism helps when creating dynamic UI components. For instance, rendering different widgets (charts, tables, or graphs) based on user interaction in Angular or React.

// 4. Abstraction
// Abstraction hides complex implementation details and shows only the essential features of an object.

// Example in TypeScript:

abstract class Payment {
  abstract processPayment(amount: number): void;
}

class CreditCardPayment extends Payment {
  processPayment(amount: number): void {
    console.log(`Processing credit card payment of $${amount}`);
  }
}

const payment: Payment = new CreditCardPayment();
payment.processPayment(100);


// Uses in Frontend: In frameworks like Angular, services often abstract data-fetching logic, so components only need to call methods without knowing implementation details.