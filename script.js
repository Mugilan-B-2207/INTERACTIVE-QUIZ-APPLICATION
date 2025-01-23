const quizData = [
    {
      question: "1. What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyper Text Making Language"
      ],
      correct: 0
    },
    {
      question: "2. Which of the following is the correct way to include a JavaScript file in an HTML document?",
      options: [
        "<script href='script.js'></script>",
        "<script src='script.js'></script>",
        "<script name='script.js'></script>",
        "<script include='script.js'></script>"
      ],
      correct: 1
    },
    {
      question: "3. What is the purpose of the z-index property in CSS?",
      options: [
        "To set the opacity of an element",
        "To control the stacking order of elements",
        "To set the zoom level of an element",
        "To specify the font size"
      ],
      correct: 1
    },
    {
      question: "4. Which CSS property is used to change the text color of an element?",
      options: [
        "color",
        "font-color",
        "text-color",
        "background-color"
      ],
      correct: 0
    },
    {
      question: "5. What does the position: absolute; CSS rule do?",
      options: [
        "Positions the element relative to its parent",
        "Positions the element relative to the nearest positioned ancestor",
        "Positions the element relative to the viewport",
        "Positions the element inline"
      ],
      correct: 1
    },
    {
      question: "6. Which of the following is not a semantic HTML tag?",
      options: [
        "<section>",
        "<div>",
        "<article>",
        "<header>"
      ],
      correct: 1
    },
    {
      question: "7. Which JavaScript method is used to select an element by its ID?",
      options: [
        "getElementByTagName()",
        "getElementById()",
        "querySelectorAll()",
        "getElementsByClassName()"
      ],
      correct: 1
    },
    {
      question: "8. Which of the following is not a valid CSS length unit?",
      options: [
        "px",
        "em",
        "rem",
        "ptp"
      ],
      correct: 3
    },
    {
      question: "9. In JavaScript, what is the output of console.log(typeof null);?",
      options: [
        "\"null\"",
        "\"object\"",
        "\"undefined\"",
        "\"number\""
      ],
      correct: 1
    },
    {
      question: "10. Which attribute is used to provide alternative text for an image in HTML?",
      options: [
        "alt",
        "src",
        "title",
        "description"
      ],
      correct: 0
    },
    {
      question: "11. Which CSS framework is known for its mobile-first approach?",
      options: [
        "Bootstrap",
        "Foundation",
        "Tailwind CSS",
        "Materialize"
      ],
      correct: 0
    },
    {
      question: "12. Which HTML5 tag is used to embed video content?",
      options: [
        "<media>",
        "<video>",
        "<embed>",
        "<source>"
      ],
      correct: 1
    },
    {
      question: "13. What does the this keyword refer to in JavaScript?",
      options: [
        "The current HTML document",
        "The current function scope",
        "The object that called the function",
        "The global window object"
      ],
      correct: 2
    },
    {
      question: "14. How do you create a variable in JavaScript?",
      options: [
        "variable myVar;",
        "var myVar;",
        "myVar variable;",
        "create var myVar;"
      ],
      correct: 1
    },
    {
      question: "15. Which pseudo-class in CSS is used to apply styles to elements when the user hovers over them?",
      options: [
        ":hover",
        ":focus",
        ":active",
        ":checked"
      ],
      correct: 0
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const scoreContainer = document.getElementById("score-container");
  const scoreEl = document.getElementById("score");
  const restartBtn = document.getElementById("restart");
  
  function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
  
    optionsEl.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.dataset.index = index;
      button.classList.add("option");
      button.addEventListener("click", () => validateAnswer(button, index));
      optionsEl.appendChild(button);
    });
  }
  
  function validateAnswer(button, index) {
    const currentQuestion = quizData[currentQuestionIndex];
    const buttons = Array.from(optionsEl.children);
  
    // Highlight the correct and incorrect answers
    buttons.forEach((btn, i) => {
      if (i === currentQuestion.correct) {
        btn.classList.add("correct");
      } else if (i === index) {
        btn.classList.add("wrong");
      }
      btn.disabled = true; // Disable further selection
    });
  
    if (index === currentQuestion.correct) {
      score++;
    }
  
    // Move to the next question after a short delay
    setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < quizData.length) {
        loadQuestion();
      } else {
        showScore();
      }
    }, 1000);
  }
  
  function showScore() {
    document.getElementById("quiz").style.display = "none";
    scoreContainer.style.display = "block";
    scoreEl.textContent = `${score} / ${quizData.length}`;
  }
  
  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("quiz").style.display = "block";
    scoreContainer.style.display = "none";
    loadQuestion();
  });
  
  // Initial load
  loadQuestion();
  