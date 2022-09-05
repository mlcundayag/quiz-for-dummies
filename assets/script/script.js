const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const timerElement = document.getElementById("timer");
const timerContainerElement = document.getElementById("timer-container");
const instructionElement = document.getElementById("instruction");

let shuffledQuestions, currentQuestionIndex
let timerCount = 60;

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log("started")
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide");
    timerContainerElement.classList.remove("hide");
    instructionElement.classList.add("hide");
    setNextQuestion();
    startTimer()
}

//Timer
function startTimer() {
    //Sets timer
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0 ) {
            if (isWin && timerCount > 0)
            clearInterval(timer);
            winGame();
        }
        if (timerCount === 0) {
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
};

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const questions = [
        {   
            question: "What is a programming language that was invented by Brendan Eich, which can add interactivity to a website?",
            answers: [
                { text: "HTML", correct: false },
                { text: "CSS", correct: false },
                { text: "JavaScript", correct: true },
                { text: "MS Excel", correct: false }
            ]
        },
        {
            question: "Is JavaScript a case-sensitve language?",
            answers: [
                { text: "Yes, the language keywords,variables, functions names, and any other identifiers must always be typed with a consistent 'lower case' of letters", correct: false },
                { text: "Yes, Javascript must always use 'upper case' letters", correct: false },
                { text: "Yes, the language keywords,variables, functions names, and any other identifiers must always be typed with a combination of 'numbers & symbols' and letters", correct: false },
                { text: "Yes, it must have a consistent 'capitalization' of letters", correct: true }
            ]
        },
        {
            question: "What method will you use to convert a JavaScript value to a JSON string",
            answers: [
                { text: "JSON.parse()", correct: false },
                { text: "JSON.stringify()", correct: true },
                { text: "JSON.dumps()", correct: false },
                { text: "JSON.loads()", correct: false }
            ]
        },
        {
            question: "In how many ways a JavaScript can be involved in an HTML file?",
            answers: [
                { text: "1", correct: false },
                { text: "2", correct: false },
                { text: "3", correct: true },
                { text: "0", correct: false }
            ]
        },
        {
            question: "What is NaN in Javascript?",
            answers: [
                { text: "Not a Number", correct: true },
                { text: "Not a Null", correct: false },
                { text: "Not a Nomenclature", correct: false },
                { text: "Non artis Natura", correct: false }
            ]
        },
    ];

// //declaring variables

// var timerElement = document.getElementById("timer");
// var questionElement = document.getElementById("question");
// var multipleChoice = document.getElementById("container");
// var choiceOne = document.getElementById("choice1");
// var choiceTwo = document.getElementById("choice2");
// var choiceThree = document.getElementById("choice3");
// var choiceFour = document.getElementById("choice4")
// var scoreElement = document.getElementById("score");
// var initialsElement = document.getElementById("initials");
// var highScoreElement = document.getElementById("highscores");
// var startButton = document.getElementById("start-button");
// var resetButton = document.getElementById("reset-button");
// var againButton = document.getElementById("try-again");
// var submitButton = document.getElementById("submit");
// var answerButton = document.getElementById("answer");
// var nextButton = document.getElementById("next")[0];
// // var randomQuestions = randomQs();

// var timerCount
// var myCorrect = 0;
// var showQuestions = " ";
// var userChoice = "";
// var start = true;

// // let finalScore;

// //Question Variables
// var quiz = [
//     {   
//         questionNumber: 0,
//         question: "What is a programming language that was invented by Brendan Eich, which can add interactivity to a website?",
//         choices: [
//             { answer: "HTML", correct: false },
//             { answer: "CSS", correct: false },
//             { answer: "JavaScript", correct: true },
//             { answer: "MS Excel", correct: false }
//         ]
//     },
//     {
//         questionNumber: 1,
//         question: "Is JavaScript a case-sensitve language?",
//         choices: [
//             { answer: "Yes, the language keywords,variables, functions names, and any other identifiers must always be typed with a consistent 'lower case' of letters", correct: false },
//             { answer: "Yes, Javascript must always use 'upper case' letters", correct: false },
//             { answer: "Yes, the language keywords,variables, functions names, and any other identifiers must always be typed with a combination of 'numbers & symbols' and letters", correct: false },
//             { answer: "Yes, it must have a consistent 'capitalization' of letters", correct: true }
//         ]
//     },
//     {
//         questionNumber: 2,
//         question: "What method will you use to convert a JavaScript value to a JSON string",
//         choices: [
//             { answer: "JSON.parse()", correct: false },
//             { answer: "JSON.stringify()", correct: true },
//             { answer: "JSON.dumps()", correct: false },
//             { answer: "JSON.loads()", correct: false }
//         ]
//     },
//     {
//         questionNumber: 3,
//         question: "In how many ways a JavaScript can be involved in an HTML file?",
//         choices: [
//             { answer: "1", correct: false },
//             { answer: "2", correct: false },
//             { answer: "3", correct: true },
//             { answer: "0", correct: false }
//         ]
//     },
//     {
//         questionNumber: 4,
//         question: "What is NaN in Javascript?",
//         choices: [
//             { answer: "Not a Number", correct: true },
//             { answer: "Not a Null", correct: false },
//             { answer: "Not a Nomenclature", correct: false },
//             { answer: "Non artis Natura", correct: false }
//         ]
//     },
// ];

// //Start Quiz with a button
// function startQuiz() {
//     timerCount = 60
//     startButton.disabled = true;
//     resetButton.disabled = true;
//     againButton.disabled = true;
//     //nextQuestion();
//     startTimer()
// }

// 


