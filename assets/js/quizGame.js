//Declare Countdown (numbers)
var timeEl = document.querySelector(".timer");
var countdownEl = document.getElementById("countdown");
var startQuizEl = document.querySelector("#startButton");
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

function startQuiz () {
    startQuizEl.style.display = 'none';
    var qandaScreenEl = document.getElementById("mainScreen");
    qandaScreenEl.setAttribute('id', 'mainScreen2');
    qandaScreenEl.innerHTML =
    `<div class="grid-question-answer">
        <div class="questions">
            <h2>//Question</h2>
            <h3 id="displayQuestion">Test</h3>
        </div>
        <div class="answers">
            <h2>//Answers</h2>
            <button type="button" class="displayAnswers" id="answer1"></button>
            <button type="button" class="displayAnswers" id="answer2"></button>
            <button type="button" class="displayAnswers" id="answer3"></button>
            <button type="button" class="displayAnswers" id="answer4"></button>
        </div>
    </div>   
    <div class="timer">
        <h2>//Timer</h2>
        <p id="countdown"></p>
    </div>`
    ;  

}


startQuizEl.addEventListener("click", startQuiz);

// Declare Questions (array)
// var quizArray = [
//     {
//         id: 1,
//         question: "From the given array which index is the letter 'b' on? ['a', 'b', 'c', 'd']?",
//         answers: ["0", "1", "2","3"],
//         correctAnswer: "0"
//     },
//     {
//         id: 2,
//         question: "What are the two types of scope JavaScript uses?",
//         answers: ["Inner and Outer", "Main and Peripheral", "Global and Local", "Inclusive and Exclusive"],
//         correctAnswer: "Global and Local"
//     }
// ];


//User picks answer

//Validate user answer

//Display whether answer was incorrect/correct

//Add to total score

//Click next question
// function navigate(direction) {
//     index = index + direction;
//     if (index < quizArray.length) { 
//       index++; 
//     } else {
//         return;
//     }
//   }

