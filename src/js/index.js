const startButton = document.getElementById("#start-btn");
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
];
