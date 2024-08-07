"use strict";
// Access question
const questionTxt = document.querySelector(".questionTxt");
// access answers individually
const answerTxt1 = document.querySelector(".answer--0");
const answerTxt2 = document.querySelector(".answer--1");
const answerTxt3 = document.querySelector(".answer--2");
// access answers in general
const answerBtnAll = document.querySelectorAll(".answer");
// select all nav buttons
const navTopicList = document.querySelectorAll(".topic-list");
// select wrong answer count
const wrongAnswerScore = document.querySelector(".wrong-score");
// select correct answer count
const rightAnswerScore = document.querySelector(".correct-score");
// select the hamburger button
const hamburgerButton = document.querySelector(".hamburger-button");
// select the off screen menu
const offScreenMenu = document.querySelector(".off-screen-menu");

// Make a variable that holds the current topic
let currentTopic = 0;

// Make a variable that holds the current wrong answers score
let wrongAnswers = 0;

// Make a variable that holds the current right answers score
let rightAnswers = 0;

// Make arrays that hold all questions of the different topics
let basicsQuest = [];
let variablesQuest = [];
let datatypesQuest = [];
let operatorsQuest = [];
let stateExQuest = [];
let functionsQuest = [];
let arrObjectsQuest = [];
let loopsQuest = [];
let domQuest = [];
let behindTheScenesQuest = [];

