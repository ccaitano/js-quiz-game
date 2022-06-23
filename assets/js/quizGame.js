//Declare Countdown (numbers)
var timeEl = document.querySelector(".timer");
var startQuizEl = document.querySelector("#startButton");
var highScoresEl = document.getElementById("scoreButton");
var qandaScreenEl = document.getElementById("mainScreen");
var secondsLeft = 60;
var questionNo = 0;
var correctAnswer = 0;
var incorrectAnswer = 0;
var highScores = [];
var highScoreInitials = [];

//Timer Function
function setTime () {
    var countdownEl = document.getElementById("countdown");
    secondsLeft = 60;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        countdownEl.textContent = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
}

//End Quiz Function
function gameOver () {
    qandaScreenEl.setAttribute('id', 'mainScreen3');
    var userScore = (correctAnswer*10);
    qandaScreenEl.innerHTML = 
        `<div>
            <button id="startAgain">Restart Quiz</button>
        </div>
        <div>
            <h2>//Your Score</h2>
            <p>Score</p>
            <p id="score">${userScore}/100</p>
        </div>
        <div>
            <form id="scorerInfo" method="POST">
                <label for="scorerName">Enter Your Initials: </label>
                <input type="text" placeholder="Ex: JD" name="scorerName" id="scorerName" />
            </form>
        </div>
        <div>
            <button id="highScore">Log High Score</button>
        </div>`;
    var startAgainEl = document.getElementById("startAgain");
    var highscoreEl = document.getElementById("highScore");
    
    startAgainEl.addEventListener("click", startQuiz);
    highscoreEl.addEventListener("click", function(event) {
        event.preventDefault();
        logHighScore(userScore);
        });  
          
}

//Log High Score Function
function logHighScore (userScore) {
    var userInitials = document.querySelector("#scorerName").value;
    // var storedHighScoreInitials = JSON.parse(localStorage.getItem("highScoreInitials"))
    // var storedHighScores = JSON.parse(localStorage.getItem("highScores"));
    if (userInitials === "") {
        alert("Please Enter Your Initials");
        gameOver();
        return;
    }
    localStorage.setItem("userScore", JSON.stringify(userScore));
    localStorage.setItem("userInitials", JSON.stringify(userInitials));
    highScores.push(userScore);
    highScoreInitials.push(userInitials);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    localStorage.setItem("highScoreInitials", JSON.stringify(highScoreInitials));
    displayHighScore();
}

function displayHighScore () {
    qandaScreenEl.setAttribute('id', 'highScoreScreen');
    qandaScreenEl.innerHTML =
    `<h1>High Scores</h1>
    <section id="highScoreMain">
        <table id="highScoreTable">
            <tr>
                <th>User Initials</th>
                <th>Score</th>
            </tr>
        </table> 
    </section>
    <div id="hsButtons">
        <button id="startAgain">Start Quiz</button>
        <button id="clearScores">Clear Scores</button>
    </div>`
    ;  
    highScoresEl.style.display = 'none';
    for(i=0; i<highScores.length; i++) {
        var newHSRow = document.createElement("tr");
        newHSRow.innerHTML =
            `<td>${highScoreInitials[i]}</td>   
            <td>${highScores[i]}</td>`;
        highScoreTable.appendChild(newHSRow);
        console.log("yes");
    }
    var startAgainEl = document.getElementById("startAgain");    
    startAgainEl.addEventListener("click", startQuiz);

    var clearHSEl = document.getElementById("clearScores");    
    clearHSEl.addEventListener("click", clearScores);
}

