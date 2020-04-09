
// refactored code


let playerScore = 0;
let computerScore = 0;

function computerPlay() {

    const option = ['rock', 'paper', 'scissors'];

    let random = Math.floor(Math.random() * 3);

    
    return option[random];
};

/*
function playerPlay() {

    let input = prompt('Please enter input');

    let option = input.toLowerCase();
    
    return option
}
*/

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




function decideWinner(playerScore, computerScore) {
   
    if(playerScore === 5) {
        
        announcement.textContent = 'You won!';
        announcement.style.color = 'green';
        
       // console.log('you won');
       
    } else if (computerScore === 5) {
        announcement.textContent = 'Sorry, you lost! Try again!';
        announcement.style.color = 'red';
    
      //  console.log('you lost!');
     
    } 
}


function gameReset(playerScore, computerScore) {

   playerScore = 0;
   computerScore = 0;
   document.querySelector('#playerScore').textContent = playerScore;
   document.querySelector('#computerScore').textContent = computerScore;
   announcement.textContent = "";
}





document.addEventListener('DOMContentLoaded', function() {

   
    // event listeners

    const buttons = document.querySelectorAll('.btn');
    
    let playerSelection;
    let result;
    
const announcement = document.querySelector('#announcement');
    


    buttons.forEach( button => {

        button.addEventListener('click', function() {

            if(button.classList.contains('rock')) {
                // console.log('this is rock');
                playerSelection = 'rock';
                computerSelection = computerPlay();
   
                //console.log('player choice is: ' + playerSelection);
                document.querySelector('#computer').textContent = computerSelection
                // console.log('computer choice is: ' + computerSelection);
                result = playRound(playerSelection, computerSelection);
                document.querySelector('#result').textContent = result;
        
                
                decideWinner(playerScore, computerScore);
                document.querySelector('#playerScore').textContent = playerScore;
                document.querySelector('#computerScore').textContent = computerScore;
                
                // console.log(playRound(playerSelection, computerSelection));
             
            } else if(button.classList.contains('paper')) {
                // console.log('this is paper');
                playerSelection = 'paper';
                computerSelection = computerPlay();
           
                //console.log('player choice is: ' + playerSelection);

                document.querySelector('#computer').textContent = computerSelection
               // console.log('computer choice is: ' + computerSelection);
                result = playRound(playerSelection, computerSelection);
                document.querySelector('#result').textContent = result;
                document.querySelector('#playerScore').textContent = playerScore;
                document.querySelector('#computerScore').textContent = computerScore;
                // console.log(playRound(playerSelection, computerSelection));
                decideWinner(playerScore, computerScore);
            } else if(button.classList.contains('scissors')) {
                // console.log('this is scissors');
                playerSelection = 'scissors';
                computerSelection = computerPlay();
               
                //console.log('player choice is: ' + playerSelection);

                document.querySelector('#computer').textContent = computerSelection
                // sconsole.log('computer choice is: ' + computerSelection);
                result = playRound(playerSelection, computerSelection);
                document.querySelector('#result').textContent = result;
                // console.log(playRound(playerSelection, computerSelection));
                decideWinner(playerScore, computerScore);
                document.querySelector('#playerScore').textContent = playerScore;
                document.querySelector('#computerScore').textContent = computerScore;
              
            }
        })
    })


    // reset button

    document.querySelector('#reset').addEventListener('click', function() {

        playerScore = 0;
        computerScore = 0;
    
        gameReset(playerScore, computerScore);
       
    })
})

/*
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
game();
*/


