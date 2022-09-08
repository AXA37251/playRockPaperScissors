//declaro un array de botones, a partir de la selección
const buttons = document.querySelectorAll('button');
//para c/u, agrego una escucha que dispara la ronda
buttons.forEach((button) => {
    button.addEventListener('click', () => {
      let playerSelection = button.id.toString();
      playRound(playerSelection);               
    });
});

function playRound(playerSelection){
    let playerWeapon = playerSelection;
    let computerWeapon = computerChoice();
    round(playerWeapon, computerWeapon);
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

function round(playerWeapon, computerWeapon){
    if( playerSelection.toUpperCase() == computerWeapon.toUpperCase()){
        console.log('It\'s a tie, computer choose: ' + computerWeapon);
    }
    else if (playerWeapon.toUpperCase() == 'ROCK'){
        if(computerWeapon.toUpperCase() == 'PAPER'){
            return console.log('You lose, computer choose:' + computerWeapon)}
        else{
            return console.log('You win! computer choose:' + computerWeapon)}
    }
    else if (playerWeapon.toUpperCase() == 'PAPER'){
        if(computerWeapon.toUpperCase() == 'SCISSORS'){
            return console.log('You lose, computer choose: ' + computerWeapon)}
        else{
            return console.log('You win! computer choose: ' + computerWeapon)}
    }
    else if (playerWeapon.toUpperCase() == 'SCISSORS'){
        if(computerWeapon.toUpperCase() == 'ROCK'){
            return console.log('You lose, computer choose: ' + computerWeapon)}
        else{
            return console.log('You win! computer choose: '  + computerWeapon)}
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



