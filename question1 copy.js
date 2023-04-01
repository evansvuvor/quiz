// Get the container element
const container = document.querySelector(".container");

// Define the form variable as a global variable
const form = document.createElement("form");
form.setAttribute("id", "quiz-form");

// Create a function to generate the quiz HTML
function generateQuizHTML(questions) {
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

  // Create a submit button
  // const submitButton = document.createElement("button");
  // submitButton.setAttribute("type", "submit");
  // submitButton.textContent = "Submit Answers";

  // Add the submit button to the form
  form.appendChild(submitButton);

  // Add the form to the container
  container.appendChild(form);
}

// Fetch the quiz questions from a JSON file
fetch("questions.json")
  .then(response => response.json())
  .then(data => generateQuizHTML(data));

// Add event listener to the submit button
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const name = document.getElementById("username").textContent;
  const answers = new FormData(form);
  const result = calculateResult(answers);
  displayResult(name, result);

  localStorage.setItem('username', name);

  //redirecting the user to home page
  window.location.href='endQiz.html'
});
