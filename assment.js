// Define quiz questions and answers
const questions = [
    {
        question: "What year was the first FIFA World Cup held?",
        options: ["1926", "1940", "1940"],
        correctAnswer: "A"
    },
    {
        question: "Which country has won the most FIFA World Cup titles?",
        options: ["Brazil", "Germany", "Italy"],
        correctAnswer: "A"
    },
    {
        question: "Who is the all-time leading goal scorer in the history of the FIFA World Cup?",
        options: ["Lionel Messi", "Cristiano Ronaldo", "Pelé"],
        correctAnswer: "C"
    },
    {
        question: "Which player has won the most Ballon d'Or awards?",
        options: ["Lionel Messi", "Cristiano Ronaldo", "Pelé"],
        correctAnswer: "A"
    },
    {
        question: "Which stadium is the home of FC Barcelona?",
        options: ["Santiago Bernabéu", "Camp Nou", "Old Trafford"],
        correctAnswer: "B"
    },
    {
        question: "Which club has won the most UEFA Champions League titles?",
        options: [" Real Madrid", "AC Milan", " Liverpool"],
        correctAnswer: "A"
    },
    {
        question: "Who is the current manager of the English national football team?",
        options: ["Gareth Southgate", "Joachim Löw", "Didier Deschamps"],
        correctAnswer: "A"
    },
    {
        question: "Which player has won the most FIFA World Cup Golden Boot awards?",
        options: ["Miroslav Klose", "Neymar Jr", " Thomas Müller"],
        correctAnswer: "C"
    },
    {
    question: "Which country hosted the first-ever FIFA Women's World Cup in 1991?",
    options: ["USA", "China", "Sweden"],
    correctAnswer: "C"
},
    {
        question: "Who won the FIFA Women's World Cup in 2019?",
        options: ["USA", "Netherlands", "Germany"],
        correctAnswer: "C"
    }
];

// Fake authentication
const isAuthenticated = true; // Change to false to simulate unauthorized access

// Function to start the quiz
function startQuiz() {
    if (isAuthenticated) {
        showQuestion(0);
    } else {
        alert("You need to log in to start the quiz.");
    }
}

// Function to display a question
function showQuestion(index) {
    const questionElement = document.getElementById('question');
    const optionA = document.getElementById('optionA-label');
    const optionB = document.getElementById('optionB-label');
    const optionC = document.getElementById('optionC-label');

    const currentQuestion = questions[index];
    questionElement.textContent = currentQuestion.question;
    optionA.textContent = currentQuestion.options[0];
    optionB.textContent = currentQuestion.options[1];
    optionC.textContent = currentQuestion.options[2];

    document.getElementById('quiz-form').addEventListener('submit', function(event) {
        event.preventDefault();
        checkAnswer(index);
    });
}

// Function to check the answer
function checkAnswer(index) {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert("Please select an answer.");
        return;
    }

    const currentQuestion = questions[index];
    const userAnswer = selectedAnswer.value;
    const feedbackElement = document.getElementById('feedback');

    if (userAnswer === currentQuestion.correctAnswer) {
        feedbackElement.textContent = "Correct!";
    } else {
        feedbackElement.textContent = "Incorrect!";
    }

    setTimeout(() => {
        feedbackElement.textContent = "";
        if (index < questions.length - 1) {
            showQuestion(index + 1);
        } else {
            showScore();
        }
    }, 1000);
}

// Function to calculate and display the final score
function showScore() {
    const scoreElement = document.getElementById('score');
    const correctAnswers = questions.filter(question => {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        return selectedAnswer && selectedAnswer.value === question.correctAnswer;
    }).length;
    scoreElement.textContent = `Your score: ${correctAnswers}/${questions.length}`;
}

// Start the quiz when the page loads
window.onload = startQuiz;
