
// refactored code


let playerScore = 0;
let computerScore = 0;

function computerPlay() {

    const option = ['rock', 'paper', 'scissors'];

    let random = Math.floor(Math.random() * 3);

    
    return option[random];
};


function playerPlay() {

    let input = prompt('Please enter input');

    let option = input.toLowerCase();
    
    return option
}


function playRound(playerSelection, computerSelection) {

    if(playerSelection === computerSelection) {

        return 'It is a tie';
    }

    if(playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            playerScore++;
            return 'Player wins with rock';
        } else if(computerSelection === 'paper') {
            computerScore++;
            return 'Computer wins with paper';
        }
    }

    if(playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++;
            return 'Player wins with paper';
        } else if(computerSelection === 'scissors') {
            computerScore++;
            return 'Computer wins with scissors';
        }
    }

    if(playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            playerScore++;
            return 'Player wins with scissors';
        } else if(computerSelection === 'rock') {
            computerScore++;
            return 'Computer wins with rock';
        }
    }
}

function game() {

    for (var i = 1; i <= 5; i++) {

        let computerSelection = computerPlay();
        let playerSelection = playerPlay();

        playRound(computerSelection, playerSelection);

        
        console.log('compputer selects: ' + computerSelection);
        console.log('player selects: ' + playerSelection);
        console.log('playerscore: ' + playerScore);
        console.log('computerscore: ' + computerScore);

        

    }

    console.log('Final score player: ' + playerScore);
    console.log('Final score computer: ' + computerScore);
    decideWinner(playerScore, computerScore);
    
}


function decideWinner(playerScore, computerScore) {

    console.log('decide player: ' + playerScore);
    console.log('decide computer: ' + computerScore);
    
    if(playerScore > computerScore) {
        console.log('You won');
    } else if (playerScore < computerScore) {
        console.log('sorry, you lost! try again');
    } else if (playerScore === computerScore) {
        console.log('it is a draw!');
    }
    
}

game();















/*

let playerScore = 0;
let computerScore = 0;

/*
const playerSelection = playerPlay();
const computerSelection = computerPlay();
*/

// computer select function
/*
function computerPlay() {

    const option = ['rock', 'paper', 'scissors'];

    let random = Math.floor(Math.random() * 3);
    
    return option[random];
}

// console.log('Computer: ' + computerSelection);

// player select function
function playerPlay() {

    const input = prompt('Please enter input');

    const option = input.toLowerCase();
    
    return option;
}

// console.log('Player: ' + playerSelection);


// play 1 single round
function playRound(playerSelection, computerSelection) {

    if(playerSelection === computerSelection) {
        return 'It is a tie';
    }


    if(playerSelection === 'rock') {

        if(computerSelection === 'scissors') {
            playerScore++;
            return 'Player wins with rock';
        } else if(computerSelection === 'paper') {
            computerScore++;
            return 'Computer wins with paper'
        }
    }

    if(playerSelection === 'paper') {

        if(computerSelection === 'rock') {
            playerScore++;
            return 'Player wins with paper';
        } else if(computerSelection === 'scissors') {
            computerScore++;
            return 'Computer wins with scissors';
        }
    }

    if(playerSelection === 'scissors') {

        if(computerSelection === "paper") {
            playerScore++;
            return 'Player wins with scissors';
        } else if(computerSelection === 'rock') {
            computerScore++;
            return 'Computer wins with rock';
        }
    }

}
*/
// console.log(playRound(playerSelection, computerSelection));
// playRound(playerSelection, computerSelection);

/*
console.log('Player: ' + playerScore);
console.log('Computer: ' + computerScore);
*/

// game

/*
function game() {

    for(var i = 1; i <= 5; i++) {

        const playerSelection = playerPlay();
        const computerSelection = computerPlay();

        console.log('Player: ' + playerSelection);
        console.log('Computer: ' + computerSelection);
        console.log('Player: ' + playerScore);
        console.log('Computer: ' + computerScore);
       
       playRound(playerSelection, computerSelection);
    }

    console.log('Final Player: ' + playerScore);
  console.log('Final Computer: ' + computerScore);

}

game();
*/
/*
function game() {
    for (i = 0; i <= 5; i++) {
      var playerSelection = playerPlay();
      var computerSelection = computerPlay();
      playRound(playerSelection, computerSelection);
      console.log('Computer: ' + computerSelection);
      console.log('Player: ' + playerSelection);
      console.log('Player: ' + playerScore);
      console.log('Computer: ' + computerScore);
    }
    console.log('Final Player: ' + playerScore);
    console.log('Final Computer: ' + computerScore);
  
  }
  
  game();
*/
/*
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
const option = prompt('Please enter your input')

const playerSelection = option.toLowerCase();
console.log(playerSelection);


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


    playRound(playerSelection, computerSelection);
    
}

game()
*/


