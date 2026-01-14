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

function reset() {
  (score.Wins = 0), (score.Losses = 0), (score.Ties = 0);

  document.querySelector(".wins").innerHTML = `${score.Wins}`;
  document.querySelector(".ties").innerHTML = `${score.Ties}`;
  document.querySelector(".losses").innerHTML = `${score.Losses}`;

  document.querySelector(".showResult").innerHTML = ``;
}

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  const autoBtn = document.querySelector('.auto-play-button');

  if (!isAutoPlaying) {
    intervalId = setInterval(function () {
      const playerChoice = pickComputerMove();
      play(playerChoice);
      autoBtn.innerHTML="Stop";
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    autoBtn.innerHTML="Auto Play";
  }
}

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

  document.querySelector(
    ".showResult"
  ).innerHTML = `You picked ${playerChoice}. Computer picked ${computerChoice}. ${result}`;
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
