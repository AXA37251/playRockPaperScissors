//declaro un array de botones, a partir de la selección
const buttons = document.querySelectorAll('button');
//para c/u, agrego una escucha que dispara la ronda
buttons.forEach((button) => {
    button.addEventListener('click', () => {
      playRound(button.id);               
    });
});

function playRound(playerChoice){
    let playerSelection = playerChoice.toString();
    let computerSelection = computerChoice();
    round(playerSelection, computerSelection);
}

function computerChoice(){
    let numeroRandom = Math.random();
    let computerChoice;
    if(numeroRandom<0.33){ 
        computerChoice = 'Rock' 
    }else if(numeroRandom>=0.33 && numeroRandom<0.66){ 
        computerChoice = 'Paper'
    }else{ 
        computerChoice = 'Scissors'
    } 
    return computerChoice;
}

function round(playerSelection, computerSelection){
    if( playerSelection.toUpperCase() == computerSelection.toUpperCase()){
        console.log('It\'s a tie, computer choose: ' + computerSelection);
    }
    else if (playerSelection.toUpperCase() == 'ROCK'){
        if(computerSelection.toUpperCase() == 'PAPER'){
            return console.log('You lose, computer choose:' + computerSelection)}
        else{
            return console.log('You win! computer choose:' + computerSelection)}
    }
    else if (playerSelection.toUpperCase() == 'PAPER'){
        if(computerSelection.toUpperCase() == 'SCISSORS'){
            return console.log('You lose, computer choose: ' + computerSelection)}
        else{
            return console.log('You win! computer choose: ' + computerSelection)}
    }
    else if (playerSelection.toUpperCase() == 'SCISSORS'){
        if(computerSelection.toUpperCase() == 'ROCK'){
            return console.log('You lose, computer choose: ' + computerSelection)}
        else{
            return console.log('You win! computer choose: '  + computerSelection)}
    }
    else{
        console.log('pls, try to choose between these option: rock, paper or scissors')
    }
}



//Prueba de funcionamiento del sistema de elección
function pruebaTiro(){
    for(i = 0; i <10; i++){
        let prueba = computerSelection();
        console.log(prueba);
    }
}



