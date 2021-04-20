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

const SCORE_POINTS = 100

function startGame() {
  //console.log("Started");
  score = 0
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
    if (classToApply === 'correct') {
      incrementScore(SCORE_POINTS)
    }
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
      { text: "Not my future.", correct: true },
      { text: "Diamonds?", correct: false },
      { text: "Mr. Henriques's head.", correct: false },
      { text: "Mr. Whalen's head in a zoom meeting.", correct: false },
    ],
  },
  {
    question: "Why is the Sky Blue?",
    answers: [
      { text: "The Smurfs live in the sky.", correct: false },
      { text: "Wavelenghts of light", correct: false },
      { text: "The Sun poops blue", correct: false },
      { text: "Because Blue finally found the clue.", correct: true },
    ],
  },
  {
    question: "Why is putting 'milk or cereal first' something to debate?",
    answers: [
      { text: "I don't know, that's why I don't eat cereal.", correct: false },
      { text: "Does it really matter?", correct: false },
      { text: "Because people have nothing better to do.", correct: true },
      { text: "I dump them both together.", correct: false },
    ],
  },
  {
    question: "What does life mean to you?",
    answers: [
      { text: "Crying", correct: false },
      { text: "My Birth Certificate", correct: false },
      { text: "Always Mid-life Crisis", correct: true },
      { text: "Idk, what is life really?", correct: false },
    ],
  },
  {
    question: "What should you do when there is no electricity?",
    answers: [
      { text: "Is that even possible?", correct: false },
      { text: "Light a candle and zen.", correct: false },
      { text: "I produce my own electricity.", correct: true },
      {
        text: "Break my leg and go to the hospital for free Wifi.",
        correct: false,
      },
    ],
  },
  {
    question: "Who created the English language?",
    answers: [
      { text: "Ziegen", correct: true },
      { text: "MichealAnglo Saxons", correct: false },
      { text: "The Donkeys.", correct: false },
      { text: "I did, I created Engide.", correct: false },
    ],
  },
  {
    question: "Why did you go to the doctor?",
    answers: [
      { text: "I wanted to taste Lysol", correct: true },
      { text: "Didn't eat the apple.", correct: false },
      { text: "Did a backflip but didn't land on my feet.", correct: false },
      { text: "The doctor gives me free lollipop.", correct: false },
    ],
  },
  {
    question: "What do you want to be?",
    answers: [
      { text: "Robert Downey Jr.", correct: false },
      {
        text: "My mom told me I can't do anything in life right.",
        correct: true,
      },
      { text: "A twig.", correct: false },
      { text: "What a joke.", correct: false },
    ],
  },
  {
    question: "Who is Darth Vader?",
    answers: [
      { text: "My dentist.", correct: false },
      { text: "Isn't that the guy from the Masked Singer?", correct: false },
      {
        text: "My dad who didn't come back after leaving to get milk.",
        correct: true,
      },
      { text: "George Washington, that you?", correct: false },
    ],
  },
  {
    question: "Who's that Pokemon?",
    answers: [
      { text: "Micheal Whalenasaur.", correct: false },
      { text: "A turtle who farts fire.", correct: false },
      { text: "Boris Johnson's hairstylist.", correct: true },
      { text: "Spongebob", correct: false },
    ],
  },
  {
    question: "Who is Peppa Pig?",
    answers: [
      { text: "The Queen of England?", correct: true },
      { text: "An English Ambassador", correct: false },
      { text: "Better than me.", correct: false },
      { text: "Someone who should be in my oven.", correct: false },
    ],
  },
  {
    question: "Who sang 'Waka Waka' at the 2010 World Cup?",
    answers: [
      { text: "Shrek ft.Ferb", correct: false },
      { text: "Tsamina mina zangalewa", correct: false },
      { text: "Rebecca Black", correct: false },
      { text: "Bledmir Poutin", correct: true },
    ],
  },
  {
    question: "What is America's favorite food?",
    answers: [
      { text: "Mass produced grass.", correct: false },
      { text: "Hot Dogs?", correct: false },
      { text: "Anything that leads to obesity.", correct: true },
      { text: "Daddy Pig", correct: false },
    ],
  },
  {
    question: "Who are you?",
    answers: [
      { text: "Spiderman's long lost sock.", correct: true },
      { text: "Am I not a child with big brain?", correct: false },
      { text: "A piece of bread.", correct: false },
      { text: "An antique underwear.", correct: false },
    ],
  },
  {
    question: "Why would you work at McDonalds?",
    answers: [
      {
        text: "To become a famous tiktoker by putting ketchup on bread.",
        correct: false,
      },
      { text: "To repair their ice-cream machine.", correct: true },
      { text: "To steal pickles for my goat.", correct: false },
      {
        text: "To become Jeff Bezos rich by making sad sandwiches",
        correct: false,
      },
    ],
  },
];
