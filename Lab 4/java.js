/*
---------------------------------------------------------
    ⭐ JavaScript Console Quiz Game ⭐
    This quiz runs completely in the browser console.
    Concepts used: Arrays, Loops, Functions, Conditionals,
    String Handling (trim + toLowerCase), prompt() and alert()
---------------------------------------------------------
*/

// Step 1: Store quiz questions and answers using an array of objects
const quizQuestions = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "Which planet is known as the Red Planet?", answer: "Mars" },
    { question: "What is 5 + 7?", answer: "12" },
    { question: "Who is the President of Russia?", answer: "Vladimir Putin" },
    { question: "Which language is used for web development?", answer: "JavaScript" }
];

// Step 2: Function to run the quiz
function runQuiz() {

    let score = 0; // Score variable to track correct answers

    // Step 3: Use a loop to ask each question
    for (let i = 0; i < quizQuestions.length; i++) {

        // Take user input
        const userAnswer = prompt(quizQuestions[i].question);

        // Validate and compare input
        if (
            userAnswer &&
            userAnswer.toLowerCase().trim() === quizQuestions[i].answer.toLowerCase().trim()
        ) {
            alert("Correct! 🎉");
            score++;
        } else {
            alert(`❌ Wrong! The correct answer is: ${quizQuestions[i].answer}`);
        }
    }

    // Step 4: Display final score
    alert(`📌 Quiz Completed!\nYour final score is: ${score}/${quizQuestions.length}`);
}

// Step 5: Run the function (can also be called manually)
runQuiz();
