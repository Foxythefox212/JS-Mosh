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

// 09: A: ARITHMETIC OPERATOR
let X = 10;
let Y = 5;
console.log(X + Y);
console.log(X - Y);
console.log(X * Y);
console.log(X / Y);
console.log(X % Y);
console.log(X ** Y);

// INCREMENT (++)
console.log(X++);
console.log(X);

// DECREMENT (--)
console.log(--X);

// B: ASSIGNMENT OPERATOR
let a = 10;
a = a + 5;
// SAU(Acelasi lucru)
a += 5;
a = a * 10;
a *= 10;

// C: COMPARISON OPERATOR
//   Relatinal Operator
console.log(X > 9);
console.log(X >= 9);
console.log(X <= 9);
console.log(X <= 9);

// STRICT EQUALITY OPERATOR (SAME TYPE AND VALUE)
console.log(X === 10);

// LOSE EQUALITY OPERATOR (VALUE ARE EQUAL)
console.log(X == 10); //TRUE
console.log("10" == 10); //TRUE
console.log(true == 10); //FALSE

// D: TERNARY sau CONDITIONAL OPERATOR
// ex: If a customer has more than 100points, they are a "gold"
//customer, otherwise they are a "silver" customer.

let points = 110;
let type = points > 100 ? "gold" : "silver";
console.log(type); // gold customer

// E: LOGICAL OPERATOR
// ( AND ) && = (BOTH has to be TRUE)
console.log(true && true);
//EX:
let hightIncome = false;
let goodCreditScore = false;
let eligibleForLoan = hightIncome && goodCreditScore; // loan = IMPRUMUT
console.log(eligibleForLoan); //True

// ( OR ) || = (0NE has to be TRUE)
eligibleForLoan = hightIncome || goodCreditScore;
console.log("Eligible", eligibleForLoan); //Eligible=False

// ( NOT ) ! =(TRANSFORMA TRUE in FALSE)
let aplicationRefused = !eligibleForLoan;
console.log("Aplication Refuse", eligibleForLoan); // Aplication Refuse=True

// LOGICAL OPERATOR with NON-BOOLEANS
// FALSY: undefined, null, 0, false, NaN, false," " .
// EX:
let userColor = undefined;
let defaultColor = "green";
let currentColor = userColor || defaultColor;
console.log(currentColor); //pink

// F: BITWISE OPERATOR
// Binary sistem format di 1 si 0
// 1 reprezentat de = 00000001(7 de 0 si 1)
// 8 digiti numiti bits avem 8 bits si e 1 bits of information
//in computer

// 1 =        00000001
// 2 =        00000010( 6 de zero si 1 0 )
//Result(3) = 00000011 (Se uita sa vada care are 1 pe coloana lui de acolo 00000011)
console.log(1 | 2); //bitwise OR// Rezulta 3
//Si in sistemul bunar 00000011 = 3
console.log(1 & 2); // Bitwise AND // 0
//DACA primele cifre sun 1 rezulta True
//Result(0) = pt ca toate de sus is 0

//Ex: In real world
// User are permisiunea: READ, WRITE, EXECUTE
// 00000100(permisiune sa READ) // 4 transformat in numere decimale
// 00000010(permisiune sa READ, WRITE)
// 00000001(permisiune sa READ, WRITE, EXECUTE)
const readPermision = 4;
const writePermision = 2;
const executePermision = 1;

let myPermision = 0;
myPermision = myPermision | readPermision | writePermision;
console.log(myPermision); //6

let message = myPermision & readPermision ? "yes" : "no";
console.log(message); //yes

// G: OPERATOR PRECEDENCE
let xx = 2 + 3 * 4;
console.log(xx); // 14
//multiplication precedence is higher than addition value

//EXERCITII
let aa = "red";
let bb = "blue";

let cc = aa;
aa = bb;
bb = cc;

console.log(aa);
console.log(bb);
console.log(aa);
console.log(bb);

// IF...ELSE CONDITIONAL STATEMENT

//Hour
//If it is between 6am and 12pm: Good morning!
//If it is between 12pm and 6pm: Good afternoon!
//Oterwise: Good evening!
let hour = 10;
if (hour >= 6 && hour < 12) {
  console.log("Good morning!");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

// SWITCH ...CASE
let role = "guest";

switch (role) {
  case "guest":
    console.log("Guest User"); // Guest
    break;
  case "moderator":
    console.log("Moderator User");
    break;
  case "administrator":
    console.log("Administrator User");
    break;
  default:
    console.log("Unknow User");
}
// Folosim IF / ELSE

if (role === "guest") {
  console.log("Guest User"); // Guest
} else if (role === "moderator") {
  console.log("Moderator User");
} else if (role === "administrator") {
  console.log("Administrator User");
} else {
  console.log("Unknow User");
}

// LOOPS = FOR, WHILE, DO...WHILE, FOR...IN, FOR...OF
//FOR LOOP: We need 3 statements: (1)nitialExpresion; (2)Condition; (3)Incremenet exprseion
// i = index si e folosit pe loops se numeste loop variable
for (let i = 0; i < 5; i++) {
  console.log("Hello World!", i); // Hello World de 5 ori
}
for (let i = 0; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i); // 5 3 1
}

