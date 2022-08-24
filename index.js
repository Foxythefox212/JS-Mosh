// This is my second JavaScript code!!!
// JS-BASICS
// 01-02: Let and Const
console.log("Hello World!");
let name = "Ruxi";
console.log(name);
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);
// 04: Primitive si Reference Type
// Primitive: Number, Strings, Null, NaN, indefine
// Reference: Object, Array, Functions
let firstName = "Ruxandra"; // STRING LITERAL
let age = 36; //NUMBER LITERAL
let isApproved = true; //BOOLEAN LITERAL
let secondName;
let year = null;
let selectedColor = null;
// 04: Dynamic Typing
console.log(typeof name); //string
name = 5;
console.log(typeof age); //36 = number
console.log(typeof isApproved); //True = Boolean
console.log(typeof interestRate); //1 = number
console.log(typeof firstName); // string
console.log(typeof secondName); //undefined

// 05: OBJECTS

let person = {
  Name: "Laura",
  Age: 36,
};

//Pt a accesa Name: "Laura" exista 2 modalitati:
// 1- Dot Notation
person.Name = "Ruxan";

// 2- Bracket Notation
person["Name"] = "Ruxandre";
console.log(person.Name);

// 06: ARRAY []
let selectedColors = ["red", "blue", "green", "pink"];
selectedColors[2] = 1; //Ii dinamic - se poate schimba
console.log(selectedColors);
console.log(typeof selectedColors); // Object
console.log(selectedColors.length);

// 07: FUNCTIONS()
// Performing a task
function greet(name, LastNamE) {
  console.log("How are you?" + name + " " + LastNamE); //Apare How are you ? Ruxandra
  //Apare How are you? Laura
}
greet(" Ruxandra", "Nicoleta");
greet(" Laura", "Geanina");
greet(33);

// 08: TYPE OF FUNCTIONS
//-Performing a Task
//-Calculating a Value
function square(number) {
  return number * number;
}
// console.log(square(2));

// let Person = {
//   nume: "Laur",
//   varsta: 23,
// };
// console.log(Person["nume"]);
