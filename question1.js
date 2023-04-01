// Get the container element
const container = document.querySelector(".container");
//const username = document.getElementById('username');

// Create a function to generate the quiz HTML
function generateQuizHTML(questions) {
  // Create a form element
  const form = document.createElement("form");
  form.setAttribute("id", "quiz-form");

  // Create a label and input field for the user's name
  // const nameLabel = document.createElement("label");
  // nameLabel.setAttribute("for", "name-input");
  // nameLabel.textContent = "Enter your name: ";
  // const nameInput = document.createElement("input");
  // nameInput.setAttribute("type", "text");
  // nameInput.setAttribute("id", "name-input");
  // nameInput.setAttribute("required", true);

  // // Add the name label and input to the form
  // form.appendChild(nameLabel);
  // form.appendChild(nameInput);

  // Loop through each quiz question
  questions.forEach((question, index) => {
    // Create a div for each question
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    // Create a heading for the question number
    const questionNumber = index + 1;
    const questionHeading = document.createElement("h2");
    questionHeading.textContent = "Question " + questionNumber + ":";

    // Create a paragraph element for the question text
    const questionText = document.createElement("p");
    questionText.textContent = question.question;

    // Create a div for the radio button options
    const optionsDiv = document.createElement("div");

    // Loop through each option and create a radio button with label
    question.options.forEach((option, optionIndex) => {
      const optionLabel = document.createElement("label");
      const optionRadio = document.createElement("input");
      optionRadio.setAttribute("type", "radio");
      optionRadio.setAttribute("name", "q" + questionNumber);
      optionRadio.setAttribute("value", option);
      optionLabel.appendChild(optionRadio);
      optionLabel.appendChild(document.createTextNode(" " + option));
      optionsDiv.appendChild(optionLabel);
      optionsDiv.appendChild(document.createElement("br"));
    });

    // Add the question heading, question text, and options to the question div
    questionDiv.appendChild(questionHeading);
    questionDiv.appendChild(questionText);
    questionDiv.appendChild(optionsDiv);

    // Add the question div to the form
    form.appendChild(questionDiv);

  });

  // get submit button by id
  const submitButton = document.getElementById('submit');
  //submitButton.setAttribute("type", "submit");
  //submitButton.textContent = "Submit Answers";

  // Add an event listener to the submit button to handle the form submission
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const name = nameInput.value;
    const answers = new FormData(form);
    const result = calculateResult(answers);
    displayResult(name, result);

    localStorage.setItem('username', nameInput.value);

    //redirecting the user to home page
    window.location.href='endQiz.html'

  });

  // Add the submit button to the form
  form.appendChild(submitButton);

  // Add the form to the container
  container.appendChild(form);
}

// Calculate the result based on the user's answers
function calculateResult(answers) {
// TODO: implement the result calculation based on the quiz answers
}

// Display the result to the user
function displayResult(name, result) {
  const resultTitle = document.getElementById("result-title");
  const resultText = document.getElementById("result-text");
  resultTitle.textContent = "Result for " + name + ":";
  resultText.textContent = result;
  const resultsDiv = document.getElementById("results");
  resultsDiv.classList.remove("hide");
}
// Fetch the quiz questions from a JSON file
fetch("questions.json")
  .then(response => response.json())
  .then(data => generateQuizHTML(data));
