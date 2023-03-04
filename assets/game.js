var startBtn = document.querySelector("#start");
var question = document.querySelector("#questions");
var startScreen = document.querySelector("#start-screen")
var timer = document.querySelector("#time")
var choices = document.querySelector("#choices")
var initials = document.querySelector("#initials")
var wrapper = document.querySelector(".wrapper")
var secondsLeft = 60
var questionIndex = 0
var interval;
var scores = 0

function startQuiz() {
//startScreen.setAttribute("class","hide")
wrapper.display.style = "none"
questions.removeAttribute("class")
interval = setInterval(countDown, 1000)
timer.textContent = secondsLeft
loadQuestion()
}

function countDown () {
secondsLeft --
timer.textContent = secondsLeft
if (secondsLeft <= 0) {
    endQuiz ()
}
}

function loadQuestion () {
    var currentQuestion = questions [questionIndex]
    var questionTitle = document.querySelector("#question-title")
    questionTitle.textContent = currentQuestion.title
    choices.innerHTML = ""
    for (let i = 0; i < currentQuestion.choices.length; i++) {
        var button = document.createElement("button")
        var choice = currentQuestion.choices [i]
        button.setAttribute("class","choice")
        button.setAttribute("value",choice)
        button.textContent = choice
        choices.appendChild("button")
    }
}

function checkAnswer (event) {
    var answer = event.target
    if (!answer.matches(".choice")) {
        return
    }
    if (answer.value !== questions [questionIndex].answer) {
        return scores - 10
    }
}

var questions = [
    {
        title: "Commonly used data types DO NOT include.",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },


    {
        title: "The condition in an if/else statement is enclosed with ________.",
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer: "parenthesis",
    },

    {
        title: "Arrays in Javascript can be used to store",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above."],
        answer: "all of the above",
    },


    {
        title: "String values must be enclosed within ________ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes",
    },


    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log",
    },
];


startBtn.addEventListener("click", startQuiz);