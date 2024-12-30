const questions = [
  {
    question: "What is the capital of France?",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Paris_Eiffelturm.jpg",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: 0
  },
  {
    question: "Which planet is known as the Red Planet?",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Mars_PIA00407.jpg",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: 2
  },
  {
    question: "What is 5 + 3?",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Math.jpg",
    options: ["5", "8", "12", "15"],
    answer: 1
  },
  {
    question: "What is the fastest land animal?",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cheetah_on_the_edge_Luangwa_Valley.jpg",
    options: ["Lion", "Cheetah", "Leopard", "Tiger"],
    answer: 1
  },
  {
    question: "Which is the largest ocean on Earth?",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Blue_ocean_water.jpg",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options");
  const questionImage = document.getElementById("question-image");
  const nextButton = document.getElementById("next-button");

  nextButton.style.display = "none";
  const current = questions[currentQuestion];
  questionElement.textContent = current.question;
  questionImage.src = current.image;
  optionsContainer.innerHTML = "";

  current.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(index);
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selected) {
  const correctAnswer = questions[currentQuestion].answer;
  if (selected === correctAnswer) {
    score++;
  }
  document.getElementById("next-button").style.display = "inline-block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const quizContainer = document.getElementById("quiz-container");
  const resultContainer = document.getElementById("result-container");
  const resultScore = document.getElementById("result-score");
  const resultTitle = document.getElementById("result-title");

  quizContainer.style.display = "none";
  resultContainer.style.display = "block";
  resultScore.textContent = `You scored ${score}/${questions.length}`;

  let title;
  if (score === questions.length) {
    title = "🏆 The Ultimate Trivia Champion!";
  } else if (score >= questions.length / 2) {
    title = "🎓 Trivia Enthusiast";
  } else {
    title = "🤔 The Curious Learner";
  }
  resultTitle.textContent = title;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("result-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  loadQuestion();
}

loadQuestion();
