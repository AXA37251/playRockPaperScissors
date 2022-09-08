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
    if(playerSelection===computerSelection){
        const p = document.createElement('p');
        p.innerText = "You tied! you both picked " + playerSelection;
        //p.innerHTML = <p>You tied! you both picked ${playerSelection}</p>
        outcomeDiv.appendChild(p);
    }else if(playerSelection==='scissors' && computerSelection==='rock') {
        const p = document.createElement('p');
        p.innerText = "You lost! the opponent's rock have crushed your scissors.";
        computerScore++;
        outcomeDiv.appendChild(p);
    }else if(playerSelection==='scissors' && computerSelection==='paper'){
        const p = document.createElement('p');
        p.innerText = "Your scissors have sliced your opponent's paper!";
        playerScore++;
        outcomeDiv.appendChild(p);
    }else if(playerSelection==='rock' && computerSelection==='paper'){
        const p = document.createElement('p');
        p.innerText = "You lost! your rock has been strangled by your opponent paper.";
        computerScore++;
        outcomeDiv.appendChild(p);
    }else if(playerSelection==='rock' && computerSelection==='scissors') {
        const p = document.createElement('p');
        p.innerText = "Your rock has pulverized your opponent's scissors!";
        playerScore++;
        outcomeDiv.appendChild(p);
    }else if(playerSelection==='paper' && computerSelection==='scissors'){
        const p = document.createElement('p');
        p.innerText = "You lost! your opponent's scissors have ripped your paper.";
        computerScore++;
        outcomeDiv.appendChild(p);
    }else if(playerSelection==='paper' && computerSelection==='rock'){
        const p = document.createElement('p');
        p.innerText = "Your paper has smothered your opponent's rock!";
        playerScore++;
        outcomeDiv.appendChild(p);
    }
}

const checkForWinner = (playerScore,computerScore) => {
    if(playerScore === 5){
        const h2 = document.createElement('h2');
        h2.classList.add('Player-won');
        h2.innerText = 'You won! '+ playerScore +' to '+ computerScore;
        outcomeDiv.append(h2);
    }
    if(computerScore === 5){
        const h2 = document.createElement('h2');
        h2.classList.add('Computer-won');
        h2.innerText = 'Computer won! '+ computerScore +' to ' + playerScore;
        outcomeDiv.append(h2);
    }
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



// function playRound(round){
//     const computerSelection = computerChoice();
//     const playerSelection = playerChoice();
//     const winner = checkWinner(playerSelection,computerSelection);
//     winners.push(winner);
//     logRound(playerSelection,computerSelection,winner,round);
// }

// function playerChoice(){
//     //get imput from player
//     let input = prompt("Type Rock, Paper, or Scissors");
//     while(input == null){
//         input = prompt("Type Rock, Paper, or Scissors");
//     }
//     input = input.toLowerCase();
//     let check = validateInput(input);
//     while(!check){
//         input = prompt("Type Rock, Paper, or Scissors. Spelling needs to be exact, but capitalization doesnt matter");
//         while(input==null){
//             input=prompt("Type Rock, Paper, or Scissors");
//         }
//         input = input.toLowerCase();
//         check = validateInput(input);
//     }
//     return input;
// }

function computerChoice(){  
    //let mathRandom = Math.random();
    //console.log(choices.lenght);
    //let itemAproximation = parseFloat(mathRandom * choices.length);
    //let itemSelection = Math.floor(itemAproximation);
    return choices[Math.floor(Math.random()*parseInt(choices.length))];
}

// function validateInput(choice){
//     return choices.includes(choice);    
// }

// function checkWinner(choiceP, choiceC){
//     if(choiceP === choiceC){
//         //alert("its a tie, both choose ",choiceP); 
//         return "Tie"; 
//     }else if(
//         (choiceP === "rock"     && choiceC == "scissors")   || 
//         (choiceP === "paper"    && choiceC == "rock")       || 
//         (choiceP === "scissors" && choiceC == "paper")
//      ){
//         //alert("Player wins!");
//         return "Player";
//     }else{
//         //alert("Computer wins!");
//         return "Computer";
//     }
// }

// function logWins(){
//     let playerWins = winners.filter((item)=>item=='Player').length;
//     let computerWins = winners.filter((item)=> item == "Computer").length;
//     let ties = winners.filter((item)=> item == "Tie").length;
//     console.log("results: ");
//     console.log("Player wins:   ",playerWins);
//     console.log("Computer wins: ",computerWins);
//     console.log("Ties:          ",ties);
// }

// function logRound(playerChoice,computerChoice,winner,round){
//     console.log("Round: ",round);
//     console.log("p.opt: ",playerChoice);
//     console.log("c.opt: ",computerChoice);
//     if(winner=='Tie'){
//         console.log("The round finished in a tie.")
//     }else{
//         console.log(winner," won the Round"); 
//     }
//     console.log("----------------------------")
// }

// const choices = ["rock", "paper", "scissors"];
// const winners = [];

// function game(){
//     for(let i = 1; i < 6; i++){
//         playRound(i);
//     }
//     logWins();
//     document.querySelector("button").textContent = "New Game";
// }

//game();


