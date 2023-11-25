```js
function createUser(name,id,noOfProjects) {
    let user = {}
    user.name = name;
    user.id = id;
    user.noOfProjects = noOfProjects;
    user.getProjects = function() {
        return user.noOfProjects;
    };
    user.changeName = function(newName) {
        let prevName =user.name;
        user.name = newName;
        return prevName;
    };
    user.incrementOfProject=function() {
        return user.noOfProjects += 1 ;
        
    };
    user.decrementOfProject = function(){
       return user.noOfProjects -= 1 ;
      
    };
    return user;
}
let user1 = createUser("deep",2345,5); 
//  test
console.log(user1.name);
 console.log(user1.id);
 console.log(user.incrementOfProject());
 console.log(user1.decrementOfProject());
```
```js prototypal pattern
let userMethod = {   
    getProjects : function() {
        return this.noOfProjects;
    },
    changeName :function(newName) {
        let prevName =this.name;
        this.name = newName;
        return prevName;
    },
    incrementOfProject : function() {
        return this.noOfProjects += 1 ;
        
    },
    decrementOfProject : function(){
       return this.noOfProjects -= 1 ;
      
    },

};
    function createUser(name,id,noOfProjects) {
        let user = Object.create(userMethod);
        user.name = name;
        user.id = id;
        user.noOfProjects = noOfProjects;
        return user;
    };
    //  test
    console.log(user1.name);
    console.log(user1.id);
    console.log(user.incrementOfProject());
    console.log(user1.decrementOfProject());
```
```js pseudoclassical way
function CreateUser(name,id,noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
    
};
CreateUser.prototype = {
    changeName :function (newName) {
        return this.name = name;
    },
    incrementOfProject: function(project) {
        this.noOfProject = project;
        return this.noOfProject;
        
    },
    decrementOfProject : function(pro) {
        this.noOfproject = pro;
        return this.noOfProject;
    },
    };
    //  test
    console.log(user1.name);
    console.log(user1.id);
    console.log(user.incrementOfProject());
    console.log(user1.decrementOfProject());
```
```js using class pattern
class CreateUser {
    constructor(name,id,noOfProjects) {
     this.name = name;
     this.id = id;
     this.noOfProjects = noOfProjects;
    }
    changeName(newUser) {
    let prevName = user.name;
        user.name = newUser;
        return prevName;
    }
    incrementOfProject() {
        return this.noOfProjects += 1;
        
    }
    decrementOfProject() {
        return this.noOfProjects -= 1;
        
    }
 };
 //  test
 console.log(user1.name);
 console.log(user1.id);
 console.log(user.incrementOfProject());
 console.log(user1.decrementOfProject());
```
