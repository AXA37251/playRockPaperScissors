let computerScore = 0;
let playerScore = 0;
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.computer-score');

const computerPlay = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors'];
    const generatedNum = Math.floor(Math.random()*parseInt(arrOfChoices.length))
    return arrOfChoices[generatedNum];
}

const playRound = (playerSelection, computerSelection) => {
    const p = document.createElement('p');
    if(playerSelection===computerSelection){
        p.innerText = "You tied! you both picked " + playerSelection;
        //p.innerHTML = <p>You tied! you both picked ${playerSelection}</p>
    }else if(playerSelection==='scissors' && computerSelection==='rock') {
        p.innerText = "You lost! the opponent's rock have crushed your scissors.";
        computerScore++;
    }else if(playerSelection==='scissors' && computerSelection==='paper'){
        p.innerText = "Your scissors have sliced your opponent's paper!";
        playerScore++;
    }else if(playerSelection==='rock' && computerSelection==='paper'){
        p.innerText = "You lost! your rock has been strangled by your opponent paper.";
        computerScore++;
    }else if(playerSelection==='rock' && computerSelection==='scissors') {
        p.innerText = "Your rock has pulverized your opponent's scissors!";
        playerScore++;
    }else if(playerSelection==='paper' && computerSelection==='scissors'){
        p.innerText = "You lost! your opponent's scissors have ripped your paper.";
        computerScore++;
    }else if(playerSelection==='paper' && computerSelection==='rock'){
        p.innerText = "Your paper has smothered your opponent's rock!";
        playerScore++;
    }
    outcomeDiv.appendChild(p);
}

const checkForWinner = (playerScore,computerScore) => {
    const h2 = document.createElement('h2');
    if(playerScore === 5){
        h2.classList.add('Player-won');
        h2.innerText = 'You won! '+ playerScore +' to '+ computerScore;
    }
    if(computerScore === 5){
        h2.classList.add('Computer-won');
        h2.innerText = 'Computer won! '+ computerScore +' to ' + playerScore;
    }
    outcomeDiv.append(h2);
}

const updateSpanScores = (playerScore,computerScore) => {
    playerScoreSpan.innerText = 'player score: '+ playerScore;
    computerScoreSpan.innerText = 'computer score: '+ computerScore;
}

rockButton.addEventListener('click', () =>{
    const computerSelection = computerPlay();
    const playerSelection = 'rock';
    playRound(playerSelection,computerSelection);
    updateSpanScores(playerScore,computerScore);
    checkForWinner(playerScore,computerScore);
} );
paperButton.addEventListener('click', () =>{
    const computerSelection = computerPlay();
    const playerSelection = 'paper';
    playRound(playerSelection,computerSelection);
    updateSpanScores(playerScore,computerScore);
    checkForWinner(playerScore,computerScore);
} );
scissorsButton.addEventListener('click', () =>{
    const computerSelection = computerPlay();
    const playerSelection = 'scissors';
    playRound(playerSelection,computerSelection);
    updateSpanScores(playerScore,computerScore);
    checkForWinner(playerScore,computerScore);
} );

/*
otra implementación posible es:
const choiceButtons = document.querySelectorALL('.choiceButton');

choiceButton.forEach(button =>{
    button.addEventListener('click', ()=>{
        const computerSelection = computerPlay();
        const playerSelection = ${button.value};    //revisar cómo cargar este valor
        playRound(playerSelection,computerSelection);
        updateSpanScores(playerScore,computerScore);
        checkForWinner(playerScore,computerScore);
    })
})
*/


