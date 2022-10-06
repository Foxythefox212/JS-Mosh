// MDN = Modzilla Developer
"use strict";
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string

function random(number) {
  return Math.floor(Math.random() * number);
}
let value = random(520);
console.log(value);

// Math.random() = genereaza un numar zecimal aleatoriu intre 0 si 1
const myNumbers = Math.random(); // 0.018826354
console.log(myNumbers);

// replace() = are nevoie de 2 parametrii("string", cel care il inlocuieste)
const myTexts = "I am a string";
const newStrings = myTexts.replace("string", 9);
console.log(newStrings);

// Suport pt parametrii optionali
function hello(name = "Ruxi") {
  console.log(`Hello ${name}!`);
}

hello("Ari"); // Hello Ari!
hello(); // Hello Ruxi!

// Functie care nu are nume numita = Anonymus function
// si de obicei in loc de parametru se pune alta functie
// si poarta numele de FUNCTIE EXPRESIE
(function () {
  alert("hello");
});

function squared(num) {
  return num * num;
}

function cubed(num) {
  return num * num * num;
}

function factorial(num) {
  if (num < 0) return undefined;
  if (num === 0) return 1;
  let x = num - 1;
  while (x > 1) {
    num *= x;
    x--;
  }
  return num;
}
// input.addEventListener("change", () => {
//   const num = parseFloat(input.value);
//   if (isNaN(num)) {
//     para.textContent = "You need to enter a number!";
//   } else {
//     para.textContent = `${num} squared is ${squared(num)}. `;
//     para.textContent += `${num} cubed is ${cubed(num)}. `;
//     para.textContent += `${num} factorial is ${factorial(num)}. `;
//   }
// });

let numberss = factorial(10);
console.log(numberss);

// Arate numere prime
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert(i); // a prime
  }
}

// x la puterea n
// Ii mai desfasurata, fara a se folosi x**n
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

// let x = prompt("x?", ''); Ii asa sa nu tot sara alerta
// let n = prompt("n?", '');

if (n < 1) {
  // alert(`Power ${n} is not supported, use a positive integer`);
} else {
  // alert( pow(x, n) );
}

// Function Expression cu 3 parametrii
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  // alert( "You agreed." );
}

function showCancel() {
  // alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);
// SAU
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function () {
    alert("You agreed.");
  },
  function () {
    alert("You canceled the execution.");
  }
);
/* A function is a value representing an “action”
Regular values like strings or numbers represent the data.
A function can be perceived as an action.
We can pass it between variables and run when we want. */

// Function Declaration: a function, declared as a separate statement, in the main code flow:
// Function Declaration
function sum(a, b) {
  return a + b;
}

// Function Expression: a function, created inside an expression or inside another syntax construct. Here, the function is created on the right side of the “assignment expression” =:
// Function Expression
let sum = function (a, b) {
  return a + b;
};

let age = prompt("What is your age?", 18);

let welcome =
  age < 18
    ? function () {
        alert("Hello!");
      }
    : function () {
        alert("Greetings!");
      };

welcome(); // ok now
