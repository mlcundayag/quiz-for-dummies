const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const timerElement = document.getElementById("timer");
const timerContainerElement = document.getElementById("timer-container");
const instructionElement = document.getElementById("instruction");
const statusElement = document.getElementById("status");

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
    startTimer()
    if (timerCount < 60) {
        timerElement.innerText = 60
        }
    setNextQuestion();
}

//Timer
function startTimer() {
    //Sets timer
    const timer = setInterval(() => {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount == 0 ) {
        clearInterval(timer);
        endGame();
        } 
    }, 100);
};

function setNextQuestion() {
    if (timerCount == 0) {
    endGame();
    } else {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
    }
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
        startButton.innerText = "Try Again"
        startButton.classList.remove("hide")
        clearInterval(timer);
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

function endGame() {
    timerElement.textContent = 0;
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


