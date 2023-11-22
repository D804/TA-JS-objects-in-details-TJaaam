```js
function createUser(name,id,noOfProjects) {
    let project = {}
    project.name = name;
    project.id = id;
    project.noOfProjects = noOfProjects;
    project.getProjects = function() {
        return project.noOfProjects;
    };
    project.changeName = function(newName) {
        return project.name;
    };
    project.incrementOfProject=function(project) {
        project.noOfProjects = project;
        return project.noOfProjects;
    };
    project.decrementOfProject = function(pro){
      project.noOfProjects = pro;
      return project.noOfProjects;
    };
    return project;
}
let user1 = createUser("deep",2345,5); 
```
```js prototypal pattern
let userMethod = {
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
    function createUser(name,id,noOfProjects) {
        let userData = Object.create(userMethod);
        this.name = name;
        this.id = id;
        this.noOfProjects = noOfProjects;
        return userData;
    };
```
```js pseudoclassical way
    
```
