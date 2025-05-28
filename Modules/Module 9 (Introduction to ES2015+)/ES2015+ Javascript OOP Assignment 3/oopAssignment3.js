// Person class
class Person {
    constructor(name, idNumber) {
        this.name = name;
        this.idNumber = idNumber;
    }

    display() {
        console.log(`Name: ${this.name}, ID: ${this.idNumber}`);
    }
}

// Employee class that inherits from Person
class Employee extends Person {
    constructor(name, idNumber, salary, post) {
        super(name, idNumber);  // Call the parent class constructor
        this.salary = salary;
        this.post = post;
    }

    display() {
        super.display();  // Call the parent class display method
        console.log(`Salary: ${this.salary}, Post: ${this.post}`);
    }
}

// Create a new Person object
const person = new Person("John Doe", "P12345");
console.log("Person Information:");
person.display();

// Create a new Employee object
const employee = new Employee("Jane Smith", "E67890", 50000, "Software Developer");
console.log("\nEmployee Information:");
employee.display();
