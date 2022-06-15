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
        answers: ["0", "1", "2","3","4"],
        correctAnswer: "0"
    },
    {
        id: 2,
        question: "What are the two types of scope JavaScript uses?",
        answers: ["Inner and Outer", "Main and Peripheral", "Global and Local", "Inclusive and Exclusive"],
        correctAnswer: "Global and Local"
    }
];

console.log(quizArray[1].question);