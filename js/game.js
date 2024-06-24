document.addEventListener("DOMContentLoaded", () => {
    let questions = [];
    let game = document.getElementById('game');
    let loader = document.getElementById('loader');
    let questionElement = document.getElementById('question');
    let choices = Array.from(document.getElementsByClassName('choice-text'));
    let progressText = document.getElementById('progressText');
    let progressBarFull = document.getElementById('progressBarFull');
    let scoreText = document.getElementById('score');

    const CORRECT_BONUS = 10;
    const MAX_QUESTIONS = 10;

    let currentQuestion = {};
    let acceptingAnswers = false;
    let score = 0;
    let questionCounter = 0;
    let availableQuestions = [];

    async function fetchQuestions() {
        try {
            const response = await fetch('http://localhost:3000/API/questions');
            const loadedQuestions = await response.json();
            
            questions = loadedQuestions.map(loadedQuestion => {
                const formattedQuestion = {
                    question: loadedQuestion.question,
                };

                const answerChoices = [...loadedQuestion.incorrect_answers];
                formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
                answerChoices.splice(formattedQuestion.answer - 1, 0, loadedQuestion.correct_answer);

                answerChoices.forEach((choice, index) => {
                    formattedQuestion['choice' + (index + 1)] = choice;
                });

                return formattedQuestion;
            });

            startGame();
        } catch (error) {
            console.error(error);
        }
    }

    function startGame() {
        questionCounter = 0;
        score = 0;
        availableQuestions = [...questions];
        getNewQuestion();
        game.classList.remove('hidden');
        loader.classList.add('hidden');
    }

    function getNewQuestion() {
        if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
            localStorage.setItem('mostRecentScore', score);
            return window.location.assign('./end.html');
        }

        questionCounter++;
        progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
        progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

        const questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions[questionIndex];
        questionElement.innerText = currentQuestion.question;

        choices.forEach(choice => {
            const number = choice.dataset['number'];
            choice.innerText = currentQuestion['choice' + number];
        });

        availableQuestions.splice(questionIndex, 1);
        acceptingAnswers = true;
    }

    choices.forEach(choice => {
        choice.addEventListener('click', e => {
            if (!acceptingAnswers) return;

            acceptingAnswers = false;
            const selectedChoice = e.target;
            const selectedAnswer = selectedChoice.dataset['number'];

            const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

            if (classToApply === 'correct') {
                incrementScore(CORRECT_BONUS);
            }

            selectedChoice.parentElement.classList.add(classToApply);

            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply);
                getNewQuestion();
            }, 1000);
        });
    });

    function incrementScore(num) {
        score += num;
        scoreText.innerText = score;
    }

    fetchQuestions();
});