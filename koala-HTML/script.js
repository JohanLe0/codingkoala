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
const basicsQuestions = [];
console.log(basicsQuestions.length);

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
