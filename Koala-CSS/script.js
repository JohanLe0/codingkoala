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

// make arrays for all topics with question objects inside of them
const basicsQuestions = [
  {
    question: "What three elements does a CSS rule consist of?",
    answers: [
      "variable {object: value;}",
      "selector {property: value;}",
      "property {selector: value;}",
    ],
    corAnswer: 1,
  },
  {
    question: "What is inline CSS?",
    answers: [
      "It means you write your CSS code inside a HTML element style attribute.",
      "It means you write your CSS code inside of a style element, inside of the HTML head element.",
      "It means you write your CSS code inside an external CSS file, which you then link to in your HTML file.",
    ],
    corAnswer: 0,
  },
  {
    question: "How do you write an inline style property?",
    answers: [
      '<element css="value: property">',
      '<element style="property: value">',
      '<element style="property: value"',
    ],
    corAnswer: 2,
  },
  {
    question: "When should you use inline CSS?",
    answers: [
      "Generally it is not recommended at all.",
      "It is best applied when you only need styling for one HTML file.",
      "It is best applied when you need to style multiple HTML files.",
    ],
    corAnswer: 0,
  },
  {
    question: "What is internal CSS?",
    answers: [
      "It means you write your CSS code inside a HTML element style attribute.",
      "It means you write your CSS code inside of a style element, inside of the HTML head element.",
      "It means you write your CSS code inside an external CSS file, which you then link to in your HTML file.",
    ],
    corAnswer: 1,
  },
  {
    question: "When is internal CSS best applied?",
    answers: [
      "Generally it is not recommended at all.",
      "It is best applied when you only need styling for one HTML file.",
      "It is best applied when you need to style multiple HTML files.",
    ],
    corAnswer: 1,
  },
  {
    question: "What is external CSS?",
    answers: [
      "It means you write your CSS code inside a HTML element style attribute.",
      "It means you write your CSS code inside of a style element, inside of the HTML head element.",
      "It means you write your CSS code inside an external CSS file, which you then link to in your HTML file.",
    ],
    corAnswer: 2,
  },
  {
    question: "When is external CSS best applied?",
    answers: [
      "Generally it is not recommended at all.",
      "It is best applied when you only need styling for one HTML file.",
      "It is best applied when you need to style multiple HTML files.",
    ],
    corAnswer: 2,
  },
  {
    question: "How do you connect your external CSS file to your HTML file?",
    answers: [
      'You use a <link> element, using a rel="" attribute, and a href="" attribute.',
      'You use a <style> element, using a rel="" attribute, and a href="" attribute.',
      'You use a <a> element, using a rel="" attribute, and a href="" attribure.',
    ],
    corAnswer: 0,
  },
  {
    question: "What is the CSS box model?",
    answers: [
      "It is a visualization of the element content, and the margin, padding, and border properties, which shows how they interact with each other.",
      "It is a visualization of the HTML text, and the font-size, font-weight, and font-family properties, which shows how they interact with each other.",
      "It is a visualization of the CSS cascade, which shows the order of the applied css properties.",
    ],
    corAnswer: 0,
  },
  {
    question: "What are the four categories that determine the CSS cascade?",
    answers: [
      "Position, topic, type and border.",
      "Position, timing, specificity and importance.",
      "Position, specificity, type and importance.",
    ],
    corAnswer: 2,
  },
  {
    question: "What does the cascade position look out?",
    answers: [
      "It looks if a CSS rule is higher or lower than other CSS rules in the document.",
      "It looks at how specific the CSS selector is that you apply to you your rule.",
      "It looks at what kind of CSS implementation it is. External, internal or inline.",
    ],
    corAnswer: 0,
  },
  {
    question: "What does the cascade specificity look for?",
    answers: [
      "It looks if a CSS rule is higher or lower than other CSS rules in the document.",
      "It looks at how specific the CSS selector is that you apply to you your rule.",
      "It looks at what kind of CSS implementation it is. External, internal or inline.",
    ],
    corAnswer: 1,
  },
  {
    question: "What does the CSS cascade type look for?",
    answers: [
      "It looks if a CSS rule is higher or lower than other CSS rules in the document.",
      "It looks at how specific the CSS selector is that you apply to you your rule.",
      "It looks at what kind of CSS implementation it is. External, internal or inline.",
    ],
    corAnswer: 2,
  },
  {
    question:
      "What keyword should you use in a CSS rule to ensure the rule gets right of way?",
    answers: [
      "property: value important!",
      "property: value !imporant",
      "property: value !!important",
    ],
    corAnswer: 1,
  },
];
console.log(basicsQuestions.length);

