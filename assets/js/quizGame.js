//Declare Countdown (numbers)
//Declare Questions (array)
// var questions = [
//     {
//         //question
//         //answers
//         //correct answer
//     },
//     {
//         //question
//         //answers
//         //correct answer
//     }
// ];

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
