// Define the quiz questions and options
const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Rome", "Madrid", "Berlin"],
      answer: "Paris"
    },
    {
      question: "What is the largest continent in the world?",
      options: ["North America", "Europe", "Asia", "South America"],
      answer: "Asia"
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Perth", "Canberra"],
      answer: "Canberra"
    }
  ];
  
  // Get the container element
  const container = document.querySelector(".container");
  
  // Create a function to generate the quiz HTML
  function generateQuizHTML() {
    // Create a form element
    const form = document.createElement("form");
    form.setAttribute("id", "quiz-form");
  
    // Loop through each quiz question
    quizQuestions.forEach((question, index) => {
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
    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Submit Answers";
  
    // Add the submit button to the form
    form.appendChild(submitButton);
  
    // Add the form to the container
    container.appendChild(form);
  }
  
  // Call the function to generate the quiz HTML
  generateQuizHTML();
  