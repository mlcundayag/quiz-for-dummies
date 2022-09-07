# Web APIs Challenge: Code Quiz

## Table of Contents

* [Description](#description)
* [Screenshot](#screenshot)
* [Links](#links)

## Description
This challenge requires me to apply my knowledge in HTML, CSS & JavaScript. I was given the task to create a timed quiz. Further, the quiz should be able to create a scoring system which can be viewed and stored. The quiz should also penalize the user for every incorrect answer. 

I divided the tasks into three steps:
* HTML - I started with creating my html template. I divided it into parts, or as I called it, "cards". First card consist of the start button and the mechanics of the quiz. Second card is the quiz proper. And lastly, is the result page where user will input their initials and view their scores. 

The top part of the quiz has the timer and the view high score section. When the user view the high score the lists of scores will populate which they can clear, if they want to.

* CSS - First I created the generic reset css. For my main style css, I used flex to arrange the choices in my questions and media query to properly view it in smaller screens. I also added correct and wrong properties which can be triggered by JavaScript to show effects when the user picked the correct or wrong option.  

* JS - As usual, I started with declaring my variables. I also created my a set of questions and answer in which I placed at the end of my script. Then I created my functions; timer, setting up the next answeer, checking the answers, displaying messages and color changing when user gets a correct or wrong answer, hide and show elements, resetting the scores and randomizing the questions. I also set up functions to render questions and scores list. Lastly, I added my event listeners for every user interaction, such as, viewing the highscores, start button, selecting answers from the choices, go back button on the high score page and the reset button to clear the highscores. 


## Screenshot
- HTML
![HTML Screenshot](./assets/images/html%20screenshot.png)
- CSS
![CSS Screenshot](./assets/images/css%20style%20screenshot.png)
- JS
![JavaScript Screenshot](./assets/images/js%20screenshot.png)
- Website
![Website(Desktop)](./assets/images/Desktop%20Screenshot%20-1.png)
![Website(Desktop)](./assets/images/Desktop%20Screenshot%20-2.png)
![Website(Mobile)](./assets/images/Mobile%20Screenshot.jpeg)

## Links
1. [Website](https://mlcundayag.github.io/quiz-for-dummies/)
2. [Github](https://github.com/mlcundayag/quiz-for-dummies)
