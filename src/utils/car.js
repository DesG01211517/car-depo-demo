//vehicle class with constructor function//

class Car {
  constructor(make, model, year, color, vin) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.vin = vin;
  }
}
//warehouse class with constructor function
class Collection {
  constructor(name) {
    this.name = name;
    this.cars = [];
  }
}

export { Car, Collection };
