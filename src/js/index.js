const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  //console.log("Started");
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "What is shinier than diamonds in the sky?",
    answers: [
      { text: "Not my future.", value: 1 },
      { text: "Diamonds?", value: -1 },
      { text: "Mr. Henriques's head.", value: 1 },
      { text: "Mr. Whalen's head in a zoom meeting.", value: -1 },
    ],
  },
  {
    question: "Why is the Sky Blue?",
    answers: [
      { text: "The Smurfs live in the sky.", value: 1 },
      { text: "Wavelenghts of light", value: -1 },
      { text: "The Sun poops blue", value: 1 },
      { text: "Because Blue finally found the clue.", value: -1 },
    ],
  },
  {
    question: "Why is putting 'milk or cereal first' something to debate?",
    answers: [
      { text: "I don't know, that's why I don't eat cereal.", value: 1 },
      { text: "Does it really matter?", value: -1 },
      { text: "Because people have nothing better to do.", value: 1 },
      { text: "I dump them both together.", value: -1 },
    ],
  },
  {
    question: "What does life mean to you?",
    answers: [
      { text: "Crying", value: 1 },
      { text: "My Birth Certificate", value: -1 },
      { text: "Always Mid-life Crisis", value: 1 },
      { text: "Idk, what is life really?", value: -1 },
    ],
  },
  {
    question: "What should you do when there is no electricity?",
    answers: [
      { text: "Is that even possible?", value: 1 },
      { text: "Light a candle and zen.", value: -1 },
      { text: "I produce my own electricity.", value: 1 },
      { text: "Break my leg and go to the hospital for free Wifi.", value: -1 },
    ],
  },
  {
    question: "Who created the English?",
    answers: [
      { text: "Ziegen", value: 1 },
      { text: "MichealAnglo Saxons", value: -1 },
      { text: "The Donkeys.", value: 1 },
      { text: "I did, I created Engide.", value: -1 },
    ],
  },
  {
    question: "Why did you go to the doctor?",
    answers: [
      { text: "I wanted to taste Lysol", value: 1 },
      { text: "Didn't eat the apple.", value: -1 },
      { text: "Did a backflip but didn't land on my feet.", value: 1 },
      { text: "The doctor gives me free lollipop.", value: -1 },
    ],
  },
  {
    question: "What do you want to be?",
    answers: [
      { text: "Robert Downey Jr.", value: 1 },
      { text: "My mom told me I can't do anything in life right.", value: -1 },
      { text: "A twig.", value: 1 },
      { text: "What a joke.", value: -1 },
    ],
  },
];
