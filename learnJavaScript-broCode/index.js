// lesson 1

// console.log(
//     "Hello World!"
// )

/* 
    MULTIPLE LINE COMMENTS
*/

// Lesson 2

// document.getElementById("myH1").textContent = "Hello Daniel."
// document.getElementById("myP1").textContent = "I am mania player."

// Lesson 3

// let x;
// x = 5;
// console.log(x);

// Lesson 4

// console.log("I like pizza!");
// console.log("It's really good!");
// window.alert("I REALLY LOVE PIZZA!");

//This is a comment
/*
    This
    is
    a
    multiline
    comment
*/

// Lesson 5

// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

// Two steps:
// 1. Declaration (var, let, const)
// 2. Assignment ( = assignment operator)

// let firstName = "Bro"; //strings
// let age = 21; //number
// let student = true; //booleans

// console.log("Hello", firstName);
// console.log("You are", age, "years old");
// console.log("Enrolled:", student);

// document.getElementById("p1").innerHTML = "Hello " + firstName;
// document.getElementById("p2").innerHTML = "You are " + age + " years old";
// document.getElementById("p3").innerHTML = "Enrolled: " + student;

// Lesson 6

/* 
   arithmetic expression is a combination of...
   operands (values, variables, etc.)
   operators (+ - * / %)
   that can be evaluated to a value
   ex. y = x + 5;
*/

// let students = 20;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//let extraStudents = students % 2;
//students = students ** 2;

// console.log(students);

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;

/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division
    4. addition & subtraction
*/

//let result = (1 + 2) * (3 + 4);

//console.log(result);


// Lesson 7

// How to accept user input

// EASY WAY with a window prompt

//let username = window.prompt("What's your name?");
//console.log(username);

// DIFFICULT WAY HTML textbox

// let username;

// document.getElementById("myButton").onclick = function(){
    
//     username = document.getElementById("myText").value;
//     console.log(username);
//     document.getElementById("myLabel").innerHTML = "Hello " + username;
// }

// Lesson 8

// type conversion = change the datatype of a value to another
//                                 (strings, numbers, booleans)

let age = window.prompt("How old are you?");

console.log(typeof age);
age = Number(age);
age += 1;

console.log("Happy Birthday! You are", age, "years old");

/*
let x;
let y;
let z;

x = Number("pizza");
y = String(3.14);
z = Boolean("pizza");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
*/


// Lesson 9

// const = a variable that can't be changed

const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

//PI = 420.69;

circumference = 2 * PI * radius;

console.log("The circumference is:", circumference);



// Lesson 10

// Math =  an intrinsic object that provides basic mathematics functionality and constants

let x = 3.14;
let y = 5;
let z = 9;
let maximum;
let minimum;

//x = Math.round(x);
//x = Math.floor(x);
//x = Math.ceil(x);
//x = Math.pow(x, 2);
//x = Math.sqrt(x);
//x = Math.abs(x);
//maximum = Math.max(x, y, z);
//minimum = Math.min(x, y, z);
//x = Math.PI;

console.log(x);

// Lesson 11

let a;
let b;
let c;

document.getElementById("submitButton").onclick = function(){

    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("cLabel").innerHTML = "Side C: " + c;
}

// Lesson 12

let count = 0;

document.getElementById("decreaseBtn").onclick = function(){
    count-=1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetBtn").onclick = function(){
    count=0;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increaseBtn").onclick = function(){
    count+=1;
    document.getElementById("countLabel").innerHTML = count;
}

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <label id="countLabel">0</label><br>
//     <button id="decreaseBtn">decrease</button>
//     <button id="resetBtn">reset</button>
//     <button id="increaseBtn">increase</button>
//     <script src="index.js"></script>
// </body>
// </html>

// #countLabel{
//     display: block;
//     text-align: center;
//     font-size: 50px;
// }

// Lesson 13

let x;
let y;
let z;

document.getElementById("rollButton").onclick = function(){

    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;
}

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <label id="xlabel"></label><br>
//     <label id="ylabel"></label><br>
//     <label id="zlabel"></label><br>
//     <button type="button" id="rollButton">roll</button>
//     <script src="index.js"></script>
// </body>
// </html>


// Lesson 14

// useful string properties & methods

let userName = "Bro Code";
let phoneNumber = "123-456-7890";

//console.log(userName.length);
//console.log(userName.charAt(0));
//console.log(userName.indexOf("o"));
//console.log(userName.lastIndexOf("o"));
//userName = userName.trim();
//userName = userName.toUpperCase();
//userName = userName.toLowerCase();

phoneNumber = phoneNumber.replaceAll("-", "");

console.log(phoneNumber);


// Lesson 15

// slice() extracts a section of a string 
//             and returns it as a new string, 
//             without modifying the original string

let fullName = "Snoop Dogg";
let firstName;
let lastName;

//firstName = fullName.slice(0, 3);
//lastName = fullName.slice(4);

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);


// Lesson 16

// method chaining = calling one method after another
//                   in one continuous line of code

let userName = "bro";

let letter = userName.charAt(0).toUpperCase().trim();

console.log(letter);


// Lesson 17

// if statement = a basic form of decision making
//                           if a condition is true, then do something
//                           if not, then don't do it!

let age = 21;

if(age >= 65){
    console.log("You are a senior citizen!");
}
else if(age >= 18){
    console.log("You are an adult!");
}
else if(age < 0){
    console.log("YOU HAVEN'T BEEN BORN YET!");
}
else{
    console.log("You are a child!");
}

/*
let online = false;

if(online){
    console.log("You are online!");
}
else{
    console.log("You are offline!");
}
*/