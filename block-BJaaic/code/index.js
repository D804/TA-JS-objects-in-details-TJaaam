function Animal(location, numberOfLegs) {
    this.location = location;
    this.numberOfLegs = numberOfLegs;
  }
  
  
  Animal.prototype.eat = function () {
    console.log(`I live in ${this.location} and I can eat`);
  };
  
  Animal.prototype.changeLocation = function (newLocation) {
    this.location = newLocation;
  };
  
  Animal.prototype.summary = function () {
    return `I live in ${this.location} and I have ${this.numberOfLegs} legs`;
  };
  
 
  function Dog(name, color, location, numberOfLegs) {
    Animal.call(this, location, numberOfLegs);
    this.name = name;
    this.color = color;
  }
  
 
  Dog.prototype = Object.create(Animal.prototype);
  

  Dog.prototype.bark = function () {
    console.log(`I am ${this.name} and I can bark 🐶`);
  };
  
  Dog.prototype.changeName = function (newName) {
    this.name = newName;
  };
  
  Dog.prototype.changeColor = function (newColor) {
    this.color = newColor;
  };
  
 
  Dog.prototype.summary = function () {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  };
  

  function Cat(name, colorOfEyes, location, numberOfLegs) {
    Animal.call(this, location, numberOfLegs);
    this.name = name;
    this.colorOfEyes = colorOfEyes;
  }
  
 
  Cat.prototype = Object.create(Animal.prototype);
  
  
  Cat.prototype.meow = function () {
    console.log(`I am ${this.name} and I can do meow meow 😹`);
  };
  
  Cat.prototype.changeColorOfEyes = function (newColor) {
    this.colorOfEyes = newColor;
  };
  
 
  Cat.prototype.summary = function () {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  };
  
  