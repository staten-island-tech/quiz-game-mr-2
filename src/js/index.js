/*const startButton = document.getElementById("#start-btn");
startButton.addEventListener("click", function (e) {
  console.log(e.target);
  console.log(e);
});

const questions = [
  {
    questionContent: "What is shinier than diamonds in the sky?"
  }
  {
    choices: "Not my future", "Maybe, diamonds?", "Mr.Henriques's head", "Mr. Whalen's head in a zoom meeting.", "Dwayne Johnson's head.",
    
  }
];*/

let count = 0;
function i() {
  choices = document.getElementById("question");
  if (count < choices.length) choices[count++].style.display = "question";
}

const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
    },
    correctAnswer: "c",
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm",
    },
    correctAnswer: "c",
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint",
    },
    correctAnswer: "d",
  },
];
