class Car {
  constructor(year) {
    this.year = year;
    this.miles = 0;
  }
  
  drive(distance) {
    this.miles += distance;
  }
  
  get age() {
    return new Date().getFullYear() - this.year;
  }
  
  get distanceTravelled() { return this.miles; }
  
  set distanceTravelled(value) {
    if(value < this.miles) {
      throw new Error(
        `Sorry, can't set value to less than current distance travelled.`
      );
    }
    this.miles = value;
  }
}

const car = new Car(2007);
car.drive(10);

console.log(car);
console.log(`car.age: ${car.age}`);

console.log(car.distanceTravelled);

car.distanceTravelled = 14;
console.log(car.distanceTravelled);

try {
  car.distanceTravelled = 1;
} catch(ex) {
  console.log(ex.message);
}