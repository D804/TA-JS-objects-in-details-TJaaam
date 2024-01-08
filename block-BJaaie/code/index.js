function Animals(location, noOfLegs){
    this.location = location;
    this.noofLegs = noOfLegs;
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
        return (`I live in ${this.location} and I have ${this.noofLegs}`)
    },
};
function Dogs (name, color) {
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
function Cats(name, colorOfEyes){
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
    constructor (location,noofLegs){
        this.location = location;
        this.noofLegs = noofLegs;
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
    constructor (name, color){
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
class Cats extends Dogs  {
    constructor (name, colorOfEyes){
        super(name);
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
let user1 = new Animals("Delhi", 4);
