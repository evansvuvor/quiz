//Get element by id
const stButton = document.getElementById('sButton');
//const submitButton = document.getElementById('submit');
const nameInput= document.getElementById('name-input');
// const resultText = document.getElementById('result-text');
// const scoreText = document.getElementById('score-text');
// const quizResults = document.getElementById('quiz-results');


//let score = 0;


//adding event listener to the submit button
stButton.addEventListener('click', () => {
    if (nameInput.value.trim() === '') {
        alert('Please enter your name');
        return;
    }
    
    //store the username in localStorage
    localStorage.setItem('username', nameInput.value);

    //redirecting the user to home page
    window.location.href='home.html'

});

// if (localStorage.getItem('username')) {
//     username.textContent = `welcome, ${localStorage.getItem('username')}`;
// }

// function submitButton(){
//     submitButton.addEventListener('click', () =>{
//         if (confirm('Are you sure you want to submit your answers?')) {
//             submitButton.style.display = 'none';
//         } else{
//             endQuiz();
//         }
//     })
    
// }
// function endQuiz(){
//     const scorePercentage = Math.round(score / quizQuestions.length * 100);

//     //hide quiz questions and show results
//     quizQuestions.style.display = 'none';
//     quizResults.style.display = 'block';

//     //display results
//     resultText.textContent = `Congratulations ${nameInput.value}! You scored ${score} out of ${quizQuestions.length} (${scorePercentage}%)`;
//     if(scorePercentage >= 80){
//         scoreText.textContent = 'Great job, you passed!';
//     } else{
//         scoreText.textContent = 'Sorry, You failed the quiz.';
//     }
// }