

function computerPlay() {

    // returns randomly rock, paper or scissors
    const option = ['rock', 'paper', 'scissors'];

    let random = Math.floor(Math.random() * 3);
    
    return option[random];

}

computerPlay();

const computerSelection = computerPlay();

const option = "RoCk"
const playerSelection = option.toLowerCase();

function playGame(playerSelection, computerSelection) {

    console.log('Player plays: ' + playerSelection);
    console.log('Computer plays: ' +computerSelection);

    if(playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('Player wins with rock');
    } else if(playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('Computer wins with paper');
    } else if (playerSelection === 'rock' && computerSelection === "rock") {
        console.log('equal game');
    }

    if(playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('Player wins with paper');
    } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('Computer wins with scissors');
    } else if (playerSelection === 'paper' && computerSelection === "paper") {
        console.log('equal game');
    }

    if(playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('Player wins with scissors');
    } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('Computer wins with rock');
    } else if (playerSelection === 'scissors' && computerSelection === "scissors") {
        console.log('equal game');
    }
  

}

playGame(playerSelection, computerSelection);