// make an array with all questions as objects
const questions = [
  // TODO: ------------------------------------------------- BASIC JS
  {
    question: `How do you link an external JS file in your HTML document? (sytnax)`,
    answers: [
      `<script src="./location">`,
      `<link rel="script" src="./location">`,
      `<script src="./location"></script>`,
    ],
    corAnswer: 2,
    topic: "basics",
  },
  {
    question: `When should you link a JS file in the HTML head element?`,
    answers: [
      `It's personal preference if you use the head or body element.`,
      `To ensure JS functions are globally accessible.`,
      `When you need JS functionality right away, before the page is fully loaded.`,
    ],
    corAnswer: 2,
    topic: "basics",
  },
  {
    question: `When should you link a JS file in the HTML body element?`,
    answers: [
      `To ensure compatibility with all browsers.`,
      `To ensure a quick loading time, and to make sure JS will interact with all HTML elements.`,
      `To delay the execution of JavaScript until after the HTML content is fully rendered.`,
    ],
    corAnswer: 1,
    topic: "basics",
  },
  {
    question: `How do you ensure the delay of the JavaScript execution until after the HTML content is fully rendered?`,
    answers: [
      `You add "deter" as an attribute to the script element.`,
      `You add "defer" as an attribute to the script element.`,
      `You add "delay" as an attribute to the script element.`,
    ],
    corAnswer: 1,
    topic: "basics",
  },
  {
    question: `What is a template literal?`,
    answers: [
      `A way to write strings without having to concatenate variables and other special characters.`,
      `A predefined function in JavaScript used to manipulate arrays.`,
      `A variable that stores a fixed string value throughout the execution of a program.`,
    ],
    corAnswer: 0,
    topic: "basics",
  },
  {
    question: `How do you reference variables and other keywords / values inside a template literal?`,
    answers: [
      `By using [ ] around the variable or keyword name.`,
      `By using $ {} around the variable or keyword name.`,
      `By using a prefix like '@' followed by the variable name or keyword.`,
    ],
    corAnswer: 1,
    topic: "basics",
  },
  {
    question: `What is strict mode in JavaScript?`,
    answers: [
      `Strict mode is a way to relax JavaScript's usual restrictions, allowing for more flexible coding practices.`,
      `Strict mode enhances performance by optimizing how JavaScript functions are interpreted and executed.`,
      `Strict mode allows you to write more secure code, and has the parser check for errors quicker, allowing to catch common coding mistakes.`,
    ],
    corAnswer: 2,
    topic: "basics",
  },
  {
    question: `How do you ensure strict mode is enabled?`,
    answers: [
      `By placing 'use strict' in the start of your JS document.`,
      `By placing 'use strict' in the head of the HTML file.`,
      `By placing 'enable strict mode' in the start of your JS document.`,
    ],
    corAnswer: 0,
    topic: "basics",
  },
  // TODO:------------------------------------------------- BASIC JS: Variables
  {
    question: `What is a value?`,
    answers: [
      `A piece of data, which is categorized in different datatypes.`,
      `A value is a variable that can store multiple data types simultaneously.`,
      `A value is a keyword used to define the structure of a JavaScript object.`,
    ],
    corAnswer: 0,
    topic: "variables",
  },
  {
    question: `What is a variable?`,
    answers: [
      `A variable is a function that performs a specific task.`,
      `A variable stores data, which then can be used, manipulated or referenced later on.`,
      `A variable is a reserved keyword that triggers an event.`,
    ],
    corAnswer: 1,
    topic: "variables",
  },
  {
    question: `What is declaring a variable, and what is assigning a variable?`,
    answers: [
      `Declaring is naming a variable, and with that announcing that there is a variable, and assigning is when you give the variable a value.`,
      `Declaring is giving a variable a value, and with that specifying its type, and assigning is when you rename the variable`,
      `Declaring is initializing a variable with a specific value, and assigning is when you change the value of the variable later in the code.`,
    ],
    corAnswer: 0,
    topic: "variables",
  },
  {
    question: `How should you write variables and functions that will consist of more than two words?`,
    answers: [
      `Use camelCase.`,
      `Use a dash in between words.`,
      `Use a underscore in between words.`,
    ],
    corAnswer: 0,
    topic: "variables",
  },
  {
    question: `What can't variables and functions start with?`,
    answers: [
      `Nummbers.`,
      `Special characters.`,
      `Numbers and special characters.`,
    ],
    corAnswer: 2,
    topic: "variables",
  },
  {
    question: `What characters can variable and function names consist of?`,
    answers: [
      `Letters, numbers and special characters.`,
      `Letters, numbers, uncerscores and $.`,
      `Letters, numbers, dashes and @.`,
    ],
    corAnswer: 1,
    topic: "variables",
  },
  {
    question: `What is important while choosing a variable name?`,
    answers: [
      `It has to be as short as possible.`,
      `It has to be as descriptive as possible.`,
      `It doesn't matter as long as it makes sense to you.`,
    ],
    corAnswer: 1,
    topic: "variables",
  },
  {
    question: `What words should not be used when naming a variable?`,
    answers: [
      `Preserved keywords, like if/else/function/var etc.`,
      `Words that contain numbers.`,
      `Words with more than five letters.`,
    ],
    corAnswer: 0,
    topic: "variables",
  },
  // TODO: ------------------------------------------------- BASIC JS: DATATYPES
  {
    question: `What are primitive datatypes?`,
    answers: [
      `The types of values in JavaScript, that are determined by their own characteristics and use.`,
      `Objects that can contain multiple values and properties.`,
      `Data structures like arrays and linked lists used to store collections of data.`,
    ],
    corAnswer: 0,
    topic: "datatypes",
  },
  {
    question: `What are the main primitive datatypes?`,
    answers: [
      `Functions, variables, loops, iterations.`,
      `Strings, numbers, operators, expressions, Null.`,
      `Strings, numbers, booleans, undefined, Null.`,
    ],
    corAnswer: 2,
    topic: "datatypes",
  },
  {
    question: `What values can booleans give you?`,
    answers: [
      `True or false.`,
      `String values such as "yes" and "no".`,
      `Any numerical value between 0 and 1.`,
    ],
    corAnswer: 0,
    topic: "datatypes",
  },
  {
    question: `What does the datatype 'undefined' mean?`,
    answers: [
      `A variable has been declared but not yet assigned.`,
      `A variable has been named but not yet been declared.`,
      `A variable has been declared and assigned a value of null.`,
    ],
    corAnswer: 0,
    topic: "datatypes",
  },
  {
    question: `What does the datatype 'Null' mean?`,
    answers: [
      `The same as undefined, but used in the older versions of JavaScript.`,
      `Intentionally assigning no value to a variable.`,
      `Indicates that a variable is currently storing the value of zero.`,
    ],
    corAnswer: 1,
    topic: "datatypes",
  },
  {
    question: `What is dynamic typing?`,
    answers: [
      `The ability to change the type of a variable based on its name.`,
      `That variables must be explicitly declared with their type before being used.`,
      `JavaScript determines the datatype of a variable without you having to explicitly define it.`,
    ],
    corAnswer: 2,
    topic: "datatypes",
  },
  {
    question: `What is type conversion?`,
    answers: [
      `Changing the value of a variable without changing it's datatype.`,
      `Converting a function into an object.`,
      `Manually converting one datatype to another.`,
    ],
    corAnswer: 2,
    topic: "datatypes",
  },
  {
    question: `What is type coercion?`,
    answers: [
      `Manually converting one datatype to another.`,
      `The automatic or implicit conversion of values from one datatype to another.`,
      `Changing the scope of a variable within a function.`,
    ],
    corAnswer: 1,
    topic: "datatypes",
  },
  {
    question: `What are falsy values?`,
    answers: [
      `Datatypes that can only be used in conditional statements.`,
      `Special variables that store error messages when a program fails.`,
      `Values that return false in a boolean context.`,
    ],
    corAnswer: 2,
    topic: "datatypes",
  },
  {
    question: `Which answer displays all five falsy values?`,
    answers: [
      `0, false, empty array, Null, NaN.`,
      `0, empty string, undefined, Null, NaN.`,
      `-1, empty string, undefined, Null, empty array.`,
    ],
    corAnswer: 1,
    topic: "datatypes",
  },
  // TODO: ------------------------------------------------- BASIC JS: OPERATORS
  {
    question: `What are operators?`,
    answers: [
      `Functions that perform calculations and return a result.`,
      `Symbols or keywords that enable the transformation or combination of values and variables.`,
      `Keywords used to define the structure of a function or method.`,
    ],
    corAnswer: 1,
    topic: "operators",
  },
  {
    question: `What are arithmetic operators?`,
    answers: [
      `Operators that are used to compare two values and return a boolean result.`,
      `Operators that make mathematical calculations.`,
      `Operators that are special characters used to concatenate strings together.`,
    ],
    corAnswer: 1,
    topic: "operators",
  },
  {
    question: `What does the ** operator do?`,
    answers: [
      `It's used to increment a value by one.`,
      `It's used to convert a number into a string format.`,
      `It's used to multiply the operant to the left to the power of the operant to the right.`,
    ],
    corAnswer: 2,
    topic: "operators",
  },
  {
    question: `What does the % operator do?`,
    answers: [
      `It's used to calculate the remaining value after dividing the left operant with the right operant.`,
      `It's used to calculates the percentage of a number.`,
      `It's used to divides two numbers and returns the quotient.`,
    ],
    corAnswer: 0,
    topic: "operators",
  },
  {
    question: `What are assignment operators used for?`,
    answers: [
      `Used for defining new functions or methods.`,
      `Used for assigning values to variables.`,
      `Used for comparing two values for equality.`,
    ],
    corAnswer: 1,
    topic: "operators",
  },
  {
    question: `What are the += and -= operators used for?`,
    answers: [
      `They are used to add or subtract the value to the right of the variable to/from the variable.`,
      `They are used to swap the values of two variables.`,
      `They are used to compare two values and return true or false.`,
    ],
    corAnswer: 0,
    topic: "operators",
  },
  {
    question: `What are comparison operators used for?`,
    answers: [
      `They are used to combine multiple strings into one.`,
      `They are used to perform mathematical calculations on numbers.`,
      `They are used to compare two values and return true or false.`,
    ],
    corAnswer: 2,
    topic: "operators",
  },
  {
    question: `What are equidity operators?`,
    answers: [
      `Equality operators are used to see if two values are the same or not.`,
      `Equality operators are used to assign values to variables based on their type.`,
      `Equality operators are used to check if two variables are of the same data type.`,
    ],
    corAnswer: 0,
    topic: "operators",
  },
  {
    question: `What is an and (&&) operator?`,
    answers: [
      `The && operator is a comparison operator that checks if two values are equal and returns true if they are.`,
      `The && operator is a logical operator that returns true if both values on each side of the operator are true.`,
      `The && operator is a logical operator that returns true if the last value, or the value on the right of the && operator is true.`,
    ],
    corAnswer: 1,
    topic: "operators",
  },
  {
    question: `What is an or (||) operator?`,
    answers: [
      `The || operator is a logical operator that returns true if one of the values on each side of the operator is true.`,
      `The || operator is a logical operator that returns true if both of the values on each side of the operator is true.`,
      `The || operator is a logical operator that returns false if one of the values on each side of the operator is true.`,
    ],
    corAnswer: 0,
    topic: "operators",
  },
  {
    question: `What is a unary operator?`,
    answers: [
      `Operators that only act on one datatype.`,
      `Operators that only act on one operant.`,
      `Operators that only act on numbers.`,
    ],
    corAnswer: 1,
    topic: "operators",
  },
  {
    question: `What is a not (!) operator?`,
    answers: [
      `A ! operator is a unary operator that is used to compare two boolean values and return true if they are different`,
      `A ! operator is a unary operator that is used to negate (or reverse) a boolean value.`,
      `A ! operator is a unary operator that is used to perform arithmetic operations on numerical values.`,
    ],
    corAnswer: 1,
    topic: "operators",
  },
  // TODO: ------------------------------------------------- BASIC JS: Statements and expressions
  {
    question: `What is an expression?`,
    answers: [
      `An expression is a value, or anything that leads to a value.`,
      `An expression is a boolean, or anything that leads to a boolean.`,
      `An expression is a statement, or anything that leads to a statement.`,
    ],
    corAnswer: 0,
    topic: "stateEx",
  },
  {
    question: `Which ones of the following answer is an expression?`,
    answers: [
      `function greet () {console.log('hi')}`,
      `if (1 > 2) {console.log('impossible')}`,
      `let birthYear = 1996`,
    ],
    corAnswer: 2,
    topic: "stateEx",
  },
  {
    question: `What is a statement?`,
    answers: [
      `A statement is a line of code that defines a variable.`,
      `A statement is a line of code that performs an action.`,
      `A statement is a collection of functions that perform a specific task.`,
    ],
    corAnswer: 1,
    topic: "stateEx",
  },
  {
    question: `What are if / else statements?`,
    answers: [
      `Control structures that check if a statement is true of false, and carry out actions depending on the outcome.`,
      `They are loops that execute a block of code repeatedly until a condition is met.`,
      `They are functions that performs different tasks based on user input.`,
    ],
    corAnswer: 0,
    topic: "stateEx",
  },
  {
    question: `What is a switch statement?`,
    answers: [
      `A switch statement in JavaScript is a type of loop that iterates through an array and executes different operations on each element based on its value.`,
      `A switch statement in JavaScript is a built-in function used to manipulate arrays based on specified criteria, executing different code blocks for each array element.`,
      `A switch statement in JavaScript is a control structure used to evaluate an expression against multiple possible case values, executing code blocks based on matching cases.`,
    ],
    corAnswer: 2,
    topic: "stateEx",
  },
  {
    question: `How do you seperate each condition or case of a switch statement?`,
    answers: [`By using a ';'`, `By using a ','`, `By using a 'break;'`],
    corAnswer: 2,
    topic: "stateEx",
  },
  {
    question: `How do you start a switch statement?`,
    answers: [`switch {}`, `switch (variable) {}`, `switch [array] {}`],
    corAnswer: 1,
    topic: "stateEx",
  },
  {
    question: `When should you use a switch statement?`,
    answers: [
      `A switch statement should be used when the condition to execute the desired blocks of code consists of a single specific value, rather than ranges or complex conditions involving multiple values.`,
      `A switch statement is ideal when you need to execute code based on a range of conditions or complex scenarios involving multiple variables.`,
      `Use a switch statement when you want to streamline code execution for a wide range of input values, regardless of their specificity or uniqueness.`,
    ],
    corAnswer: 0,
    topic: "stateEx",
  },
  {
    question: `What is a ternary (conditional) operator?`,
    answers: [
      `A ternary operator is a function that takes three arguments and returns one result.`,
      `A ternary operator is like a short version of an if/else statement, for simple and short conditional statements.`,
      `A ternary operator is a mathematical operator used to perform operations on three variables simultaneously.`,
    ],
    corAnswer: 1,
    topic: "stateEx",
  },
  {
    question: `What is the correct way of writing a ternary operator?`,
    answers: [
      `a > b ? console.log('A is bigger.') -> console.log('B is bigger.')`,
      `if (a > b) ? console.log('A is bigger.') : console.log('B is bigger.')`,
      `a > b ? console.log('A is bigger.') : console.log('B is bigger.')`,
    ],
    corAnswer: 2,
    topic: "stateEx",
  },
  {
    question: `Which statement about ternary operators is true?`,
    answers: [
      `A ternary operator is used to define functions because it handles multiple inputs.`,
      `A ternary operator is also an expression because it always returns a value.`,
      `A ternary operator is also a statement because it can execute multiple lines of code.`,
    ],
    corAnswer: 1,
    topic: "stateEx",
  },
  // TODO: ------------------------------------------------- BASIC JS: Functions
  {
    question: `What is a function?`,
    answers: [
      `A function in JavaScript is a block of reusable code designed to perform a specific task when called or invoked.`,
      `A function in JavaScript is a piece of text that describes what a specific task does when called or invoked.`,
      `A function in JavaScript is a single line of code that performs a specific task when called or invoked.`,
    ],
    corAnswer: 0,
    topic: "functions",
  },
  {
    question: `What are the function parameters used for?`,
    answers: [
      `Function parameters allow a function to accept one or more inputs when it is called. These inputs can then be used within the function to perform various actions or calculations.`,
      `Function parameters determine the return type of a function and ensure that the function returns the correct data type after execution.`,
      `Function parameters define the scope of a function, specifying which parts of the code can access the function and which cannot.`,
    ],
    corAnswer: 0,
    topic: "functions",
  },
  {
    question: `What is the content between the function parentheses called when declaring a function?`,
    answers: [`Arguments`, `Parameters`, `Expressions`],
    corAnswer: 1,
    topic: "functions",
  },
  {
    question: `What is the content between the function parentheses called when calling a function?`,
    answers: [`Arguments`, `Parameters`, `Expressions`],
    corAnswer: 0,
    topic: "functions",
  },
  {
    question: `What is a function expression?`,
    answers: [
      `A function expression in JavaScript is a function that is defined without any parameters and must always be invoked immediately.`,
      `A function expression in JavaScript is a function that is automatically executed and cannot be reused elsewhere in the code.`,
      `A function expression in JavaScript is a function assigned to a variable that always returns a value and can be used only after it is defined.`,
    ],
    corAnswer: 2,
    topic: "functions",
  },
  {
    question: `How do you write down a function expression?`,
    answers: [
      `const funcExp = function () {console.log('This is a function expression.')}`,
      `const funcExp = () => {console.log('This is a function expression.')}`,
      `function funcExp() {console.log('This is a function expression.')}`,
    ],
    corAnswer: 0,
    topic: "functions",
  },
  {
    question: `What is a function declaration?`,
    answers: [
      `A function declaration is an anonymous function. It can only be called after the actual declaration and does not support hoisting. The function always returns undefined.`,
      `A function declaration is a named function. It can be called before the actual declaration due to hoisting. The function only returns a value when explicitly specified.`,
      `A function declaration is a named function. It can be called only once in the program and does not utilize hoisting. The function implicitly returns the name of the function.`,
    ],
    corAnswer: 1,
    topic: "functions",
  },
  {
    question: `How do you write down a function declaration?`,
    answers: [
      `const funcDec = function () {console.log('This is a function declaration.')}`,
      `function funcDec () {console.log('This is a function declaration.')}`,
      `function => funcDec () {console.log('This is a function declaration.')}`,
    ],
    corAnswer: 1,
    topic: "functions",
  },
  {
    question: `What is an arrow function?`,
    answers: [
      `An arrow function is a JavaScript feature that cannot access variables outside of its own scope. They are primarily used for asynchronous operations and event handling.`,
      `An arrow function is a type of function that cannot be used with object methods or as constructors. They are limited to basic mathematical operations and simple value returns.`,
      `An arrow function is a function type that is especially useful for short one line functions. They are easier to write than function expressions or declarations, with less syntax.`,
    ],
    corAnswer: 2,
    topic: "functions",
  },
  {
    question: `How do you write down an arrow function with a single parameter?`,
    answers: [
      `const arFunc = x => x * x`,
      `const arFunc = (x) => x * x`,
      `const arFunc(x) => x * x`,
    ],
    corAnswer: 0,
    topic: "functions",
  },
  {
    question: `How do you write an arrow function with multiple parameters?`,
    answers: [
      `const arFunc = x, y => x * y`,
      `const arFunc = (x, y) => x * y`,
      `const arFunc(x, y) => x * y`,
    ],
    corAnswer: 1,
    topic: "functions",
  },
  {
    question: `When should you use braces in an arrow function and when can you omit them?`,
    answers: [
      `You always have to use braces in an arrow function.`,
      `You can omit them when the function body consists of multiple lines of code.`,
      `You can omit them when the function body only consists of one line of code.`,
    ],
    corAnswer: 2,
    topic: "functions",
  },
  {
    question: `How do you declare an arrow function without any input?`,
    answers: [
      `You can't use arrow functions without any input.`,
      `You declare it by using empty parentheses as parameter.`,
      `You declare it by skipping the parameters entirely.`,
    ],
    corAnswer: 1,
    topic: "functions",
  },
  {
    question: `What are methods?`,
    answers: [
      `Methods are built in functions that perform operations on different types of objects.`,
      `Methods are built in functions that perform operations on variables.`,
      `Methods are built in functions that perform operations on arrays.`,
    ],
    corAnswer: 0,
    topic: "functions",
  },
  // TODO: ------------------------------------------------- BASIC JS: arrays and objects
  {
    question: `What are data structures?.`,
    answers: [
      `Data structures are ways of storing and organizing data.`,
      `Data structures are methods used to represent images and videos.`,
      `Data structures are algorithms used for processing data efficiently.`,
    ],
    corAnswer: 0,
    topic: "arrObjects",
  },
  {
    question: `What is an array?`,
    answers: [
      `An array is a type of variable used to hold various data types together, enabling them to be manipulated collectively when required.`,
      `An array is a data structure that acts like a container for storing multiple variables of the same type, which can be accessed by their unique identifiers.`,
      `An array is a datas tructure that act like a variable that can store multiple pieces of data, which then later can be used or referenced when needed.`,
    ],
    corAnswer: 2,
    topic: "arrObjects",
  },
  {
    question: `Where does an array start to count? Which number is the first item of an array?`,
    answers: [
      `An array starts to count at 1.`,
      `An array starts to count at 2.`,
      `An array starts to count at 0.`,
    ],
    corAnswer: 2,
    topic: "arrObjects",
  },
  {
    question: `How do you call, or refer to an array item?`,
    answers: [`array[0]`, `array = 0`, `array(0)`],
    corAnswer: 0,
    topic: "arrObjects",
  },
  {
    question: `How do you check how many items an array has?`,
    answers: [`array.number()`, `array.length`, `array.count`],
    corAnswer: 1,
    topic: "arrObjects",
  },
  {
    question: `How do you mutate or change a specific array item?`,
    answers: [
      `array[0].mutate(new value)`,
      `array[0] = new value`,
      `array[0].push(new value)`,
    ],
    corAnswer: 1,
    topic: "arrObjects",
  },
  {
    question: `How do you add a new array item to the end of an array?`,
    answers: [`array.push()`, `array.unshift()`, `array.shift()`],
    corAnswer: 0,
    topic: "arrObjects",
  },
  {
    question: `How do you add a new array item to the start of an array?`,
    answers: [`array.push()`, `array.unshift()`, `array.shift()`],
    corAnswer: 1,
    topic: "arrObjects",
  },
  {
    question: `How do you remove the last array item?`,
    answers: [`array.shift()`, `array.pop()`, `array.unshift()`],
    corAnswer: 1,
    topic: "arrObjects",
  },
  {
    question: `How do you remove the first array item?`,
    answers: [`array.shift()`, `array.pop()`, `array.unshift()`],
    corAnswer: 0,
    topic: "arrObjects",
  },
  {
    question: `What value do array.pop() and array.shift() return?`,
    answers: [
      `A boolean.`,
      `The added array items.`,
      `The removed array items.`,
    ],
    corAnswer: 2,
    topic: "arrObjects",
  },
  {
    question: `How do you check the position of an array item?`,
    answers: [
      `array.unshift(item)`,
      `array.includes(item)`,
      `array.indexOf(item)`,
    ],
    corAnswer: 2,
    topic: "arrObjects",
  },
  {
    question: `How do you check if an array includes a specific item?`,
    answers: [
      `array.unshift(item)`,
      `array.includes(item)`,
      `array.indexOf(item)`,
    ],
    corAnswer: 1,
    topic: "arrObjects",
  },
  {
    question: `What are objects?`,
    answers: [
      `Objects are sets of functions grouped together, which can be called and executed as needed.`,
      `Objects are arrays of strings and numbers grouped together, which can be sorted and filtered as needed.`,
      `Objects are key-value pairs logically grouped together, which can be referenced and manipulated as needed.`,
    ],
    corAnswer: 2,
    topic: "arrObjects",
  },
  {
    question: `What are the two ways to get to object property values?`,
    answers: [
      `Dot notations and bracket notations.`,
      `Object callbacks and object loops.`,
      `Object methods and object variables.`,
    ],
    corAnswer: 0,
    topic: "arrObjects",
  },
  {
    question: `How do you write an object dot notation?`,
    answers: [`.objectProperty`, `object.property`, `obj.property`],
    corAnswer: 1,
    topic: "arrObjects",
  },
  {
    question: `How do you write an object bracket notation?`,
    answers: [`[object.property]`, `["object.property"]`, `object["property"]`],
    corAnswer: 2,
    topic: "arrObjects",
  },
  {
    question: `How can you store a function as an object property value pair?`,
    answers: [
      `property : function (parameters) {}`,
      `property = function (parameters) {}`,
      `const property = function (parameters) {}`,
    ],
    corAnswer: 0,
    topic: "arrObjects",
  },
  {
    question: `How do you call a function that's inside of an object?`,
    answers: [
      `property["funcName"]()`,
      `property.funcName()`,
      `property.funcName() and property["funcName"]()`,
    ],
    corAnswer: 2,
    topic: "arrObjects",
  },
  {
    question: `What does the 'this' keyword generally reference to?`,
    answers: [
      `The this keyword generally references to the object from which a function is called or the object that owns the method.`,
      `The this keyword generally references to the global object, regardless of the function call context.`,
      `The this keyword generally references to the parent object of the current scope.`,
    ],
    corAnswer: 0,
    topic: "arrObjects",
  },
  // TODO: ------------------------------------------------- BASIC JS: loops
  {
    question: `What are loops used for?`,
    answers: [
      `Loops are used to repeat functions a certain amount of time.`,
      `Loops are used to execute blocks of code a certain amount of time, to reduce repetitive code writing.`,
      `Loops are used to look through arrays and show their array items.`,
    ],
    corAnswer: 1,
    topic: "loops",
  },
  {
    question: `What is a loop iteration?`,
    answers: [
      `A loop iteration is a full loop cycle, so one single execution cycle of the block of code inside of the loop.`,
      `A loop iteration is a type of loop that will keep executing for a set amount of cycles.`,
      `A loop iteration is a type of loop that will keep execution while a certain condition is true.`,
    ],
    corAnswer: 0,
    topic: "loops",
  },
  {
    question: `What is a for loop?`,
    answers: [
      `A for loop is a type of loop that can only be used for arrays.`,
      `A for loop is a type of loop that will keep executing for a set amount of cycles.`,
      `A for loop is a type of loop that will keep execution while a certain condition is true.`,
    ],
    corAnswer: 1,
    topic: "loops",
  },
  {
    question: `What is a while loop?`,
    answers: [
      `A for loop is a type of loop that can only be used for arrays.`,
      `A for loop is a type of loop that will keep executing for a set amount of cycles.`,
      `A for loop is a type of loop that will keep execution while a certain condition is true.`,
    ],
    corAnswer: 2,
    topic: "loops",
  },
  {
    question: `How do you write down a for loop?`,
    answers: [
      `for (i < 11) {}`,
      `for (let i = 0; i < 11; i++) {}`,
      `for (let i = 0; i++) {}`,
    ],
    corAnswer: 1,
    topic: "loops",
  },
  {
    question: `How do you write down a while loop?`,
    answers: [
      `while (i < 10) {}`,
      `while (i = 0; i < 10; i++) {}`,
      `while i < 20 () {}`,
    ],
    corAnswer: 0,
    topic: "loops",
  },
  {
    question: `Which statement about for loops is true?`,
    answers: [
      `A for loop consists out of three parts: A counter variable that sets a starting counter value, a condition which determines how long it should iterate, and a counter increment or decrement`,
      `A for loop consists out of only one part: A condition which has to be true for the loop to continue iterating.`,
      `A for loop consists out of two parts: A counter variable that sets a starting counter value, and a condition concerning the starting value which has to be true for the loop to continue iteratring.`,
    ],
    corAnswer: 0,
    topic: "loops",
  },
  {
    question: `which statement about while loops is true?`,
    answers: [
      `A while loop consists out of three parts: A counter variable that sets a starting counter value, a condition which determines how long it should iterate, and a counter increment or decrement`,
      `A while loop consists out of only one part: A condition which has to be true for the loop to continue iterating.`,
      `A while loop consists out of two parts: A counter variable that sets a starting counter value, and a condition concerning the starting value which has to be true for the loop to continue iteratring.`,
    ],
    corAnswer: 2,
    topic: "loops",
  },
  {
    question: `What is a loop continue statement? if (condition) continue`,
    answers: [
      `A loop continue statement terminates the loop immediately and does not proceed to the next iteration.`,
      `A loop continue statement skips the current iteration and continues on the next iteration, if the condition of the continue statement is true.`,
      `A loop continue statement repeats the current iteration indefinitely until the loop condition becomes false.`,
    ],
    corAnswer: 1,
    topic: "loops",
  },
  {
    question: `What is a loop break statement? if (condition) break`,
    answers: [
      `A loop break statement terminates the loop immediately and does not proceed to the next iteration if the break statement is true.`,
      `A loop break statement skips the current iteration and continues on the next iteration, if the condition of the break statement is true.`,
      `A loop break statement repeats the current iteration indefinitely until the loop condition becomes false.`,
    ],
    corAnswer: 0,
    topic: "loops",
  },
  // TODO: ------------------------------------------------- BASIC JS: DOM manipulation
  {
    question: `What does DOM stand for?`,
    answers: [
      `DOM stands for Document Object Manipulation, a scripting technique used to style HTML and CSS documents dynamically, enhancing user interface responsiveness.`,
      `DOM stands for Document Object Module which is a markup language that helps organize HTML and CSS documents, enabling efficient data binding for web applications.`,
      `DOM stands for Document Object Model which is a programming interface which allows you to manipulate HTML and CSS documents, to create interactive web designs.`,
    ],
    corAnswer: 2,
    topic: "DOM",
  },
  {
    question: `Which method do you use to select a class / element / ID for DOM manipulation?`,
    answers: [
      `document.classList`,
      `document.classList.add`,
      `document.querySelector`,
    ],
    corAnswer: 2,
    topic: "DOM",
  },
  {
    question: `How do you select the text of a certain class / element / ID using DOM manipulation?`,
    answers: [
      `document.querySelector('.class').value`,
      `document.querySelector('.class').textContent`,
      `document.querySelector('.class').attributes`,
    ],
    corAnswer: 1,
    topic: "DOM",
  },
  {
    question: `What is an API and what does it do?`,
    answers: [
      `API stands for Automative Programming Interval. It's a security system that makes sure the DOM manipulation happens safely.`,
      `API stands for Application Programming Interface. They are programming libraries which can be accessed in your JS code.`,
      `API stands for Application Production Interface. It's a way to write cleaner code with the help of web extentions.`,
    ],
    corAnswer: 1,
    topic: "DOM",
  },
  {
    question: `How can you get or set the value of form elements?`,
    answers: [
      `document.querySelector('.class').value`,
      `document.querySelector('.class').textContent`,
      `document.querySelector('.class').attributes`,
    ],
    corAnswer: 0,
    topic: "DOM",
  },
  {
    question: `What is an event listener and what does it do?`,
    answers: [
      `An event listener is a property of an element that stores all the events that have occurred on that element since the page was loaded.`,
      `An event listener is a function that looks for a certain event to happen, on a specified element, where you can then specify how you want it to act on the event.`,
      `An event listener is a method that automatically changes the style of an element based on predefined criteria without needing user interaction.`,
    ],
    corAnswer: 1,
    topic: "DOM",
  },
  {
    question: `How do you place an event listener?`,
    answers: [
      `document.querySelector('element').eventListener('click', function() {})`,
      `document.querySelector('element').addEventListener('click', function() {})`,
      `document.querySelector('element').addListener('click', function() {})`,
    ],
    corAnswer: 1,
    topic: "DOM",
  },
  {
    question: `How do you add an external function to an event listener?`,
    answers: [
      `You pass the external function name where you would normally write the nameless function.`,
      `You include the external function inside the event listener as a string.`,
      `You call the external function directly within the event listener declaration.`,
    ],
    corAnswer: 0,
    topic: "DOM",
  },
  {
    question: `How do you get or set the CSS styles using DOM manipulation?`,
    answers: [
      `document.querySelector('#id').styleSheet.propertyName`,
      `document.querySelector('#id').css.property-name`,
      `document.querySelector('#id').style.propertyName`,
    ],
    corAnswer: 2,
    topic: "DOM",
  },
  {
    question: `How do you select all elements or classes with the same name using DOM manipulation?`,
    answers: [
      `document.querySelectorAll`,
      `document.queryAll`,
      `document.selectAll`,
    ],
    corAnswer: 0,
    topic: "DOM",
  },
  {
    question: `What does document.querySelectorAll share characteristics with in terms of storing and accessing the selected elements or classes?`,
    answers: [`Arrays.`, `Objects.`, `Functions.`],
    corAnswer: 0,
    topic: "DOM",
  },
  {
    question: `What do the .classList.add and .classList.remove properties do?`,
    answers: [
      `They can add or remove classes and elements.`,
      `They can add or remove classes, ID's and elements.`,
      `They can add or remove classes.`,
    ],
    corAnswer: 2,
    topic: "DOM",
  },
  {
    question: `How do you check if an element has a specific class?`,
    answers: [
      `document.querySelector('element').classlist.contains`,
      `document.querySelector('element').classlist.includes`,
      `document.querySelector('element').classlist.has`,
    ],
    corAnswer: 0,
    topic: "DOM",
  },
  {
    question: `What is an alternative way to select an element ID using DOM manipulation?`,
    answers: [
      `document.querySelector('idName').getId`,
      `document.getElementById('idName')`,
      `document.getID('idName')`,
    ],
    corAnswer: 1,
    topic: "DOM",
  },
  {
    question: `How do you get or set a source attribute using DOM manipulation?`,
    answers: [
      `document.querySelector('element').getSource`,
      `document.querySelector('element').src`,
      `document.querySelector('element').source`,
    ],
    corAnswer: 1,
    topic: "DOM",
  },
  {
    question: `How do you add a class to an element that is not present, and remove a class that is present?`,
    answers: [
      `document.querySelector('element').classlist.contains('class')`,
      `document.querySelector('element').classlist.add('class')`,
      `document.querySelector('element').classlist.toggle('class')`,
    ],
    corAnswer: 2,
    topic: "DOM",
  },
  // TODO: ------------------------------------------------- BASIC JS: behindTheScenes
  {
    question: `What are the programming language levels?`,
    answers: [
      `Descriptions of various stages of software development from planning to deployment.`,
      `Indications which determine how much you need to manually involve system hardware in your code.`,
      `Classifications that specify the speed and efficiency of different programming languages.`,
    ],
    corAnswer: 1,
    topic: "behindTheScenes",
  },
  {
    question: `What does garbage collection do?`,
    answers: [
      `Makes sure you don't have to manually manage the system memory, by automatically removing old and unused objects from the computer memory.`,
      `Makes sure you don't have to manually manage the system memory, by organizing files on the hard drive for faster access.`,
      `Makes sure you don't have to manually manage the system memory, by compressing data to save storage space.`,
    ],
    corAnswer: 0,
    topic: "behindTheScenes",
  },
  {
    question: `What is a paradigm in the context of programming?`,
    answers: [
      `A specific coding language used for developing software.`,
      `An approach or overall mindset to structuring code.`,
      `A tool used for debugging and testing code.`,
    ],
    corAnswer: 1,
    topic: "behindTheScenes",
  },
  {
    question: `What is a concurrency model?`,
    answers: [
      `The concurrency model determines how the JavaScript engine handles multiple tasks at once.`,
      `The concurrency model defines the sequence in which JavaScript files are loaded into the browser.`,
      `The concurrency model specifies the rules for how JavaScript interacts with the Document Object Model (DOM).`,
    ],
    corAnswer: 0,
    topic: "behindTheScenes",
  },
  {
    question: `What is a JavaScript engine?`,
    answers: [
      `A program that compiles JavaScript into Java bytecode for execution.`,
      `A library that allows JavaScript to communicate with database servers.`,
      `A program inside of each browser that executes JavaScript.`,
    ],
    corAnswer: 2,
    topic: "behindTheScenes",
  },
  {
    question: `What are compilation and interpretation used for?`,
    answers: [
      `Converting programming code into machine code for the CPU to understand.`,
      `Optimizing code execution speed by removing comments and whitespace before running the program.`,
      `Converting high-level code directly into executable binaries without the need for an intermediate step.`,
    ],
    corAnswer: 0,
    topic: "behindTheScenes",
  },
  {
    question: `What is the difference between compilation and interpretation?`,
    answers: [
      `Compilation converts the entire source code and saves it in a file, while interpretation reads and executes the code line by line.`,
      `Interpretation converts the entire source code and saves it in a file, while compilation reads and executes the code line by line.`,
      `Compilation reads the code line by line and optimizes it, while interpretation converts the entire source code and then executes it all at once.`,
    ],
    corAnswer: 0,
    topic: "behindTheScenes",
  },
  {
    question: `What is JIT compilation?`,
    answers: [
      `JIT, or Just In Time compilation, is a mix of compiling and interpreting. The source code first gets converted line by line, then gets saved in an external file, which then gets executed.`,
      `JIT, or Just In Time compilation, is a mix of compiling and interpreting. The source code first gets converted to machine code as a whole, and then it gets executed immediately.`,
      `JIT, or Just In Time compilation, is a mix of compiling and interpreting. The source code first gets converted to machine code, which then gets saved in an external file, which then gets executed.`,
    ],
    corAnswer: 1,
    topic: "behindTheScenes",
  },
  {
    question: `What is the order of steps that the JS engine takes when reading and executing code?`,
    answers: [
      `Parsing, Optimalizing, Compiling and executing.`,
      `Compiling, Parsing, Optimalizing and executing.`,
      `Parsing, Compiling, Executing and optimalizing.`,
    ],
    corAnswer: 2,
    topic: "behindTheScenes",
  },
  {
    question: `What is an AST?`,
    answers: [
      `AST, or Abstract Syntax Tree, is the source code saved in a data structure that is set up by the JS engine during the parsing phase.`,
      `AST, or Application Server Template, is a pre-defined JavaScript library used for creating server-side applications.`,
      `AST, or Asynchronous Script Tag, is a feature in JavaScript used to load external scripts asynchronously within HTML documents.`,
    ],
    corAnswer: 0,
    topic: "behindTheScenes",
  },
  {
    question: `What is a callback que?`,
    answers: [
      `A list of callback functions that have already been executed.`,
      `A data structure containing all callback functions that are ready to be executed.`,
      `A queue that holds callbacks indefinitely without executing them.`,
    ],
    corAnswer: 1,
    topic: "behindTheScenes",
  },
  {
    question: `What is top level code in JavaScript?`,
    answers: [
      `Top level code refers to all code outside of functions.`,
      `Top level code means that you don't need to involve the system hardware manually while writing your code.`,
      `Top level code is a data structure which generated by the JS engine which gives it a simplified overview of the written code.`,
    ],
    corAnswer: 0,
    topic: "behindTheScenes",
  },
  {
    question: `What is an execution context?`,
    answers: [
      `An execution context is a specific instance of a JavaScript function that stores all the values passed to it during execution, such as parameters and local variables.`,
      `An execution context is an environment in which JS code get's executed. It stores all necessary information it needs to execute the code, like variables and function declarations.`,
      `An execution context is a JavaScript mechanism that ensures all variables and functions declared within a particular block of code are accessible globally throughout the entire script.`,
    ],
    corAnswer: 1,
    topic: "behindTheScenes",
  },
  {
    question: `What parts does an execution context consist of?`,
    answers: [
      `Variable Object, Scope Chain, 'this' Keyword.`,
      `Variable Chain, Scope Object, 'this' Keyword.`,
      `Variable Keyword, Scope Object, 'this' Chain.`,
    ],
    corAnswer: 0,
    topic: "behindTheScenes",
  },
  {
    question: `What is the variable environment?`,
    answers: [
      `A data structure that stores loops and function calls inside of execution contexts.`,
      `A data structure that stores execution contexts inside of the JS engine.`,
      `A data structure that stores variables, functions, an argument object and references to objects inside of execution contexts.`,
    ],
    corAnswer: 2,
    topic: "behindTheScenes",
  },
  {
    question: `What is an argument object?`,
    answers: [
      `An object that contains all global variables used within a function's execution context.`,
      `An object inside of an execution context which holds all arguments that are passed into the function that the execution context belongs to.`,
      `An object that stores the return values of a function after it completes execution.`,
    ],
    corAnswer: 1,
    topic: "behindTheScenes",
  },
  {
    question: `What is a scope chain?`,
    answers: [
      `A scope chain consists of references to variables that are stored outside of the function or execution context, in their written order.`,
      `A scope chain is a list of all the variables declared within a function or execution context.`,
      `A scope chain refers to the process of linking different JavaScript files together to access variables across them.`,
    ],
    corAnswer: 0,
    topic: "behindTheScenes",
  },
  {
    question: `What is the creation phase?`,
    answers: [
      `A phase that occurs after the execution phase, where the JS engine initializes variables and functions.`,
      `A phase that happens just before the execution phase, where the JS engine creates the execution context.`,
      `A phase in which the JS engine compiles the code into machine language before executing it.`,
    ],
    corAnswer: 1,
    topic: "behindTheScenes",
  },
  {
    question: `What is special about the execution context of arrow functions?`,
    answers: [
      `They always receive an argument object containing all passed parameters of the function execution context that's closest to the arrow function.`,
      `They don't get an argument object and no 'this' keyword. They use the 'this' keyword from the execution context closest to the arrow function.`,
      `They get their own 'this' keyword specific to their execution context.`,
    ],
    corAnswer: 1,
    topic: "behindTheScenes",
  },
  {
    question: `What is the call stack?`,
    answers: [
      `The call stack is a repository where JavaScript stores variables and constants during runtime, ensuring they are easily retrievable and modifiable.`,
      `The call stack is a data structure that holds all the function definitions used in a JavaScript program, ensuring they are accessible throughout the entire code execution process.`,
      `The call stack is a place where all execution contexts get stacked on top of each other to determine which execution context is currently running and in which order.`,
    ],
    corAnswer: 2,
    topic: "behindTheScenes",
  },
  {
    question: `What is the heap?`,
    answers: [
      `The heap is an unstructured memory pool, which stores all objects that an application needs.`,
      `The heap is a structured memory area that stores temporary variables and function call information.`,
      `The heap is a section of the memory dedicated to stack frames and local variables for each function.`,
    ],
    corAnswer: 0,
    topic: "behindTheScenes",
  },
  {
    question: `What is (lexical) scoping?`,
    answers: [
      `Scoping refers to the placement and accessibility of variables inside the code. JS can access variables declared in an outer scope, but it can't access variables inside of nested scopes.`,
      `Scoping refers to the process of binding functions to specific objects within the code. It allows JS to determine the methods available for objects.`,
      `Scoping refers to the way JavaScript organizes and groups different data types. It ensures that variables of the same type are processed together for efficiency.`,
    ],
    corAnswer: 0,
    topic: "behindTheScenes",
  },
  {
    question: `What is a scope?`,
    answers: [
      `A scope is the value that a variable holds at any given point in the code execution.`,
      `A scope is the space or environment that a variable is declared in, and thus where it can be accessed.`,
      `A scope is the time during which a variable is stored in memory while the program is running.`,
    ],
    corAnswer: 1,
    topic: "behindTheScenes",
  },
  {
    question: `What is the global scope?`,
    answers: [
      `The global scope is the top level code scope. It is the outer most scope, outside of functions and blocks of code. Variables declared here can be accessed everywhere.`,
      `The global scope is the innermost scope of a nested function. Variables declared here are only accessible within that function.`,
      `The global scope is a specific block of code within a function. Variables declared here can only be accessed within that block.`,
    ],
    corAnswer: 0,
    topic: "behindTheScenes",
  },
  {
    question: `What is a function scope?`,
    answers: [
      `The scope outside of a function. Variables declared inside of a function scope are accessible throughout the entire script.`,
      `The scope shared between functions. Variables declared inside of a function scope are accessible to any function within the same file.`,
      `The scope inside of a function. Variables declared inside of a function scope are only accessible within the function, or within nested functions or blocks of code.`,
    ],
    corAnswer: 2,
    topic: "behindTheScenes",
  },
  {
    question: `What is a block scope?`,
    answers: [
      `A block scope is a scope within any block of code that doesn't belong to a function. The let and const variables will only be available to the scope and the nested scopes. The var variable will be available everywhere.`,
      `A block scope is a scope that applies only to function blocks. The let and const variables will be available globally, while the var variable will be limited to the function block.`,
      `A block scope is a type of scope that is only applicable to the entire script or module. Both let and const variables are available globally, whereas the var variable is limited to the block in which it is declared.`,
    ],
    corAnswer: 0,
    topic: "behindTheScenes",
  },
  {
    question: `What is hoisting?`,
    answers: [
      `Hoisting is the process where all variables and functions are compiled at runtime, making them available throughout the entire code.`,
      `Hoisting happens in the creation phase, where some variables and functions get moved to the top of their scope, making them available before they are declared.`,
      `Hoisting is a feature that allows JavaScript to optimize code execution by preloading all variables and functions at the start of the script.`,
    ],
    corAnswer: 1,
    topic: "behindTheScenes",
  },
  {
    question: `What happens to var variables when they get hoisted?`,
    answers: [
      `They get hoisted, but they will initially be set to undefined, until the code reaches the declaration.`,
      `They get hoisted and retain their initial value, so they can be used before their declaration without issues.`,
      `They get hoisted, but they will initially be set to uninitialized, until the code reaches the declaration.`,
    ],
    corAnswer: 0,
    topic: "behindTheScenes",
  },
  {
    question: `What happens to let and const variables when they get hoisted?`,
    answers: [
      `They get hoisted, but they will initially be set to undefined, until the code reaches the declaration.`,
      `They get hoisted and retain their initial value, so they can be used before their declaration without issues.`,
      `They get hoisted, but they will initially be set to uninitialized, until the code reaches the declaration.`,
    ],
    corAnswer: 2,
    topic: "behindTheScenes",
  },
  {
    question: `What is the Temporal Dead Zone? (TDZ)`,
    answers: [
      `The space before a let or const variable is declared.`,
      `The space bofore a var variable is declared.`,
      `The space after a let or const variable is declared.`,
    ],
    corAnswer: 0,
    topic: "behindTheScenes",
  },
  {
    question: `What is some potentially unexpected behavior that can happen with var variable hoisting?`,
    answers: [
      `When referencing a var variable before it's declared, it throws a ReferenceError, indicating that the variable is not defined yet. This error can disrupt the execution of the code, especially in cases where the variable is used in functions or loops.`,
      `When referencing a var variable before it's declared, it initializes the variable with a default value of null. This can lead to unexpected behavior in calculations or operations where null is treated differently from other values like numbers or strings.`,
      `When referencing a var variable before it's declared, it gets the value of undefined assigned. This is a falsy value, which  can cause unexpected behavior in for example conditional statements, if the variable is being accessed before it's declaration.`,
    ],
    corAnswer: 2,
    topic: "behindTheScenes",
  },
  {
    question: `What is the 'this' keyword?`,
    answers: [
      ` It's a reference keyword to the current object calling the 'this' keyword. In the top level code it will reference to the global object, and in a function it will reference that function.`,
      `It's a special keyword used to define the default value for uninitialized variables. In a method, it will always refer to the object that the method belongs to.`,
      `It's a keyword that sets a reference to the first parameter of a function. In an object method, it will reference the method's name, not the object itself.`,
    ],
    corAnswer: 0,
    topic: "behindTheScenes",
  },
  {
    question: `What is method borrowing?`,
    answers: [
      `Changing the prototype of an object to include methods from another object: Object.setPrototypeOf(object2, object1.prototype)`,
      `Copying an object function to another object: object2.functionName = object1.functionName`,
      `Assigning an objects properties to another object using the spread operator: object2 = { ...object1 }`,
    ],
    corAnswer: 1,
    topic: "behindTheScenes",
  },
  {
    question: `What are reference types?`,
    answers: [
      `Reference types, such as strings and numbers, store direct values rather than references to data locations.`,
      `Reference types, such as functions and variables, always store data in the global memory, regardless of scope.`,
      `Reference types, such as objects and arrays, store references to the location that data is kept, rather than storing the data itself.`,
    ],
    corAnswer: 2,
    topic: "behindTheScenes",
  },
  // TODO: ------------------------------------------------- BASIC JS: dataStructures
];

