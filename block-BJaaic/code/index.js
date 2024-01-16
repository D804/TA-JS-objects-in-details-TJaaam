
let animalMethod = {
  eat(){
   alert(`I live in ${this.location} and I can eat`);
  },
  changeLocation(newlocation) {
      this.location = newLocation;
      return this.location;
  },
   summary(){
       return (`I live in ${this.location} and i have ${this.noOfLegs}`);
   },
};
function animal(location,noOfLegs){
  let animals = Object.create(animalsMethod);
  this.location = location;
  this.noOfLegs = noOfLegs;
  return animals;
}

function dog (location,noOfLegs,name,color){
  let animals = animal(location,noOfLegs);
  Object.setPrototypeOf(animals,dogMethod);
  this.color = color;
  this.name = name;
  return animals;
};
let dogMethod = {
  bark(){
      alert(`I am ${this.name} and I can bark`);
  },
  changeName(newName) {
      this.name = newName;
      return this.name;
  },
  changeColor(newColor){
      this.color = newColor;
      return this.color;
  },
  summary(){
      return (`Hi my name is${this.name} and my color is ${this.color}. I can also Bark`);
  },
};
Object.setPrototypeOf(dogMethod,animalMethod);

function cat(location,noOfLegs,name,colorOfEyes){
  let animals  = animal(location,noOfLegs);
  Object.setPrototypeOf(animals,catMethod);
  this.colorOfEyes  = colorOfEyes;
  this.name = name;
  return animals;
};
let catMethod  = {
  meow () {
      alert(`My name is ${this.name} and I can do meow meow `);
  },
  changeName(newName) {
      this.name = newName;
      return this.name; 
  },
  changeColorOfEyes(newColor) {
      this.colorOfEyes = newColor;
      return this.colorOfEyes;
  },
  summary(){
      return (`Hi i am ${this.name} and my color of Eyes are ${this.colorOfEyes} and I can do meow meow`)
  },
};
Object.setPrototypeOf(catMethod,animalMethod);