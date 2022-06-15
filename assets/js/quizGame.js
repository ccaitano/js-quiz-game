//Declare Countdown (numbers)
var timeEl = document.querySelector(".timer");
var countdownEl = document.getElementById("countdown");

var secondsLeft = 30;

function setTime () {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        countdownEl.textContent = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

setTime();

// Declare Questions (array)
var quizArray = [
    {
        id: 1,
        question: "From the given array which index is the letter 'b' on? ['a', 'b', 'c', 'd']?",
        answers: ["0", "1", "2","3"],
        correctAnswer: "0"
    },
    {
        id: 2,
        question: "What are the two types of scope JavaScript uses?",
        answers: ["Inner and Outer", "Main and Peripheral", "Global and Local", "Inclusive and Exclusive"],
        correctAnswer: "Global and Local"
    }
];

//Declare Variables
var startQuiz = document.querySelector("#startButton");
var questionEl = document.getElementById("displayQuestion");
var answer1El = document.getElementById("answer1");
var answer2El = document.getElementById("answer2");
var answer3El = document.getElementById("answer3");
var answer4El = document.getElementById("answer4");

//Click Start Quiz button to initiate question/answer sequence
startQuiz.addEventListener("click", function(){
    questionEl.textContent = quizArray[1].question;
    answer1El.textContent = "A. " + quizArray[1].answers[0];
    answer2El.textContent = "B. " + quizArray[1].answers[1];
    answer3El.textContent = "C. " + quizArray[1].answers[2];
    answer4El.textContent = "D. " + quizArray[1].answers[3];
});

//User picks answer

//Validate user answer

//Display whether answer was incorrect/correct

//Add to total score

//Click next question