// Add an event listener for the hamburger button
hamburgerButton.addEventListener("click", function () {
  offScreenMenu.classList.toggle("active");
});

// Array holding all the arrays in order for later referencing WOW INCEPTION
const topics = [
  questions,
  basicsQuest,
  variablesQuest,
  datatypesQuest,
  operatorsQuest,
  stateExQuest,
  functionsQuest,
  arrObjectsQuest,
  loopsQuest,
  domQuest,
  behindTheScenesQuest,
];

// Loop that pushes all questions in their topic's array
for (let i = 0; i < questions.length; i++) {
  if (questions[i].topic === "basics") {
    basicsQuest.push(questions[i]);
  } else if (questions[i].topic === "variables") {
    variablesQuest.push(questions[i]);
  } else if (questions[i].topic === "datatypes") {
    datatypesQuest.push(questions[i]);
  } else if (questions[i].topic === "operators") {
    operatorsQuest.push(questions[i]);
  } else if (questions[i].topic === "stateEx") {
    stateExQuest.push(questions[i]);
  } else if (questions[i].topic === "functions") {
    functionsQuest.push(questions[i]);
  } else if (questions[i].topic === "arrObjects") {
    arrObjectsQuest.push(questions[i]);
  } else if (questions[i].topic === "loops") {
    loopsQuest.push(questions[i]);
  } else if (questions[i].topic === "DOM") {
    domQuest.push(questions[i]);
  } else if (questions[i].topic === "behindTheScenes") {
    behindTheScenesQuest.push(questions[i]);
  } else {
    continue;
  }
}

