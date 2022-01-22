function game(){
    let eleccion= prompt("What's your choice? (rock - paper - scissors");
    let playerSelection = eleccion.toUpperCase();
    let computerSelection = computerChoice();
    round(playerSelection, computerSelection);
}

function computerChoice(){
    let numeroRandom = Math.random();
    let computerChoice;
    if(numeroRandom<0.33)                               { computerChoice = 'Rock' }
    else if (numeroRandom>=0.33 && numeroRandom<0.66)   { computerChoice = 'Paper'}
    else                                                { computerChoice = 'Scissors'}
    return computerChoice;
}


function round(playerSelection, computerSelection){
    if( playerSelection.toUpperCase() == computerSelection.toUpperCase()){
        console.log('It\'s a tie, computer choose: ' + computerSelection);
    }
    else if (playerSelection.toUpperCase() == 'ROCK'){
        if(computerSelection.toUpperCase() == 'PAPER')      {return console.log('You lose, computer choose: paper')    }
        else                                                {return console.log('You win! computer choose: scissors')  }
    }
    else if (playerSelection.toUpperCase() == 'PAPER'){
        if(computerSelection.toUpperCase() == 'SCISSORS')   {return console.log('You lose, computer choose: scissors') }
        else                                                {return console.log('You win! computer choose: rock')      }
    }
    else if (playerSelection.toUpperCase() == 'SCISSORS'){
        if(computerSelection.toUpperCase() == 'ROCK')       {return console.log('You lose, computer choose: rock')     }
        else                                                {return console.log('You win! computer choose: paper')     }
    }
    else    {console.log('pls, try to choose between these option: rock, paper or scissors')}
}

//Prueba de funcionamiento del sistema de elección
function pruebaTiro(){
    for(i = 0; i <10; i++){
        let prueba = computerSelection();
        console.log(prueba);
    }
}

game();

