// 1. Variables and Data Types:

// 1.a Declare a variable- 'name'• and assign it a string value
// eslint-disable-next-line no-redeclare
const name = 'Basma';

// 1.b Declare a variable 'age'• and assign•it-a• number value
const age = 22;

// 1.c Declare-a variable-'isStudent • and assign•it a boolean value
const isStudent = true;

// 1.d Create a variable• 'result' and assign•it the result of adding two numbers
const result = 5 + 7;

// 1.e Create a variable - message and assign it a string concatenation of 'name' and a greeting message
const message = 'Hello, ' + name + '!\nWelcome to the JavaScript Test.';

console.log(
  'Variables and Data Types:\n' +
    'Name: ' +
    name +
    '\nAge: ' +
    age +
    '\nIs Student: ' +
    isStudent +
    '\nResult of 5 + 7: ' +
    result +
    '\nGreeting Message: ' +
    message
);

// 2. Conditional Statements:

console.log('Conditional Statements:');

const number = 12;

// 2.a Write an if statement to check if a number is greater than 10
if (number > 10) {
  console.log(number + ' is greater than 10');
}

// 2.b Write an if-else statement to check if a number is even or odd
if (number % 2 === 0) {
  console.log(number + ' is even');
} else {
  console.log(number + ' is odd');
}

// 2.c Write nested if-statements  to check if a student passed or failed an exam based-on-their score (passing score >= 60)
const score = 85;
if (score >= 0) {
  if (score >= 60) {
    console.log('Student passed');
  } else {
    console.log('Student failed');
  }
} else {
  console.log('Invalid score');
}

// 2.d Write a switch statement to display a message based on the day of the week
const day = 'Sunday';
switch (day) {
  case 'Sunday':
    console.log('Start of the work week.');
    break;
  case 'Wednesday':
    console.log('Almost weekend!');
    break;
  case 'Thursday':
    console.log('It\'s The Weekend!');
    break;
  default:
    console.log('Just another day.');
}

// 2.e Write a ternary operator to determine if a person is eligible to vote based on their age
const canVote = age >= 18 ? 'Eligible to vote' : 'Not eligible to vote';
console.log(canVote + '\n');

// 3. Loops

console.log('Loops:');

// 3.a Write a for loop to iterate from 1 to 5 and display each number
console.log('For loop 1 to 5:');
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 3.b Write a while loop to print even numbers between 1 and 10
console.log('While loop for even numbers (1–10):');
let even = 2;
while (even <= 10) {
  console.log(even);
  even += 2;
}

// 3.c Write a do-while loop to prompt the user to enter a number until they enter a negative number
console.log('Do-while loop (user input):');
let input;
do {
  input = Number(prompt('Enter a number (negative to stop):'));
  console.log('Entered: ' + input);
} while (input >= 0);

// 3.d Iterate over an array of names using a for loop and display each name
console.log('For loop over array of names:');
const names = ['Basma', 'Dana', 'Farah'];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// 3.e Use a for loop to find the sum of all numbers in an array
console.log('Sum of array:');
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log('Sum: ' + sum + '\n');

// 4. Arrays:

console.log('Arrays:');

// 4.a Create an array colors with three color names
const colors = ['red', 'green', 'blue'];
console.log('The original colors: ' + colors.join(', '));

// 4.b Access the second element of the array colors
console.log('The second color: ' + colors[1]);

// 4.c Add a new color to the end of the colors array
colors.push('yellow');
console.log('After adding the new color (yellow): ' + colors.join(', '));

// 4.d  Remove the first color from the colors array
colors.shift();
console.log('After removing the first color: ' + colors.join(', '));

// 4.e Update the second color in the colors array
colors[1] = 'purple';
console.log('After updating the second color: ' + colors.join(', ') + '\n');

// 5. Functions:

console.log('Functions:');

// 5.a Write a function add that takes two numbers as parameters and returns their sum
function add(a, b) {
  return a + b;
}
console.log('Add 5 + 7 = ' + add(5, 7));

// 5.b Write a function isEven that takes a number as a parameter and returns true if it's even, otherwise returns false
function isEven(n) {
  return n % 2 === 0;
}
console.log('Is 10 even? ' + isEven(10));

// 5.c Write a function greet that takes a name as a parameter and returns a greeting message
function greet(name) {
  return 'Welcome, ' + name + '!';
}
console.log(greet('Basma'));

// 5.d Write a function calculateArea that takes the radius of a circle as a parameter and returns its area
function calculateArea(radius) {
  return Math.PI * radius * radius;
}
console.log('Area of circle (radius 3): ' + calculateArea(3));

// 5.e Write a function reverseString that takes a string as a parameter and returns its reverse
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log('Reverse of "hello": ' + reverseString('hello'));