// Just to keep track of how many questions I have
console.log("Total questions", questions.length);

// Make a function that returns a random number that chooses a questions array item
const questionNrFunc = function () {
  return Math.trunc(Math.random() * topics[currentTopic].length);
};

// Make a variable that stores the random number coming out of the function
let questionNr = questionNrFunc();

// Just to see what the current question number is
console.log("Current question number", questionNr);

// Make an empty array that can later hold all question numbers that have already been asked
let answers = [];

// log all topics arrays to check what we have
/*
console.log("Basics", basicsQuest);
console.log("Variables", variablesQuest);
console.log("Datatypes", datatypesQuest);
console.log("Operators", operatorsQuest);
console.log("Statements Expressions", stateExQuest);
console.log("Functions", functionsQuest);
console.log("Arrays Objects", arrObjectsQuest);
console.log("Loops", loopsQuest);
console.log("DOM", domQuest);
console.log("Behind The Scenes", behindTheScenesQuest);
*/

// Make a function that updates the question and answers text
const displayQuestions = function () {
  questionTxt.textContent = topics[currentTopic][questionNr].question;
  answerTxt1.textContent = topics[currentTopic][questionNr].answers[0];
  answerTxt2.textContent = topics[currentTopic][questionNr].answers[1];
  answerTxt3.textContent = topics[currentTopic][questionNr].answers[2];
};

