## Find the output

For the give code below write the output/error along with the reason!

```js
let user = {
  username: 'John',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};

let user2 = {
  username: 'Arya',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};
let user3 = {
  username: 'Bran',
};

function MainUser() {
  this.username = 'Tyrion';
  this.sayHello = function sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  };
}

let userSayHello = user.sayHello;

console.log(user.sayHello()); // Hello John Because left hand side of the sayHello function is an object which       pointing value of this.
console.log(user2.sayHello()); //Hello Arya Because left hand side of the sayHello function is an object which       pointing value of this.
console.log(user.sayHello.call(user2)); //Hello Arya ,Here we are using explicit binding call which is calling user2 thats why it is printing Hello Arya. 
console.log(user.sayHello.call(user2, 'Hey')); // Hey Arya, We are using explicit binding  user2 will point to this and hey will act as a parameter.
console.log(user.sayHello.apply(user2, ['Hey'])); // Hey Arya,Here we have used explicit binding apply which accepts parameter in array form .
console.log(typeof user.sayHello.bind(user2)); // function bind point to function 
console.log(user.sayHello.bind(user2)()); // Hello Arya, bind point to  function and here we call that pointed function . 
console.log(userSayHello()); // Hello undefined this will point to window because  left hand side of function is nothing.
console.log(typeof userSayHello.bind(user2)); // function bind will point to function.
console.log(userSayHello.bind(user2)()); // Hello Arya, bind will point to function and that function we are executing.
console.log(user3.sayHello()); //error in user3 there is no properties of sayHello in  user3
console.log(userSayHello.apply(user3)); //Hello Bran , Here we bound to do explicit bind using apply.  
console.log(userSayHello.call(user3)); // Hello Bran , Here we are using explicit binding call which point to user3.
console.log(typeof new MainUser()); // object,Because new will create object this.
console.log(typeof new MainUser()); //object,Because new will create object this.
console.log(new MainUser().sayHello()); //Hello Tyrion MainUser is pointing to sayHello function.
console.log(new MainUser().sayHello.call(user2)); //Hello Arya  We are using explicit binding  which  bound to point user2 function.
console.log(new MainUser().sayHello.call(user)); // Hello John We are using explicit binding  which  bound to point user function.
console.log(
  new MainUser().sayHello.apply(user, ['Welcome!'])
);// Welcome! John  Here we are explicitely point to user and in parameter we are passing welcome so it's log Welcome! John. 
```
