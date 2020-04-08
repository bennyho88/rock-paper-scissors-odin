
let playerScore = 0;
let computerScore = 0;

// gets random option for computer selection 
function computerPlay() {

    // returns randomly rock, paper or scissors
    const option = ['rock', 'paper', 'scissors'];

    let random = Math.floor(Math.random() * 3);

    return option[random];

}

// computerPlay();

const computerSelection = computerPlay();

// input option for player
const option = "RoCk"
const playerSelection = option.toLowerCase();


// play 1 round
function playRound(playerSelection, computerSelection) {

     console.log('Player plays: ' + playerSelection);
     console.log('Computer plays: ' + computerSelection);

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return 'Player wins with rock';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        return 'Computer wins with paper';
    } else if (playerSelection === 'rock' && computerSelection === "rock") {
        return 'equal game';
    }

    if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
       return 'Player wins with paper';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        return 'Computer wins with scissors';
    } else if (playerSelection === 'paper' && computerSelection === "paper") {
        return 'equal game';
    }

    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return 'Player wins with scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        return 'Computer wins with rock';
    } else if (playerSelection === 'scissors' && computerSelection === "scissors") {
        return 'equal game';
    }

}

// console.log(playRound(playerSelection, computerSelection));


// function for play game 5 times 

function game() {

    let playerTurn = prompt('Please enter your option!');

    playRound(playerTurn, computerPlay());
    playRound(playerTurn, computerPlay());
    playRound(playerTurn, computerPlay());
    playRound(playerTurn, computerPlay());
    playRound(playerTurn, computerPlay());

}

game()