function clearScores() {
    highScores = [];
    highScoreInitials = [];
    qandaScreenEl.setAttribute('id', 'highScoreScreen');
    qandaScreenEl.innerHTML =
    `<h1>High Scores</h1>
    <h2>No Scores to Display</h2>
    <section>
        <button id="startAgain">Restart Quiz</button>
    </section>`
    ;  
    var startAgainEl = document.getElementById("startAgain");    
    startAgainEl.addEventListener("click", startQuiz);
}
// Declare Questions (array)
var quizArray = [
    {
        id: 1,
        question: "From the given array which index is the letter 'b' on? ['a', 'b', 'c', 'd']",
        answers: ["0", "1", "2","3"],
        correctAnswer: "1"
    },
    {
        id: 2,
        question: "What are the two types of scope JavaScript uses?",
        answers: ["Inner and Outer", "Main and Peripheral", "Global and Local", "Inclusive and Exclusive"],
        correctAnswer: "Global and Local"
    },
    {
        id: 3,
        question: "Which of the following is NOT a valid data type?",
        answers: ["Boolean", "Number", "String", "Alphabet"],
        correctAnswer: "Alphabet"
    },
    {
        id: 4,
        question: "Which of the following methods add an item to an array?",
        answers: [".splice()", ".push()", ".addto()", ".plus()"],
        correctAnswer: ".push()"
    },
    {
        id: 5,
        question: "Which HTML element contains the JavaScript file?",
        answers: ["<script>", "<link>", "<section>", "<footer>"],
        correctAnswer: "<script>"
    },
    {
        id: 6,
        question: "Which operator is used to assign a value to a variable?",
        answers: ["-->", "=", "~", "#"],
        correctAnswer: "="
    },
    {
        id: 7,
        question: "Which of the following methods will write 'Hello' to the console?",
        answers: ["console.log('Hello')", "print('Hello')", "console.print('Hello')","log('Hello')"],
        correctAnswer: "console.log('Hello')"
    },
    {
        id: 8,
        question: "How would you add a comment in JavaScript",
        answers: ["(This is a Comment)", "'This is a Comment'", "//This is a Comment","**This is a Comment**"],
        correctAnswer: "//This is a Comment"
    },
    {
        id: 9,
        question: "What is the correct way to write a JavaScript array?",
        answers: ["var pets = 'dog', 'cat', 'bird'", "var pets = (dog, cat, bird)", "var pets = 1:dog, 2:cat, 3:bird","var pets = ['dog', 'cat', 'bird]"],
        correctAnswer: "var pets = ['dog', 'cat', 'bird]"
    },
    {
        id: 10,
        question: "What type of variable is 'false'?",
        answers: ["Negative", "Boolean", "Truthy","undefined"],
        correctAnswer: "Boolean"
    }
];

function displayQuestions (questionNo) {
    var questionEl = document.getElementById("displayQuestion");
    var answer1El = document.getElementById("answer1");
    var answer2El = document.getElementById("answer2");
    var answer3El = document.getElementById("answer3");
    var answer4El = document.getElementById("answer4");
    questionEl.textContent = quizArray[questionNo].question;
    answer1El.textContent = "A. " + quizArray[questionNo].answers[0];
    answer2El.textContent = "B. " + quizArray[questionNo].answers[1];
    answer3El.textContent = "C. " + quizArray[questionNo].answers[2];
    answer4El.textContent = "D. " + quizArray[questionNo].answers[3];
    answer1El.addEventListener("click", checkAnswer);
    answer2El.addEventListener("click", checkAnswer);
    answer3El.addEventListener("click", checkAnswer);
    answer4El.addEventListener("click", checkAnswer);
   
}

function checkAnswer() {
    var selectedAnswer = this;
    if (quizArray[questionNo].answers[selectedAnswer.dataset.answer] == quizArray[questionNo].correctAnswer) {
        selectedAnswer.textContent = "CORRECT!";
        correctAnswer++;
    } else {
        secondsLeft = secondsLeft - 5;
        selectedAnswer.textContent = "INCORRECT";
    }
    questionNo++;
    setTimeout(nextQuestion, 1000);
    
}


function nextQuestion () {
    console.log("Next Question: " + questionNo);
    if (questionNo < quizArray.length) {
        displayQuestions(questionNo);
    } else {
        gameOver();
    }
}

function startQuiz () {
    questionNo = 0;
    correctAnswer = 0;
    //Remove 'Begin Quiz' Button and High Score Link
    startQuizEl.style.display = 'none';
    highScoresEl.style.display = 'none';
    //Create quiz screen display - Question, Answers and Timer
    qandaScreenEl.setAttribute('id', 'mainScreen2');
    qandaScreenEl.innerHTML =
    `<div class="grid-question-answer">
        <div class="questions">
            <h2>//Question</h2>
            <h3 id="displayQuestion">Test</h3>
        </div>
        <div class="answers">
            <h2>//Answers</h2>
            <button class="displayAnswers" id="answer1" data-answer="0"></button>
            <button class="displayAnswers" id="answer2" data-answer="1"></button>
            <button class="displayAnswers" id="answer3" data-answer="2"></button>
            <button class="displayAnswers" id="answer4" data-answer="3"></button>
        </div>
    </div>   
    <div class="timer">
        <h2>//Timer</h2>
        <p id="countdown"></p>
    </div>`
    ;  
    //Start Timer
    setTime();

    displayQuestions(questionNo);

}

startQuizEl.addEventListener("click", startQuiz);   
highScoresEl.addEventListener("click", displayHighScore);
