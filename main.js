//alert('Hello World');
console.log('Hello World');
console.error('this is an error');
console.warn('this is an a warning');

// var, let- we can change values , const- (always initialise) cannot change values directly

/* let age = 30;
age = 31;

const num = 30; 

let score;
score = 10;

/* const score;
score = 10; */  // this is not possible -error 

// Strings ,Numbers , boolean , null, undefined, Symbol

const myName = 'John';
const age = 25;
const rating = 4.5;
const isCool = true;
const x = null;  //empty variable
const y = undefined;
let z;

console.log(typeof myName);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

// concatenation

console.log('My name is ' + myName + ' and I am ' + age);
//Template String 
 //console.log(`My name is ${myName} and I am ${age}`);

const hello = `My name is ${myName} and I am ${age}`;
console.log(hello)

//string funtions

const s = 'Hello world';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5).toUpperCase());// it stop before 5
console.log(s.split('')) //by letters ''means

const h = 'technology, computers, it, code';
console.log(s.split(', '));

// Arrays - variables that hold multiple values of diff. type

const numbers = new Array(1,2,3,4,5); //constructor
const fruits = ['apples', 'oranges', 'Mango'];
console.log(fruits);
fruits[3] = 'grapes'; // inserting
console.log(fruits[1]); // accessing array

fruits.push('blueberry') //add at the end
fruits.unshift('strawberry');//add at the top or first
fruits.pop();//delete the last value
console.log(Array.isArray(fruits));

console.log(Array.isArray(hello));

console.log(fruits.indexOf('oranges'));

console.log(fruits);

// object

const person = {
    firstName: 'Alvy',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'reading','dancing'],
    address: {
        street: '50 main st',
        city: 'Den Haag',
        state: 'SH'
    }
}

console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

const {firstName, lastName, address: { city }} = person;//destructor
console.log(firstName);
console.log(city);

person.email = 'john@gmail.com';
console.log(person);

// Arrays of objects

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'medical appt',
        isCompleted: false
    }

 ];

 console.log(todos[1].text);

 for(let j = 0; j < todos.length; j++) {
    console.log(todos[j].text);
 }

 /*const todoJSON = JSON.stringify(todos);
 console.log(todoJSON);*/

 // for loop

 for(let i = 0; i <= 10; i++) {
    console.log('for loop number: ${i}');
 }

 //while loop

 let i = 0;
 while(i < 10) {
    console.log('while loop number: ${i}');
    i++;
 }

 // forof

 for(let todo of todos) {
    console.log(todo.id);
 }

 //forEach, map, filter -para function

 todos.forEach(function(todo) {
    console.log(todo.text);

 });

 const todoText = todos.map(function(todo) {
    return todo.text;

 });

 console.log(todo.text);

 const todoCompleted = todos.filter(function(todo) {
      return todo.isCompleted === true;
 }).map(function(todoe) {
    return todo.text
 })
 
 console.log(todoCompleted);

 
//if else

const m = 4;
const n = 10;
if (m > 5 && n > 10) {
    console.log('m is more than 5 or n is more than 10');
}

if(m > 5) {
    if(n > 10) {
}
}

// ternery operator

const a = 10;
const color = a > 10 ? 'red' : 'blue';

console.log(color);

// switches

const colour = 'green'

switch(colour) {
    case 'red':
      console.log('color is red');
      break;
     case 'blue':
       console.log('color is blue');
       break;
     default:
        console.log('color is Not red or blue');
        break;

}

// functions

function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}

console.log(addNums(5,4)); // CALLING A FUNCTION

/* const addNums = (num1 = 1, num2 = 1) => num1 + num2;
   console.log(naddNums(5,4))
   
   const addNums = num1 => num1 + 5;
   console.log(naddNums(5));

   todos.forEach((todo) => console.log(todo));
   
   arrow function
     */


   function Person(firstName, lastName, dob) {        //constructor function always capital (construct objects)
      this.firstName = firstName;
      this.lastName = lastName;
      this.dob = new Date(dob);
     /* this.getBirthYear = function(){
        return this.dob.getFullYear();
      }
      this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
      } */
       }  

       Person.prototype.getBirthYear = function() {
        return this.dob.getFullYear();
       }

       Person.prototype.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
       }


//class 
class Person {
    constructor(firstName, lastName, dob) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.dob = new Date(dob);   
    }
    
    getBirthYear() {
        return this.dob.getFullYear();
    }
    
    getFullName() {
        return `${this.firstName} ${this.lastName}`; 
    }

}



// instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Marry', 'Do', '5-4-1985');

 /* console.log(person2.dob.getFullYear);
  console.log(person2.firstName); */

  console.log(person1.getBirthYear());
  console.log(person1.getFullName());

  
// DOM 
// Single element selector
/*console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));
console.log(document.querySelector('.container'));*/

//multiple element

//console.log(document.querySelectorAll('.item'));  //generally use query selector
//console.log(document.getElementsByClassName('item'));
//console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));

// Manipulating DOM

const ul = document.querySelector('.item');

//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';


const btn = document.querySelector('.btn');
btn.style.background = 'red';

btn.addEventListener('click', (e) => {
    e.preventDefault();
   // console.log(e.target.className);
   document.querySelector('my-form').style.background = '#cc';
   document.querySelector('body').classList.add('bg-dark');
   document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#user');

myForm.addEventListener('Submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
       // alert('please enter fields');
       msg.classList.add('error');
       msg.innerHTML = 'please enter all fields';

       setTimeout(() => msg.remove(), 3000);
    } else {
       // console.log('success');
       const li = document.createElement('li');
       li.appendChild(document.createTextNode('${nameInput.value} : ${emailInput.value}'));

       userList.appendChild(li);

       //clear fields
       nameInput.value = '';
       emailInput.value = '';

     }
    }













