const quizQuestions = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "Which planet is known as the Red Planet?", answer: "Mars" },
    { question: "What is 5 + 7?", answer: "12" },
    { question: "Who is the President of Russia?", answer: "Vladimir Putin" },
    { question: "Which language is used for web development?", answer: "JavaScript" }
];


function runQuiz() {

    let score = 0; 


    for (let i = 0; i < quizQuestions.length; i++) {

        
        const userAnswer = prompt(quizQuestions[i].question);

        
        if (
            userAnswer &&
            userAnswer.toLowerCase().trim() === quizQuestions[i].answer.toLowerCase().trim()
        ) {
            alert("Correct!");
            score++;
        } else {
            alert(` Wrong! The correct answer is: ${quizQuestions[i].answer}`);
        }
    }

               
    alert(` Quiz Completed!\nYour final score is: ${score}/${quizQuestions.length}`);
}

// Step 5: Run the function (can also be called manually)
runQuiz();
