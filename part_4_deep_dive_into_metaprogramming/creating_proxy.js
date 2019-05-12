class Employee {
  constructor(firstName, lastName, yearOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
  }

  get fullName() { return `${this.firstName} ${this.lastName}`; }

  get age() { return new Date().getFullYear() - this.yearOfBirth; }
}

const printInfo = function(employee) {
  console.log(`First name: ${employee.firstName}`);
  console.log(`Full name: ${employee.fullName}`);
  console.log(`Age: ${employee.age}`);
}

const john = new Employee('John', 'Doe', 2010);

const handler1 = {};
const proxyDoe1 = new Proxy(john, handler1);
printInfo(proxyDoe1);

console.log();

const handler2 = {
  get: function(target, propertyName, receiver) {
    if (propertyName === 'firstName') {
      console.log(`target is john? ${john === target}`);
      console.log(`propertyName is ${propertyName}`);
      console.log(`receiver is proxyDoe? ${proxyDoe2 === receiver}`);
    }

    return Reflect.get(target, propertyName);
  }
};

const proxyDoe2 = new Proxy(john, handler2);
printInfo(proxyDoe2);

console.log();

const handler3 = {
  get: function(target, propertyName, receiver) {
    if (propertyName === 'age') {
      return `It's not polite to ask that question, dear`;
    }

    return Reflect.get(target, propertyName);
  }
};

const proxyDoe3 = new Proxy(john, handler3);
printInfo(proxyDoe3);
