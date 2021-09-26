let readLineSync = require("readline-sync");

const userName = readLineSync.question("Welcome to the Jurassic Quiz! Enter your username: ");
let score = 0;

console.log("It's time to walk with dinosaurs, " + userName + "! \n");

const questionSet = [
  {
    question: "1. What's Tyrannosaurus Rex also called as? \n",
    answer: "T-Rex",
  },
  {
    question: "2. Which was the smartest dinosaur? \n",
    answer: "Troodon",
  },
  {
    question: "3. Spinosaurus was a herbivore or a carnivore? \n",
    answer: "Carnivore",
  },
  {
    question: "4. How many horns did Triceratops have(in number)? \n",
    answer: "3",
  },
  {
    question: "5. Dinosaur with the longest neck that streched 11-12 metres? \n",
    answer: "Sauroposeidon",
  }
]

function letsPlay(question, answer) {
  let inputAnswer = readLineSync.question(question);

  if (inputAnswer.toLowerCase() == answer.toLowerCase()) {
    console.log("Corrrreectt! The Pteranodons applaud you! :D");
    score++;
  } else {
    console.log("You missed. The Velociraptors are dissapointed! :(");
  }
  console.log("----------------------------------------------------------------\n")
}

for (let i = 0; i < questionSet.length; i++) {
  const currentQuestion = questionSet[i];
  letsPlay(currentQuestion.question, currentQuestion.answer);

}

if (score >= 4) {
  console.log("You're a proper dino nerd! \nYou scored: " + score + "/5");
} else if (score === 3) {
  console.log("Hmm, you do know a bit about the ancient lizards! \nYou scored: " + score + "/5");
} else {
  console.log("You need to study some fossils it seems! \nYou scored: " + score + "/5");
}
