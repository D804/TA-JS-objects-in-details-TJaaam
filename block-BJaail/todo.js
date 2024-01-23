class TodoList {
    constructor(root,list = []){
       this.todos = list;
       this.root = root;
    }
    add(text){
       let todo = new Todo(text);
       this.todos.push(todo);
       this.createUI();
       return this.todos.length;
    }
    handledelete(id){
       let index = this.todos.findIndex((todo)=>todo.id === id);
       this.todos.splice(index,1);
       this.createUI();
       return this.todos.length
    }
    createUI(){
       this.root.innerHTML = "";
       this.todos.forEach(todo=>{
           let ui = todo.createUI();
           ui.querySelector("span").addEventListener("click",this.handledelete.bind(this.todo.id));
           this.root.append(ui);  
       });
   }
    }
   