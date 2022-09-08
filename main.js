const choices = ["rock", "paper", "scissors"];
const winners = [];

function game(){
    for(let i = 1; i < 6; i++){
        playRound(i);
    }
    logWins();
}

function playRound(round){
    const computerSelection = computerChoice();
    const playerSelection = playerChoice();
    const winner = checkWinner(playerSelection,computerSelection);
    winners.push(winner);
    logRound(playerSelection,computerSelection,winner,round);
}

function playerChoice(){
    //get imput from player
    let input = prompt("Type Rock, Paper, or Scissors");
    while(input == null){
        input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while(!check){
        input = prompt("Type Rock, Paper, or Scissors. Spelling needs to be exact, but capitalization doesnt matter");
        while(input==null){
            input=prompt("Type Rock, Paper, or Scissors");
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}

function computerChoice(){  
    //let mathRandom = Math.random();
    //console.log(choices.lenght);
    //let itemAproximation = parseFloat(mathRandom * choices.length);
    //let itemSelection = Math.floor(itemAproximation);
    return choices[Math.floor(Math.random()*parseInt(choices.length))];
}

function validateInput(choice){
    return choices.includes(choice);    
}

function checkWinner(choiceP, choiceC){
    if(choiceP === choiceC){
        //alert("its a tie, both choose "+choiceP); 
        return "Tie"; 
    }else if(
        (choiceP === "rock"     && choiceC == "scissors")   || 
        (choiceP === "paper"    && choiceC == "rock")       || 
        (choiceP === "scissors" && choiceC == "paper")
     ){
        //alert("Player wins!");
        return "Player";
    }else{
        //alert("Computer wins!");
        return "Computer";
    }
}

function logWins(){
    let playerWins = winners.filter((item)=>item=='Player').length;
    let computerWins = winners.filter((item)=> item == "Computer").length;
    let ties = winners.filter((item)=> item == "Tie").length;
    console.log("results: ");
    console.log("Player wins:   ",playerWins);
    console.log("Computer wins: ",computerWins);
    console.log("Ties:          ",ties);
}

function logRound(playerChoice,computerChoice,winner,round){
    console.log("Round: ",round);
    console.log("p.opt: ",playerChoice);
    console.log("c.opt: ",computerChoice);
    if(winner=='Tie'){
        console.log("The round finished in a tie.")
    }else{
        console.log(winner," won the Round"); 
    }
    console.log("----------------------------")
}

//game();