const selectorQuestions = [
  {
    question: "What is a CSS selector?",
    answers: [
      "A CSS selector is the part of your CSS rule that specifies what element you will style.",
      "A CSS selector is the part of your CSS rule that specifies what part of an element you want to style.",
      "A CSS selector is the part of your CSS rule that specifies how you want to change the selected property of an element.",
    ],
    corAnswer: 0,
  },
  {
    question: "What is an element selector and how do you write it down?",
    answers: [
      "It selects the specified class to change the style properties: .element {property: value}",
      "It slects the specified ID to change the style properties: #element {property: value}",
      "It selects the specified element to change the style properties: element {property: value}",
    ],
    corAnswer: 2,
  },
  {
    question: "What is a class selector and how do you write it down?",
    answers: [
      "It selects the specified class to change the style properties: .class {property: value}",
      "It slects the specified ID to change the style properties: #class {property: value}",
      "It selects the specified element to change the style properties: class {property: value}",
    ],
    corAnswer: 0,
  },
  {
    question: "What is an ID selector and how do you write it down?",
    answers: [
      "It selects the specified class to change the style properties: .id {property: value}",
      "It slects the specified ID to change the style properties: #id {property: value}",
      "It selects the specified element to change the style properties: id {property: value}",
    ],
    corAnswer: 1,
  },
  {
    question: "What is an attribute selector and how do you write it down?",
    answers: [
      "It selects everything in the whole document to change all the styele properties: * {property: value}",
      'It selects all elements with a specific attribute to change the style properties: p[attribute] {property: value} OR p[attribute="content"] {property: value}',
      "It selects the specified class to change the style properties: .class {property: value}",
    ],
    corAnswer: 1,
  },
  {
    question: "What is an universal selector and how do you write it down?",
    answers: [
      "It selects everything in the whole document to change all the styele properties: * {property: value}",
      'It selects all elements with a specific attribute to change the style properties: p[attribute] {property: value} OR p[attribute="content"] {property: value}',
      "It selects the specified class to change the style properties: .class {property: value}",
    ],
    corAnswer: 0,
  },
  {
    question: "How do you write down a descendant selector?",
    answers: [
      "selector selector {property: value;}",
      "selector, selector {property: value;}",
      "selector > selector {property: value;}",
    ],
    corAnswer: 0,
  },
  {
    question: "How do you write down a group selector?",
    answers: [
      "selector selector {property: value;}",
      "selector, selector {property: value;}",
      "selector > selector {property: value;}",
    ],
    corAnswer: 1,
  },
  {
    question: "How do you write down a child selector?",
    answers: [
      "selector selector {property: value;}",
      "selector, selector {property: value;}",
      "selector > selector {property: value;}",
    ],
    corAnswer: 2,
  },
  {
    question: "How do you write down a chaining selector?",
    answers: [
      "selector selector {property: value;}",
      "selector, selector {property: value;}",
      "selectorselector {property: value;}",
    ],
    corAnswer: 2,
  },
  {
    question:
      "what selector should you always start off with when chaining selectors?",
    answers: ["The element selector", "The class selector", "The ID selector"],
    corAnswer: 0,
  },
];
console.log(selectorQuestions.length);

