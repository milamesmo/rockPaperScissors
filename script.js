let score = {
  Wins: 0,
  Losses: 0,
  Ties: 0,
};

function upgradeScore(result) {
  if (result === "Tie") {
    score.Ties += 1;
  } else if (result === "Win") {
    score.Wins += 1;
  } else {
    score.Losses += 1;
  }
}

const btnReset = document.querySelector(".btn__reset");

const resetConfirmation = document.querySelector(".reset__confirmation");
const btnResetConfirm = document.querySelector(".btn__confirm");
const btnResetClose = document.querySelector(".btn__close");

btnReset.addEventListener("click", () => reset());

function reset(){
  resetConfirmation.style.display = "block";
}


btnResetConfirm.addEventListener("click", () => {
  ((score.Wins = 0), (score.Losses = 0), (score.Ties = 0));

  document.querySelector(".wins").innerHTML = `${score.Wins}`;
  document.querySelector(".ties").innerHTML = `${score.Ties}`;
  document.querySelector(".losses").innerHTML = `${score.Losses}`;

  document.querySelector(".showResult").innerHTML = ``;

  resetConfirmation.style.display = "none";
});

btnResetClose.addEventListener(
  "click",
  () => (resetConfirmation.style.display = "none"),
);


let isAutoPlaying = false;
let intervalId;

const autoBtn = document.querySelector('.auto-play-button');

autoBtn.addEventListener('click', ()=> autoPlay())

function autoPlay () {

  if (!isAutoPlaying) {
    intervalId = setInterval(function () {
      const playerChoice = pickComputerMove();
      play(playerChoice);
      autoBtn.innerHTML = "Stop";
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    autoBtn.innerHTML = "Auto Play";
  }
};

document.querySelector(".btn__rock").addEventListener("click", () => {
  play("Rock");
});

document.querySelector(".btn__paper").addEventListener("click", () => {
  play("Paper");
});

document.querySelector(".btn__scissors").addEventListener("click", () => {
  play("Scissors");
});

document.body.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    play("Rock");
  } else if (event.key === "p") {
    play("Paper");
  } else if (event.key === "s") {
    play("Scissors");
  } else if (event.key === "a") {
    autoPlay();
  } else if (event.key === "Backspace") {
    reset();
  }
});

function play(playerChoice) {
  const computerChoice = pickComputerMove();
  let result = "";

  if (computerChoice === playerChoice) {
    result = "Tie";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    result = "Win";
  } else {
    result = "Lose";
  }

  upgradeScore(result);

  document.querySelector(".wins").innerHTML = `${score.Wins}`;
  document.querySelector(".ties").innerHTML = `${score.Ties}`;
  document.querySelector(".losses").innerHTML = `${score.Losses}`;

  document.querySelector(".showResult").innerHTML =
    `You picked ${playerChoice}. Computer picked ${computerChoice}. ${result}`;
}

function pickComputerMove() {
  let randomNumber = Math.random();

  if (randomNumber <= 0.33) {
    computerChoice = "Rock";
  } else if (randomNumber <= 0.66) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }

  return computerChoice;
}
