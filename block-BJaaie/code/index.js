function Animals(location, noOfLegs){
    this.location = location;
    this.noOfLegs = noOfLegs;
};
Animals.prototype ={
    eat: function(){
     alert(`I live in ${this.location} and i can eat`);
    },
     changeLocation: function(newLocation){
          this.location = newLocation;
         return this.location;
     },
    summary: function(){
        return (`I live in ${this.location} and I have ${this.noOfLegs}`)
    },
};
function Dogs (location,noOfLegs,name, color) {
   Animals.call(this,location ,noOfLegs);
    this.name = name;
    this.color = color;
};
Dogs.prototype = {
    bark: function(){
        alert(`I am ${this.name} and I can bark 🐶`);
    },
    changeName: function(newName){
        this.name = newName;
        return this.name;
    },
    changeColor:function(newColor){
        this.color = newColor;
        return this.color;
    },
    summary: function(){
        return (` I am ${this.name} and I am of ${this.color} color. I can also bark`)
    }
};
Object.setPrototypeOf(Dogs.prototype,Animals.prototype);
function Cats(location,noOfLegs,name, colorOfEyes){
    Animals.call(this,location,noOfLegs);
    Dogs.apply(this,[name]);
    this.colorOfEyes  = colorOfEyes;
};
Cats.prototype = {
    mew: function(){
        alert(`I am ${this.name} and I can do mewo mewo`);
    },
    changeName: function(newName){
        this.name = newName; 
        return this.name;
    },
    changeColorOfEyes: function(colorEyes) {
        this.color = colorEyes;
        return this.color;
    },
    summary: function(){
        return (`I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`)
    },
};
Object.setPrototypeOf(Cats.prototype,Animals.prototype);

// Using class
class Animals  {
    constructor (location,noOfLegs){
        this.location = location;
        this.noOfLegs = noOfLegs;
    }
     eat(){
     alert(`I live in ${this.location} and i can eat`);
    }
    changeLocation(newLocation){
          this.location = newLocation;
         return this.location;
     }
     summary(){
        return (`I live in ${this.location} and I have ${this.noofLegs}`)
    }
};
class Dogs extends Animals {
    constructor (location,noOfLegs,name, color){
        super(location,noOfLegs);
        this.name = name;
        this.color = color;
    }
        bark(){
        alert(`I am ${this.name} and I can bark 🐶`);
    }
      changeName(newName){
        this.name = newName;
        return this.name;
    }
        changeColor(newColor){
        this.color = newColor;
        return this.color;
    }
        summary(){
        return (` I am ${this.name} and I am of ${this.color} color. I can also bark`)
    }
    
};
class Cats extends Animals  {
    constructor (location,noOfLegs,name, colorOfEyes){
        super(location,noOfLegs);
        this.colorOfEyes = colorOfEyes;
    }
       mew(){
        alert(`I am ${this.name} and I can do mewo mewo`);
    }
      changeName(newName){
        this.name = newName; 
        return this.name;
    }
     changeColorOfEyes(colorEyes) {
        this.color = colorEyes;
        return this.color;
    }
    summary(){
        return (`I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`)
    }
    
};

