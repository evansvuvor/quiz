const quizForm = document.getElementById('quiz-form');
const startQuizBtn = document.getElementById('start-quiz-btn');
const questionsContainer = document.getElementById('questions-container');
const submitQuizBtn = document.getElementById('submit-quiz-btn');
const quizResult = document.getElementById('quiz-result');
let questions = [];

// Load questions from database
function loadQuestions() {
  fetch('api/questions')
    .then(response => response.json())
    .then(data => {
      questions = data.questions;
      shuffleQuestions();
      displayQuestions();
    })
    .catch(error => console.error(error));
}

// Shuffle questions array
function shuffleQuestions() {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
}

// Display quiz form and questions
function startQuiz() {
  // Load questions from database
  loadQuestions();
  
  // Hide start quiz button
  startQuizBtn.style.display = 'none';
  
  // Show quiz form
  quizForm.style.display = 'block';
}

// Create HTML for questions
function displayQuestions() {
  let questionsHTML = '';
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const optionsHTML = question.options.map(option => `
      <div>
        <input type="radio" id="question${i}-option${option}" name="question${i}" value="${option}" required>
        <label for="question${i}-option${option}">${option}</label>
      </div>
    `).join('');
    
    questionsHTML += `
      <div>
        <h2>${i + 1}. ${question.question}</h2>
        ${optionsHTML}
      </div>
      <br>
    `;
  }
  
  questionsContainer.innerHTML = questionsHTML;
}

// Validate quiz answers and display result
function submitQuiz(event) {
  event.preventDefault();
  
  const name = document.getElementById('name-input').value;
  const answers = [];
  
  for (let i = 0; i < questions.length; i++) {
    const selectedOption = document.querySelector(`input[name="question${i}"]:checked`);
    if (selectedOption) {
      answers.push(selectedOption.value);
    }
  }
  
  if (answers.length !== questions.length) {
    alert('Please answer all questions');
    return;
  }
  
  // Send answers to server for validation
  fetch('api/answers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      answers: answers
    })
  })
  .then(response => response.json())
  .then(data => {
    // Display quiz result
    const resultHTML = `
      <h2>Quiz Result for ${data.name}</h2>
      <p>Score: ${data.score} out of ${questions.length}</p>
    `;
    quizResult.innerHTML = resultHTML;
    
    // Hide quiz form and show result
    quizForm.style.display = 'none';
    quizResult.style.display = 'block';
  })
  .catch(error => console.error(error));
}

// Attach event listeners
startQuizBtn.addEventListener('click', startQuiz);
submitQuizBtn.addEventListener('click', submitQuiz);
