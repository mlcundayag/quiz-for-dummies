//declaring variables

var timerElement = document.getElementById("timer");
var questionElement = document.getElementById("question");
var choiceOne = document.getElementById("choice1");
var choiceTwo = document.getElementById("choice2");
var choiceThree = document.getElementById("choice3");
var choiceFour = document.getElementById("choice4")
var scoreElement = document.getElementById("score");
var initialsElement = document.getElementById("initials");
var highScoreElement = document.getElementById("highscores");
var randomQuestions = randomQs();

let timerCount = 60;
let score = 0;
let cardQuestion = -1;
// let yourScore;

//Question Variables
const quiz = [
    {
        question: "What is a programming language that was invented by Brendan Eich, which can add interactivity to a website?",
        answer: "JavaScript",
        choices: [
            "HTML",
            "CSS",
            "JavaScript",
            "MS Excel"
        ]
    },
    {
        question: "Is JavaScript a case-sensitve language?",
        answer: "Yes, it must have a consistent 'capitalization' of letters",
        choices: [
            "Yes, the language keywords,variables, functions names, and any other identifiers must always be typed with a consistent 'lower case' of letters",
            "Yes, Javascript must always use 'upper case' letters",
            "Yes, the language keywords,variables, functions names, and any other identifiers must always be typed with a combination of 'numbers & symbols' and letters",
            "Yes, it must have a consistent 'capitalization' of letters"
        ]
    },
    {
        question: "What method will you use to convert a JavaScript value to a JSON string",
        answer: "JSON.stringify()",
        choices: [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.dumps()",
            "JSON.loads()"
        ]
    },
    {
        question: "In how many ways a JavaScript can be involved in an HTML file?",
        answer: "3 (Inline, External, Internal)",
        choices: [
            "1",
            "2",
            "3",
            "0"
        ]
    },
    {
        question: "What is NaN in Javascript?",
        answer: "Not a Number",
        choices: [
            "Not a Number",
            "Not a Null",
            "Not a Nomenclature",
            "Non artis Natura"
        ]
    },
];

//Generate random questions
function randomQs() {
    let  quizSet = quiz;
    for (let i = 0; i < quizSet.length; i++) {
        let answer = quizSet[i].answer;
        answer.sort(() => {
            return (Math.floor(Math.random() *3) -1);
        });
    }
    quizSet = quizSet.sort(() => {
        return (Math.floor(Math.random() * 3) -1);
    });
    return quizSet;
};

//Create buttons and move from next card to another
function changeCard(still, next) {
    document.getElementById(still).classList.add("card");
    document.getElementById(next).removeAttribute("class")
};

//Start button
function startQuiz() {
    changeCard("start-card", "container");
    nextQuestion();
    startTimer();
};

//Timer
function startTimer() {
    //Sets timer
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount <= 0 ) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
};

function nextQuestion() {
    
}






//timer

//random

//eventlisterners for button

//start again

//finish

//saved

