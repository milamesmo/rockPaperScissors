let score = {
    Wins: 0,
    Losses: 0,
    Ties: 0
}

function upgradeScore(){
    if (result === "Tie"){
        score.Ties += 1;
    }else if(result === "Win"){
        score.Wins += 1
    }else{score.Losses += 1}
}

function reset(){
   score.Wins= 0,
   score.Losses= 0,
score.Ties = 0;  

document.querySelector('.wins').innerHTML =`${score.Wins}`; 
document.querySelector('.ties').innerHTML =`${score.Ties}`;
document.querySelector('.losses').innerHTML =`${score.Losses}`;

document.querySelector('.showResult').innerHTML = ``
} 



function play(playerChoice) {
  let randomNumber = Math.random();
  let computerChoice = "";

  if (randomNumber <= 0.33) {
    computerChoice = "Rock";
  } else if (randomNumber <= 0.66) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }

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

  upgradeScore()

document.querySelector('.wins').innerHTML =`${score.Wins}`; 
document.querySelector('.ties').innerHTML =`${score.Ties}`;
document.querySelector('.losses').innerHTML =`${score.Losses}`;

document.querySelector('.showResult').innerHTML = `You picked ${playerChoice}. Computer picked ${computerChoice}. ${result}`

}


