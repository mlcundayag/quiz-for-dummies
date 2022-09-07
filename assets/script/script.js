// Starting Card Elements 
const startCardEl = document.getElementById("start-card");
const startQuizButtonEl = document.getElementById("start-quiz");

//Question & Answer Card Elements 
const quizEl = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");

//Score Card Elements 
const inputScoreEl = document.getElementById("input-score");
const initialsEl = document.getElementById("initials");
const submitInitialsButtonEl = document.getElementById("submit-initials");
const myScoreEl = document.getElementById("score");

//View High Scores Card Elements 
const highScoresEl = document.getElementById("high-scores");
const scoresEl = document.getElementById("scores");
const goBackBtnEl = document.getElementById("go-back");
const resetButtonEL = document.getElementById("reset");

//Universal variables 
const viewScoresButtonEl = document.getElementById("view-scores");
const timerEl = document.getElementById("timer");
var score = 0;
var currentQuestion = 0;
var highScores = [];
var interval;
var timeCount = 60;
var timeLeft = 0;
var messageLine = document.createElement("hr");
var messageEl = document.createElement("div");
var elementColor = document.querySelector("body");
var today = new Date()
var date = `${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}`;
var time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
var dateTime = `${date} @ ${time}` 

//starts and updates timer
function startTimer() {
    timerEl.textContent = timeCount;
    interval = setInterval(function () {
        timeLeft++;
        timerEl.textContent = timeCount - timeLeft;
        if (timeLeft >= timeCount) {
            currentQuestion = questions.length;
            nextQuestion();
        }
    }, 1000);
}

//stops timer
function stopTimer() {
    clearInterval(interval);
}

//Creates function to show questions and if it's the last questions then stop timer and show score
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        setQuestion(randomQuestion[currentQuestion]);
    } else {
        stopTimer();
        if ((timeCount - timeLeft) > 0)
        myScoreEl.textContent = score;
        hide(quizEl);
        show(inputScoreEl);
        timerEl.textContent = 0;
        elementColor.classList.remove("correct");
        elementColor.classList.remove("wrong");
    }
}

//checks answer and update scores
function checkAnswer(answer) {
    if (questions[currentQuestion].answer == questions[currentQuestion].choices[answer.id]) {
        score += 5;
        displayMessage("Correct!");
        elementColor.classList.add("correct")
        messageEl.setAttribute("style", "background-color: #16BB1B; color: black; font-size: 20px");
    }
    else {
        timeLeft += 10;
        displayMessage("Wrong...");
        elementColor.classList.add("wrong")
        messageEl.setAttribute("style", "background-color: #BB1616; color: white; font-size: 20px")
    }
}

//Display answer and changes background for 1.5 seconds
function displayMessage(m) {
    messageEl.textContent = m;
    document.getElementById("quiz").appendChild(messageLine);
    document.getElementById("quiz").appendChild(messageEl);
    setTimeout(function () {
            messageLine.remove();
            messageEl.remove();
            elementColor.classList.remove("wrong");
            elementColor.classList.remove("correct");
    }, 700);

}

//hides element
function hide(element) {
    element.style.display = "none";
}

//displays element
function show(element) {
    element.style.display = "block";
}

//reset local variables
function reset() {
    score = 0;
    currentQuestion = 0;
    timeLeft = 0;
    timerEl.textContent = 0;
}

//Randomize questions
function random() {
    randomQuestion = questions.sort(() => Math.random() - .5)
}

//Renders current question
function setQuestion() { 
    questionEl.textContent = questions[currentQuestion].title;
    for (i = 0; i < choicesEl.children.length; i++) {
        choicesEl.children[i].children[0].textContent = `${questions[currentQuestion].choices[i]}`;
    }
}

//Renders high scores stored in local storage
function setScoreList() {
    // Clear content
    scoresEl.innerHTML = "";
    show(highScoresEl);
    highScores = JSON.parse(localStorage.getItem("scores"));
    for (let i = 0; i < highScores.length; i++) {
        let scoreItem = document.createElement("div");
        scoreItem.className += "high-scores";
        console.log(scoreItem)
        scoreItem.setAttribute("style", "background-color: #A8E867; max-width: 100vh");
        scoreItem.textContent = `${(i + 1)}. ${highScores[i].username.toUpperCase().replace(/[0-9]/g, "")} - ${highScores[i].userScore}`;
        scoresEl.appendChild(scoreItem);
    }
}


//displays high scores
viewScoresButtonEl.addEventListener("click", function () {
    hide(startCardEl);
    hide(quizEl);
    hide(inputScoreEl);
    setScoreList();
    stopTimer();
    reset();
});

//starts quiz from the starting card
startQuizButtonEl.addEventListener("click", function () {
    hide(startCardEl);
    startTimer();
    random();
    setQuestion();
    show(quizEl);
});

//when a choice is selected, check answers and show next questions
choicesEl.addEventListener("click", function (e) {
    if (e.target.matches("button")) {
        checkAnswer(e.target);
        nextQuestion();
    }
});

//if initials are input stored it in local storage
submitInitialsButtonEl.addEventListener("click", function () {
    let initValue = initialsEl.value.trim();
    if (initValue) {
        let userScore = { username: initValue, userScore: score};
        initialsEl.value = '';
        highScores = JSON.parse(localStorage.getItem("scores")) || [];
        highScores.push(userScore)
        localStorage.setItem("scores", JSON.stringify(highScores))
        hide(inputScoreEl);
        setScoreList();
        reset();
    }
});

//Goes back to starting card from score card
goBackBtnEl.addEventListener("click", function () {
    hide(highScoresEl);
    show(startCardEl);
});

//resets and clears local storage
resetButtonEL.addEventListener("click", function () {
    highScores = [];
    localStorage.setItem("scores", JSON.stringify(highScores));
    setScoreList();
});

//Questions array
var questions = [
        {   
            title: "What is a programming language that was invented by Brendan Eich, which can add interactivity to a website?",
            choices: ["HTML", "CSS", "JavaScript", "MS Excel"],
            answer: "JavaScript"    
        },
        {
            title: "Is JavaScript a case-sensitve language?",
            choices: [
                "Yes, the language keywords,variables, functions names, and any other identifiers must always be typed with a consistent 'lower case' of letters",
                "Yes, Javascript must always use 'upper case' letters",
                "Yes, the language keywords,variables, functions names, and any other identifiers must always be typed with a combination of 'numbers & symbols' and letters",
                "Yes, it must have a consistent 'capitalization' of letters"
            ],
            answer: "Yes, it must have a consistent 'capitalization' of letters"
        },
        {
            title: "What method will you use to convert a JavaScript value to a JSON string",
            choices: ["JSON.parse()", "JSON.stringify()", "JSON.dumps()", "JSON.loads()"],
            answer: "JSON.stringify()"
        },
        {
            title: "In how many ways a JavaScript can be involved in an HTML file?",
            choices: ["1", "2", "3", "0"],
            answer: "3"
        },
        {
            title: "What is NaN in Javascript?",
            choices: ["Not a Number", "Not a Null", "Not a Nomenclature", "Non artis Natura"],
            answer: "Not a Number"
        },
    ];


