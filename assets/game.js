// Define the questions and choices
const questions = [
    {
        question: "What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "What does CSS stand for?",
        choices: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "What does JS stand for?",
        choices: ["Java Source", "Java Supply", "JavaScript"],
        answer: "JavaScript"
    },
    {
        question: "Which language is used for styling web pages?",
        choices: ["HTML", "JQuery", "CSS"],
        answer: "CSS"
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        choices: ["<br>", "<break>", "<lb>"],
        answer: "<br>"
    }
];

// global variables
let questionIndex = 0;
let timeLeft = 75;
let score = 0;
let timerInterval;

// DOM elements
const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("start");
const questionsContainer = document.getElementById("questions");
const questionTitle = document.getElementById("question-title");
const choicesContainer = document.getElementById("choices");
const timer = document.getElementById("time");
const endScreen = document.getElementById("end-screen");
const finalScore = document.getElementById("final-score");
const initialsInput = document.getElementById("initials");
const submitButton = document.getElementById("submit");

// Shuffle the questions array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Start the quiz
function startQuiz() {
    // Reset the time and score
    timeLeft = 75;
    score = 0;

    // Show the questions div and hide the start screen
    startScreen.classList.add("hide");
    questionsContainer.classList.remove("hide");

    // Load the first question
    loadQuestion();

    // Start the timer
    timerInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

// Load the current question
function loadQuestion() {
    // Get the current question object
    const currentQuestion = questions[questionIndex];

    // Update the question title
    questionTitle.textContent = currentQuestion.question;

    // Clear the choices container
    choicesContainer.innerHTML = "";

    // Loop through the choices and create a button for each one
    currentQuestion.choices.forEach(function (choice) {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.classList.add("choice");
        choiceButton.addEventListener("click", checkAnswer);
        choicesContainer.appendChild(choiceButton);
    });
}

// Check the selected answer
function checkAnswer(event) {
    // Get the selected answer
    const selectedAnswer = event.target.textContent;

    // Get the current question object
    const currentQuestion = questions[questionIndex];

    // Check if the answer is correct
    if (selectedAnswer === currentQuestion.answer) {
        score += 10;
    } else {
        timeLeft -= 10;
    }

    // Increase the question index
    questionIndex++;

    // Load the next question or end the quiz
    if (questionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

// Add event listener to start button
startButton.addEventListener("click", startQuiz);

// Start the quiz
function startQuiz() {
    // Reset the time and score
    timeLeft = 75;
    score = 0;

    // Show the questions div and hide the start screen
    startScreen.classList.add("hide");
    questionsContainer.classList.remove("hide");

    // Load the first question
    loadQuestion();

    // Start the timer
    timerInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    // Stop the timer
    clearInterval(timerInterval);

    // Redirect to highscore.html
    window.location.href = "highscore.html";
}

function endGame() {
    // ...
    finalScore.textContent = score;
    // redirect to highscore page with the score as parameter
    window.location.href = "highscore.html?score=" + encodeURIComponent(score);
}

// Add event listener to submit button
submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Get the initials value
    const initials = initialsInput.value.trim();

    // Check if the initials are valid
    if (initials === "") {
        alert("Please enter your initials.");
        return;
    }

    // Save the score and initials to localStorage
    const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    highscores.push({ initials, score });
    localStorage.setItem("highscores", JSON.stringify(highscores));

    // Redirect to highscore.html
    endGame();
});

function endGame() {
    // Display the final score
    finalScore.textContent = score;

    // Redirect to highscore.html with the score as parameter
    window.location.href = "highscore.html?score=" + encodeURIComponent(score);
}