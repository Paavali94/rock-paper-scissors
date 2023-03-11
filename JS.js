let playerScore = 0;
let computerScore = 0;
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
let playerChoice;
let computerChoice;


// I had a problem here that my buttons didn't work. The solution to this was to wrap button functions in this way, so the html gets readed first and doesnt return buttons as 'null'
document.addEventListener('DOMContentLoaded', function(){
  const rockBtn = document.getElementById("rockBtn");
  const paperBtn = document.getElementById("paperBtn");
  const scissorsBtn = document.getElementById("scissorsBtn");

  rockBtn.addEventListener('click', function() {
    playerChoice = 'rock';
    computerChoice = generated();
    console.log(`Player chose ${playerChoice}, computer chose ${computerChoice}`);
    playRound();
  });

  paperBtn.addEventListener('click', function() {
    playerChoice = 'paper';
    computerChoice = generated();
    console.log(`Player chose ${playerChoice}, computer chose ${computerChoice}`);
    playRound();
  });

  scissorsBtn.addEventListener('click', function() {
    playerChoice = 'scissors';
    computerChoice = generated();
    console.log(`Player chose ${playerChoice}, computer chose ${computerChoice}`);
    playRound();
  });
});

function generated() {
const randomNumber = Math.random();
if (randomNumber < 0.33) {
  return 'rock';
} else if (randomNumber < 0.67) {
  return 'paper';
} else {
  return 'scissors';
}
}

function playRound() {
  if (playerScore === 5) {
    alert('You won the game! Congratutalions!');
  } else if (computerScore === 5) {
    alert('You lost the game. Better luck next time!');
  }
   else if (playerChoice === computerChoice) {
  alert(`Player chose ${playerChoice}, computer chose ${computerChoice}. it's a tie!`);


} else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
          (playerChoice === 'scissors' && computerChoice === 'paper') ||
          (playerChoice === 'paper' && computerChoice === 'rock')) {
  alert(`Player chose ${playerChoice}, computer chose ${computerChoice}. You won!`);
playerScore++;
document.getElementById('playerScore').innerText = `Player: ${playerScore}`; 

} else {
  alert(`Player chose ${playerChoice}, computer chose ${computerChoice}. You lost!`);
  computerScore++;
document.getElementById('computerScore').innerText = `Computer: ${computerScore}`; 
  }
};