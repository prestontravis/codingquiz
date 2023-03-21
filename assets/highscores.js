const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const scoreList = document.getElementById("high-scores");

// Sort scores in descending order
highScores.sort((a, b) => b.score - a.score);

// Display high scores
highScores.forEach(score => {
const li = document.createElement("li");
li.textContent = `${score.initials} - ${score.score}`;
scoreList.appendChild(li);
});

const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
event.preventDefault();

const initialsInput = document.getElementById("initials");
const initials = initialsInput.value;
const score = parseInt(finalScore.textContent);

const newScore = {
initials: initials,
score: score
};

highScores.push(newScore);

localStorage.setItem("highScores", JSON.stringify(highScores));

window.location.href = "index.html";
});