const propertyQuestions = [
  {
    question: "How do you set the background color of an element?",
    answers: [
      "color: value;",
      "border-color: value;",
      "background-color: value;",
    ],
    corAnswer: 2,
  },
  {
    question: "How do you set the font color?",
    answers: [
      "color: value;",
      "border-color: value;",
      "background-color: value;",
    ],
    corAnswer: 0,
  },
  {
    question: "How do you set the border color?",
    answers: [
      "color: value;",
      "border-color: value;",
      "background-color: value;",
    ],
    corAnswer: 1,
  },
  {
    question: "How do you set the font weight?",
    answers: [
      "font-size: value;",
      "font-weight: value;",
      "font-family: value;",
    ],
    corAnswer: 1,
  },
  {
    question: "How do you set or change the font?",
    answers: [
      "font-size: value;",
      "font-weight: value;",
      "font-family: value;",
    ],
    corAnswer: 2,
  },
  {
    question: "How do you set the font size?",
    answers: [
      "font-size: value;",
      "font-weight: value;",
      "font-family: value;",
    ],
    corAnswer: 0,
  },
  {
    question: "How big is 1em?",
    answers: [
      "It is the size of the root of the HTML document.",
      "It is the size of the parent element.",
      "It is the size of 16pt",
    ],
    corAnswer: 1,
  },
  {
    question: "How big is 1rem?",
    answers: [
      "It is the size of the root of the HTML document.",
      "It is the size of the parent element.",
      "It is the size of 16pt",
    ],
    corAnswer: 0,
  },
  {
    question: "In which order do you set the three border properties?",
    answers: [
      "border: style width color",
      "border: width style color",
      "border: color width style",
    ],
    corAnswer: 1,
  },
  {
    question:
      "If you would set the border-width like this: 1px 2px 3px 4px, what would the order of the selected sides be?",
    answers: [
      "left bottom right top",
      "top left bottom right",
      "top right bottom left",
    ],
    corAnswer: 2,
  },
  {
    question: "What does the padding property do?",
    answers: [
      "It adds space, or padding, around the content, pushing the border outwards.",
      "It adds a border around the box.",
      "It creates space around the box, pushing other content to the side.",
    ],
    corAnswer: 0,
  },
  {
    question: "How do you set a background image?",
    answers: [
      "background-image: url(..//)",
      "background: url(..//)",
      "img: url(..//)",
    ],
    corAnswer: 0,
  },
  {
    question:
      "Which background property do you use to keep the background fixed and have the page content scroll?",
    answers: [],
  },
];
console.log(propertyQuestions.length);

const positioningQuestions = [
  {
    question: "What is static positioning?",
    answers: [
      "It is the HTML default positioning, positioning the items as they would normally be positioned when not changing any position properties.",
      "It is the positioning relative to the default HTML positioning.",
      "It is the positioning relative to the nearest element that also has a specified position property, or to the top left corener of the page if there is no other positioned element.",
    ],
    corAnswer: 0,
  },
  {
    question: "What is relative positioning?",
    answers: [
      "It is the HTML default positioning, positioning the items as they would normally be positioned when not changing any position properties.",
      "It is the positioning relative to the default HTML positioning.",
      "It is the positioning relative to the nearest element that also has a specified position property, or to the top left corener of the page if there is no other positioned element.",
    ],
    corAnswer: 1,
  },
  {
    question: "What is absolute positioning?",
    answers: [
      "It is the HTML default positioning, positioning the items as they would normally be positioned when not changing any position properties.",
      "It is the positioning relative to the default HTML positioning.",
      "It is the positioning relative to the nearest element that also has a specified position property, or to the top left corener of the page if there is no other positioned element.",
    ],
    corAnswer: 2,
  },
  {
    question: "What is fixed positioning?",
    answers: [
      "It is the HTML default positioning, positioning the items as they would normally be positioned when not changing any position properties.",
      "It is the positioning relative to the default HTML positioning.",
      "It positions the element to the top left of the browser window, where it will stay even if you scroll down.",
    ],
    corAnswer: 2,
  },
  {
    question:
      "If you use the {top: value} property, what direction does the element move in?",
    answers: [
      "It will be pushed to the top.",
      "It will be pushed downward from the top.",
      "It will be flipped over vertically.",
    ],
    corAnswer: 1,
  },
  {
    question:
      "What property do you use to determine if your positioned element goes on top or under the other elements?",
    answers: [
      "selector {z-index: value;}",
      "selector {x-index: value;}",
      "selector {y-index: value;}",
    ],
    corAnswer: 0,
  },
  {
    question: "What is the default z-index?",
    answers: ["1", "-1", "0"],
    corAnswer: 0,
  },
  {
    question:
      "What positioning properties can the z-index effectively be applied to?",
    answers: [
      "Relative, absolute, static and fixed.",
      "Relative, absolute, fixed and sticky.",
      "Relative, absolute, sticky and static.",
    ],
    corAnswer: 1,
  },
  {
    question:
      "How do I get my nav bar to stick to the top of the screen if I set the position to fixed?",
    answers: [
      "justify-content: flex-end",
      "justify-content: flex-start",
      "top: 0, left: 0",
    ],
    corAnswer: 2,
  },
];
console.log(positioningQuestions.length);

// Add an event listener for the hamburger button
hamburgerButton.addEventListener("click", function () {
  offScreenMenu.classList.toggle("active");
});

// Make an array that holds all topic arrays
const topics = [
  basicsQuestions,
  selectorQuestions,
  propertyQuestions,
  positioningQuestions,
];

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
