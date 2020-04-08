

function computerPlay() {

    // returns randomly rock, paper or scissors
    const option = ['Rock', 'Paper', 'Scissors'];

    let random = Math.floor(Math.random() * 3);
    
    console.log(option[random], random);

}

computerPlay();