// WHILE (condition) apoi statement if apoi increment ++
// LET e declarat extern fata de for care a declarat intern si
//LET-urile sunt diferite
let I = 0; //Am pus I mare ca nu ma lasa sa pun i mic
while (I <= 5) {
  if (I % 2 !== 0) console.log(I); // 1 3 5 odd=(numere impare)
  I++;
}

// DO-WHILE = Conditia e evaluata(luata in considerare) la sfarsit
//si inseamna ca statementul din paranteza ruleaza cel putin o data
let i = 9;
do {
  if (i % 2 !== 0) console.log(i);
  i++;
} while (i <= 5);

// INFINITE LOOPS
// Se poate crea infinit loop cu WHILE
// let ii = 0;
// while (ii < 5) {
//   console.log(ii);
//   ii++;
// }
//SAU
// while (true) {} //Infinite Loop

// Se poate crea si cu DO-WHILE
// let w = o;
// do {
//   // w++;
// } while (w < 5);
// for (let iii = 0; iii > 0; iii++);

//Daca nu incrementam i sau ce declaram sau uitam sa punem a treia
// conditie i++ se creeaza loop

// FOR, WHILE, DO-WHILE- Repeti o actiune a number of time

//FOR-IN LOOP
//-Se folosesc pt iterate(repetare) over the properties of an object or
//elements in array
const persons = {
  nameR: "Laur",
  ageR: 35,
};

for (let key in persons) console.log(key, persons[key]);
//Dot Notation  persons.nameR
//Bracket Notation  persons["nameR"]

// FOR-OF LOOP
const colors = ["red", "blue", "pink"];
for (let color of colors) console.log(color); //red green blue

// BREAK and CONTINUE
//Se aplica la toate LOOP-urile invatate
let iii = 0;
while (iii <= 10) {
  // if (iii === 5) break;//0 1 2 3 4
  if (iii % 2 === 0) {
    // 1 3 5 7 9
    iii++;
    continue;
  }
  console.log(iii);
  iii++;
}

// EXERCISE 01 (MAX of TWO NUMBERS)
let numbers = max(7, 9);
console.log(numbers);
function max(e, f) {
  return e > f ? e : f;
}

// EXERCISE 02 (Landscape or Portrait)
function isLandscape(width, height) {
  return width > height;
}
const grater = isLandscape(50, 70);
console.log(grater);

// EXERCISE 03 (FizzBuzz asta se da si la interviuri)
//Daca nr e divizibil cu 3 =Fizz
//Daca nr e divizibil cu 5 =Buzz
//Daca e divizibil cu 3 si 5 =FizzBuzz
//Daca nu e divizibil cu 3,5 apare nr scris in paranteza
//Daca nu e nr apare "Not a number"
const output = fizzBuzz(3);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== "number") return NaN; //Prima data sa vedem daca e numar
  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";
  return input;
}

//  EXERCISE 04 (Demerit Points)
checkSpeed(130);
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log("OK");
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) console.log("License suspended");
  else console.log("Points", points);
}

// EXERCISE 05 (ODD, EVEN)
showNumber(10);

function showNumber(limit) {
  for (let i = 0; i <= limit; i++) {
    // if (i % 2 === 0) console.log(i, "EVEN");
    // else console.log(i, "ODD"); Se poate asa  SAU

    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, message);
  }
}

// EXERCISE 06 (Count TRUTHY)
const array = [0, 1, 2, 3];
console.log(countTruthy(array)); //Da 3 pt ca 0 ii Falsy
function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}

//  EXERCISES 07 (STRING PROPERTIES)
const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b",
};
showProperties(movie);
function showProperties(obj) {
  for (let key in obj)
    if (typeof obj[key] === "string") console.log(key, obj[key]);
}

//  EXERCISE 08: Sum of multiple of 3 and 5
console.log(sum(10));

function sum(limit) {
  let sum = 0;
  for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;

  return sum;
}

//EXERCISE 09: GRADE OF A STUDENT
const marks = [80, 80, 50];
// Average = 80+80+50/3=70

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  const average = calculateAverage(marks);
  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A"; //Trebuie sa dea C si mie imi da A
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array) sum += value;
  return sum / array.lenght;
}

// EXERCISE 10: STARS//Se da la Junior programatori
showStars(5);

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = " ";
    for (let i = 0; i < row; i++) pattern += "*";
    console.log(pattern);
  }
}