// Call the function to display the first question and answers
displayQuestions();

// Make a function that generates a new random number that hasn't been used yet
const displayNextQuestions = function () {
  questionNr = questionNrFunc();
  while (
    answers.includes(questionNr) &&
    answers.length < topics[currentTopic].length
  ) {
    questionNr = questionNrFunc();
  }
  return questionNr;
};

const resetAnswerColor = function () {
  for (let i = 0; i < answerBtnAll.length; i++) {
    answerBtnAll[i].style.backgroundColor = "#cccccc";
  }
};

const updateScores = function () {
  rightAnswerScore.textContent = `${rightAnswers}/${topics[currentTopic].length}`;
  wrongAnswerScore.textContent = `${wrongAnswers}/${topics[currentTopic].length}`;
};
updateScores();

// Select nav topic and change current topic
for (let i = 0; i < navTopicList.length; i++) {
  navTopicList[i].addEventListener("click", function () {
    currentTopic = i;
    answers = [];
    rightAnswers = 0;
    wrongAnswers = 0;
    updateScores();
    questionNr = questionNrFunc();
    displayQuestions();
    for (let j = 0; j < navTopicList.length; j++) {
      navTopicList[j].style.color = "#7e7e7e";
    }
    navTopicList[i].style.color = "white";
    console.log(topics[currentTopic], topics[currentTopic][questionNr]);
    console.log(topics[currentTopic][questionNr].corAnswer);
    offScreenMenu.classList.toggle("active");
  });
}

// What happens when clicking the answers
for (let i = 0; i < answerBtnAll.length; i++) {
  answerBtnAll[i].addEventListener("click", function () {
    console.log("click");
    console.log("Answers length", answers.length);
    console.log("Current topic length", topics[currentTopic].length);
    if (
      answerBtnAll[i].classList.contains(
        `a${topics[currentTopic][questionNr].corAnswer}`
      )
    ) {
      console.log("right answer");
      answers.push(questionNr);
      rightAnswers += 1;
      updateScores();
      displayNextQuestions();
      displayQuestions();
      resetAnswerColor();
      console.log("Answers length", answers.length);
      console.log("Current topic length", topics[currentTopic].length);
    } else if (
      !answerBtnAll[i].classList.contains(
        `a${topics[currentTopic][questionNr].corAnswer}`
      )
    ) {
      console.log("Wrong answer");
      answerBtnAll[i].style.backgroundColor = "red";
      wrongAnswers += 1;
      updateScores();
      setTimeout(function () {}, 3000);
    } else if (answers.length === topics[currentTopic].length) {
      answers = [];
      alert("DONE!!");
    } else {
      displayQuestions;
    }
  });
}