//  EXERCISES 11: PRIME NUMBERS
showPrimes(20);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  let isPrime = true;
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;

  return true;
}

// III-OBJECTS
//= The object of an OBJECT si to group related variable
//Ce avem mai jos se numeste OBJECT ORIENTED PROGRAMMING (OOP)
//Colection of objects that talk to each other to perform functionality

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    //Functia care ii in object i se spune method
    //DOAR DACA E IN INTERIORUL LA OBJECT
    console.log("draw");
  },
};
//Pentru a le accesa folosim dot notation(.)
//Si spunem ca folosim the draw method
circle.draw(); //METHOD

//01-FACTORY functions => se foloseste Camel Notation(unuDoiTreiPatru)
//Factory function produc OBJECT
function createCircle(radius, location) {
  return {
    radius, // = reprezita radius: radius,
    draw() {
      //II Functia draw daar ca scris fara functie
      console.log("draw");
    },
  };
}
const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

//02-CONSTRUCTOR Functions => se foloseste Pascal Notation(UnuDoiTreiPatru)
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const ccircle = new Circle(1);
// const xxx = {}
//se intampla 3 lucruri in new
//new = creaza empty OBJECT
//new = seteaza this din acolada la acolada lui xxx
//new = return object din functia Circle

// OBJECT ARE DINAMIC !!!
// Const circlee nu se poate schimba dar se poate adauga sau elimina elemente din ea
const circlee = {
  radius: 1,
};
circlee.color = "green"; //Introduci color in circlee
circlee.draw = function () {}; //Introduci draw functia in circlee

delete circlee.color; //Sterge color din circlee
delete circlee.draw; //Sterge draw din circlee

console.log(circlee);

//FACTORY FUNCTION
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circleee = createCircle(1);

//CONSTRUCT FUNCTION
function Circleee(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

//Every object has a constructor property !!!!

// FUNCTION ARE OBJECTS !!!!!
//Circleee.name  ("Circleee")
//Circleee.length (1)
// const Circleee1 = new Function(
//   "radius",
//   `this.radius = radius;
// this.draw = function () {
//   console.log("draw");
// }
// `
// );
// const circle3 = new Circleee1(1);

Circleee.call({}, 1);
Circleee.apply({}, [1, 2, 3]);
const another = new Circleee(1);

//  VALUE vs REFERENCE TYPE

// Value= Primitive(nr, null, boolean, string, symbol, undefined)
// Reference=(Object, Function, Array)

// Ceea ce constitue primitivele(adica cand lucram cu ele) sunt individuale
// si valori lor sunt independente unele de altele

// Pe cand la ceea ce constituie Reference acestea nu sunt stocate in
// variabile si undeva in memorie si adresa unde e tinuta valoarea tipuli
// reference e stocata in variabila

// Primitive are copied by they value
// Objects(Reference) are copied by they reference(locul unde sunt stocate)

//  PROPERTIEs OF UN OBJECT

const triunghi = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

for (let key in triunghi) console.log(key, triunghi[key]); // radius draw

// for (let key of triunghi) console.log(key); //Triunghi is not iterable
// An OBJECT IS NOT ITERABLE(? nu stiu ce ii iterable)
for (let key of Object.keys(triunghi)) console.log; // Apare radius 1
//si draw care ii functie
for (let entry of Object.entries(triunghi)) console.log(entry);

// Acesta de sus iis forme sa ai acces la metode si proprietati ale Object

if ("radius" in triunghi) console.log("yes"); //yes

//  Cloning an Object

// const anotherCircle = {};
// for (let key in triunghi) anotherCircle[key] = triunghi[key];

const anotherCircle = Object.assign({}, triunghi);
//Metoda assign ia tot ce ii in triunghi si copiaza in acolada
//Ii exact ca cel de sus da scris mai "modern"
//Acolada poate sa aibe ceva in ea
//ex: Object.assign({color:"yellow"}, triunghi)

const anotherCircl = { ...triunghi }; //Cel mai simplu sa clonezi un Object

console.log(anotherCircl); // radius=1 draw functie

// Garbage Collection
// In JavaScript variabilele care nu se mai folosesc sunt automat
// dezactivate de catre program
let triungh = {};
console.log(triungh);

// METHOD OBJECT - MATH, STRING,

// Math.random() => Iti da un nr random intre 0 & 1

// Math.round(1.9)
// 2 => rotunjeste numarul

// Math.max(1, 2, 3, 4, 5)
// 5 => returneaza cel mai mare numar din lista

// Math.min(1, 2, 3, 4, 5)
// 1 => returneaza cel mai mic numar din lista

// OBJECT METHOD - STRING - avem 2 tipuri de string
// String primitive
const mesage = " This is my first message ";

// mesage.length
// Apare 24 => numara caracterele inclusiv spatiul
// mesage[0] => "T"; mesage[1] => "h"

// mesage.includes("my")
// true
// mesage.includes("not")
// false

// mesage.startWith("This")  This !== this
// true

// mesage.endWith("e")
// true

// mesage.indexOf("my")
// 8 => adica incepe la index 8

// mwsage.replace("first", "second")
// This is my second message => Nu schimba originalul

// mesag.toUpperCase => THIS IS MY FIRST MESSAGE(originalul)

// mesag.trim() => Te scapa de spatiile libere inainte si dupa mesaj

// mesage.trimLeft => Te scapa de spatiile din stanga

// mesage.split(" ") => ["This", "is", "my", "first", "message"]
// Le desparte si le pun in ce am pus in paranteza

// String Object
const anot = new String("hi");

// TEMPLATE LITERALS `` backtick

const mesaj = "This is my\n first message"; // linie noua

const ano = `This is my 
first ${mesaj} message`;
console.log(ano);

// DATE OBJECT

const now = new Date();
const date1 = new Date("May 12 2022 08:20");
const date2 = new Date(2018, 4, 11, 9, 0);

now.getDate;
now.getFullYear(2020);
// now.toDateString() => "Thu May 11 2017"
// now.toTimeString() => "11:35:01 GMT-0700 (PDT)"
// now.toISOSString() => "2017-05-11T18:35:01.212Z"

// Exercise 01 Return maxima dintre 2 numere
function number(minNumber, maxNumber) {
  if (minNumber > maxNumber) return minNumber;
  else return maxNumber; // else se poate sterge
}
// Se poate scrie si cu conditia
// return condition ? a : b;
const maxNumber = number(5, 5);
console.log(maxNumber);

// Exercise 02 Landscape or Portrate
function isLandscap(width, height) {
  if (width > height) return true;
  return false;
}
// return(width > height) expresia e evaluata la true sau false pt ca e
// comparatie si atunci da true sau false si nu mai e nevoie de return true
// si return false=>  function isLandscap si return(width > height)
const portrait = isLandscap(100, 200);
console.log(portrait); //true

// Exercise 03: FIZZBUZZ
function fizzBuzz(input) {
  if (typeof input !== "number") return NaN; //Primul pas
  else if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz"; //Ordinea de
  // scris conteaza => acum apare FizzBuzz
  else if (input % 3 === 0) return "Fizz";
  else if (input % 5 === 0) return "Buzz";
  return input;
}
const outpu = fizzBuzz(8);
console.log(outpu);

// Exercise 04" Demerit Points
function checkSpee(speed) {
  const speedLimi = 70;
  const kmPerPoin = 5;
  if (speed < speedLimi + kmPerPoin) console.log("ok");
  else {
    const puncte = Math.floor((speed - speedLimi) / kmPerPoin);
    if (puncte >= 12) console.log("License suspended");
    else console.log("Puncte", puncte);
  }
}
checkSpee(72);

// Exercise 05 EVEN and ODD NUMBER
function showNumbe(limit) {
  for (showNumbe = 0; showNumbe <= 10; showNumbe++) {
    if (showNumbe % 2 === 0) {
      console.log(showNumbe, "Even");
    } else if (showNumbe % 2 !== 0) {
      console.log(showNumbe, "ODD");
    }
  }
}
showNumbe(10);

// Exercise 06 COUNT TRUTHY
function countTruthY(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}

// Exercise 07 STRING PROPERTIES
function showPropertie(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      console.log(key, obj[key]);
    }
  }
}
const film = {
  title: "Alb",
  director: "Negru",
  rating: 5.9,
  year: 2022,
};
showPropertie(film);

// Exercise 08 SUM OF MULTIPLES OF 3 AND 5
function sum(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;

  return sum;
}
console.log(sum(10));

// Exercise : Address Object
const address = {
  street: "Dallas",
  city: "Aiud",
  zipCode: 515200,
};

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}
showAddress(address);

/* Exercise : Factory and Constructor Function
Factory Function : */
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}
let addres = createAddress("Dallas", "Aiud", 515200);
console.log(addres);
// Constructor Function:
function AddressA(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
let adres = new AddressA("Dallas", "Aiud", 515200);
console.log(adres);

// Exercise : Block post Object
let blockObj = new BlockObj("a", "b", "c");
console.log(blockObj);

// Ca sa pot face functia Constructor cu this
/*{
  title: "UNtitlu",
  body: "Uncorp",
  author: "Ruxandra",
  view: 30,
  comments: [
    { author: "Very good", body: "Corp" },
    { author: "good", body: "corp" },
  ],
  isLive: true,
}; */
console.log(blockObj);

// Exercise : Constructor Function
function BlockObj(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.view = 0;
  this.comments = [];
  this.isLive = false;
}
